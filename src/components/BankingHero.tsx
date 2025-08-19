import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Smartphone, CreditCard, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/banking-hero.jpg";

const BankingHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Bank Darajasidagi Xavfsizlik</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">X Bank</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Haqiqiy bank integratsiyasi, virtual hisoblar, xalqaro o'tkazmalar va 
                zamonaviy xavfsizlik tizimi bilan to'liq banking platformasi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Hozir Boshlash
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Demo Ko'rish
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">NFC & Biometrik</h3>
                  <p className="text-xs text-muted-foreground">Xavfsiz kirish</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Virtual Kartalar</h3>
                  <p className="text-xs text-muted-foreground">Onlayn to'lovlar</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Xalqaro O'tkazmalar</h3>
                  <p className="text-xs text-muted-foreground">SWIFT/SEPA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Analytics</h3>
                  <p className="text-xs text-muted-foreground">Real-time hisobotlar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="X Bank Platform Interface" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-6 -right-6 p-4 bg-gradient-card shadow-elevated border-primary/10 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">$</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Balance</p>
                  <p className="font-bold text-sm">$125,430.50</p>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-6 -left-6 p-4 bg-gradient-card shadow-elevated border-primary/10 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Virtual Card</p>
                  <p className="font-bold text-sm">**** 2468</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingHero;