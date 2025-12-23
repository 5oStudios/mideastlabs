import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Image,
  Layers,
  Images,
  Award,
  Building2,
  Phone,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const stats = [
  { title: 'Hero Banners', count: 4, icon: Image, href: '/admin/hero-banners', color: 'bg-blue-500' },
  { title: 'Services', count: 12, icon: Layers, href: '/admin/services', color: 'bg-green-500' },
  { title: 'Gallery Images', count: 20, icon: Images, href: '/admin/gallery', color: 'bg-purple-500' },
  { title: 'Certificates', count: 9, icon: Award, href: '/admin/accreditations', color: 'bg-orange-500' },
];

const quickActions = [
  { title: 'Add Hero Banner', description: 'Add a new carousel banner', href: '/admin/hero-banners', icon: Image },
  { title: 'Add Service', description: 'Create a new service entry', href: '/admin/services', icon: Layers },
  { title: 'Upload Gallery Image', description: 'Add images to the gallery', href: '/admin/gallery', icon: Images },
  { title: 'Update Contact Info', description: 'Edit contact details', href: '/admin/contact-settings', icon: Phone },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.count}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                  <span>Active items</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <action.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Management Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Company Profile
            </CardTitle>
            <CardDescription>Manage your company profile PDF download link</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/admin/company-profile">
                Edit Profile <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Contact Settings
            </CardTitle>
            <CardDescription>Update contact information and working hours</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/admin/contact-settings">
                Edit Settings <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
