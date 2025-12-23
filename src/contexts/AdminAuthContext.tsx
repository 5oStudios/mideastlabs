import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface AdminAuthContextType {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user has admin role
  const checkAdminRole = async (userId: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.rpc('has_role', {
        _user_id: userId,
        _role: 'admin'
      });
      
      if (error) {
        console.error('Error checking admin role:', error);
        return false;
      }
      
      return data === true;
    } catch (error) {
      console.error('Error checking admin role:', error);
      return false;
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Defer admin role check with setTimeout to avoid deadlock
        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id).then(setIsAdmin);
          }, 0);
        } else {
          setIsAdmin(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id).then((isAdminUser) => {
          setIsAdmin(isAdminUser);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data.user) {
        // Check if user has admin role
        const hasAdminRole = await checkAdminRole(data.user.id);
        
        if (!hasAdminRole) {
          // Sign out if not admin
          await supabase.auth.signOut();
          return { success: false, error: 'You do not have admin access. Contact your administrator.' };
        }
        
        setIsAdmin(true);
        return { success: true };
      }

      return { success: false, error: 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An unexpected error occurred' };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsAdmin(false);
  };

  return (
    <AdminAuthContext.Provider value={{
      user,
      session,
      isAuthenticated: !!user && isAdmin,
      isAdmin,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
