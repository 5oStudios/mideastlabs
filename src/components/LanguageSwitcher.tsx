import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const isArabic = i18n.language === 'ar';

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 font-medium border-primary/30 hover:bg-primary hover:text-white hover:border-primary"
    >
      <Languages className="w-4 h-4" />
      <span>{isArabic ? 'EN' : 'عربي'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
