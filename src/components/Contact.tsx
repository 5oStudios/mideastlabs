import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import contactLabImage from "@/assets/contact-lab-illustration.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required"
  }).max(100, {
    message: "Name must be less than 100 characters"
  }),
  email: z.string().trim().email({
    message: "Invalid email address"
  }).max(255, {
    message: "Email must be less than 255 characters"
  }),
  phone: z.string().trim().min(1, {
    message: "Phone number is required"
  }).max(20, {
    message: "Phone must be less than 20 characters"
  }),
  message: z.string().trim().min(1, {
    message: "Message is required"
  }).max(1000, {
    message: "Message must be less than 1000 characters"
  })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xbdryqrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t("contact.form.success"));
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast.error(t("contact.form.error"));
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src={contactLabImage} alt="Laboratory Equipment Illustration" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-background/95 via-background/80 to-background/50`}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className={`inline-flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} bg-accent/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm`}>
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-accent text-lg font-semibold">{t("contact.badge")}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("contact.title")}
          </h2>
          
          <p className="text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Form - Centered Overlay */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="card-gradient shadow-strong rounded-2xl p-8 lg:p-10 backdrop-blur-md bg-background/95 border border-border/50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  {t("contact.form.name")} *
                </Label>
                <Input id="name" type="text" placeholder={t("contact.form.namePlaceholder")} {...register("name")} className={errors.name ? "border-destructive" : ""} dir={isRTL ? "rtl" : "ltr"} />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  {t("contact.form.email")} *
                </Label>
                <Input id="email" type="email" placeholder={t("contact.form.emailPlaceholder")} {...register("email")} className={errors.email ? "border-destructive" : ""} dir="ltr" />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  {t("contact.form.phone")} *
                </Label>
                <Input id="phone" type="tel" placeholder={t("contact.form.phonePlaceholder")} {...register("phone")} className={errors.phone ? "border-destructive" : ""} dir="ltr" />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  {t("contact.form.message")} *
                </Label>
                <Textarea id="message" placeholder={t("contact.form.messagePlaceholder")} rows={6} {...register("message")} className={errors.message ? "border-destructive" : ""} dir={isRTL ? "rtl" : "ltr"} />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className={`w-full bg-primary hover:bg-primary-deep shadow-glow flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                {isSubmitting ? t("contact.form.sending") : (
                  <>
                    <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t("contact.form.submit")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
