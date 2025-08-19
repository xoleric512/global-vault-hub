import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smartphone, 
  Globe, 
  CreditCard, 
  BarChart3, 
  Users, 
  Lock, 
  Fingerprint,
  Wallet,
  Target,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const FeatureSection = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "Bank Darajasidagi Xavfsizlik",
      description: "2FA, biometrik autentifikatsiya va fraud detection bilan eng yuqori xavfsizlik",
      highlights: ["Biometrik kirish", "SMS tasdiqlash", "Fraud AI"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Xalqaro O'tkazmalar",
      description: "SWIFT va SEPA orqali dunyo bo'ylab tez va xavfsiz pul o'tkazmalari",
      highlights: ["SWIFT network", "SEPA instant", "150+ mamlakat"],
      color: "success"
    },
    {
      icon: CreditCard,
      title: "Virtual Kartalar",
      description: "NFC texnologiyasi va onlayn to'lovlar uchun virtual Visa/Mastercard kartalar",
      highlights: ["NFC to'lovlar", "Onlayn xaridlar", "Limitlar sozlash"],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Analytics va Hisobotlar",
      description: "Real-time statistika, moliyaviy tahlil va batafsil hisobotlar",
      highlights: ["Real-time data", "Moliyaviy tahlil", "Export PDF/Excel"],
      color: "success"
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: "NFC To'lovlar", description: "Telefon bilan to'lash" },
    { icon: Fingerprint, title: "Biometrik Xavfsizlik", description: "Barmoq izi va yuz tanib olish" },
    { icon: Wallet, title: "Ko'p Valyuta", description: "USD, EUR, GBP, UZS, RUB" },
    { icon: Users, title: "Admin Panel", description: "To'liq monitoring va boshqaruv" },
    { icon: Lock, title: "End-to-End Encryption", description: "Ma'lumotlar shifrlash" },
    { icon: Target, title: "KYC Verification", description: "Avtomatik tasdiqlash" }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime", icon: TrendingUp },
    { value: "24/7", label: "Support", icon: Users },
    { value: "256-bit", label: "Encryption", icon: Shield },
    { value: "150+", label: "Countries", icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Xususiyatlar
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Professional Banking Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zamonaviy texnologiyalar va eng yuqori xavfsizlik standartlari bilan 
            qurilgan to'liq banking ekotizimi
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-card border-primary/10 shadow-card">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-elevated border-primary/10 hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    feature.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-success'
                  }`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="p-6 bg-background/50 border-primary/10 hover:bg-gradient-card hover:shadow-card transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Security Banner */}
        <Card className="mt-16 p-8 bg-gradient-hero text-white border-0 shadow-elevated">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-75" />
            <h3 className="text-2xl font-bold mb-4">Enterprise Grade Security</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Bank standartlariga mos keluvchi xavfsizlik choralari, 
              end-to-end encryption va 24/7 monitoring bilan
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeatureSection;