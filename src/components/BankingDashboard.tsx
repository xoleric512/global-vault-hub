import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Send, 
  Download, 
  Eye, 
  EyeOff, 
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  MoreHorizontal,
  Globe,
  Smartphone,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const BankingDashboard = () => {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    { name: "Main Account (USD)", balance: 125430.50, iban: "US89 3704 0044 0532 0130 00", currency: "USD" },
    { name: "Euro Account", balance: 45230.75, iban: "DE89 3704 0044 0532 0130 00", currency: "EUR" },
    { name: "Savings (UZS)", balance: 15420000, iban: "UZ80 0250 0000 0000 0000 1234", currency: "UZS" }
  ];

  const transactions = [
    { id: 1, type: "incoming", description: "Salary Payment", amount: 5200.00, currency: "USD", time: "2 soat oldin", status: "completed" },
    { id: 2, type: "outgoing", description: "Transfer to John Doe", amount: -850.00, currency: "USD", time: "5 soat oldin", status: "completed" },
    { id: 3, type: "incoming", description: "Freelance Payment", amount: 1250.00, currency: "EUR", time: "1 kun oldin", status: "completed" },
    { id: 4, type: "outgoing", description: "Online Purchase", amount: -125.50, currency: "USD", time: "2 kun oldin", status: "pending" }
  ];

  const cards = [
    { id: 1, type: "Virtual Visa", last4: "2468", expiry: "12/27", status: "active", balance: 5000 },
    { id: 2, type: "Virtual Mastercard", last4: "8642", expiry: "08/26", status: "active", balance: 2500 }
  ];

  const formatCurrency = (amount: number, currency: string) => {
    if (currency === "UZS") {
      return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
    }
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency 
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Banking Dashboard</h2>
          <p className="text-muted-foreground">To'liq nazorat va boshqaruv imkoniyatlari</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Accounts & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Accounts Overview */}
            <Card className="bg-gradient-card shadow-card border-primary/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Hisoblar
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowBalance(!showBalance)}
                >
                  {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {accounts.map((account, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg border border-primary/10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{account.name}</h3>
                        <p className="text-sm text-muted-foreground">{account.iban}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {account.currency}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {showBalance ? formatCurrency(account.balance, account.currency) : "••••••"}
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Yangi Hisob Qo'shish
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="default" size="lg" className="h-20 flex-col">
                <Send className="w-6 h-6 mb-2" />
                <span>Pul Jo'natish</span>
              </Button>
              <Button variant="outline" size="lg" className="h-20 flex-col">
                <Download className="w-6 h-6 mb-2" />
                <span>Pul Olish</span>
              </Button>
            </div>

            {/* Recent Transactions */}
            <Card className="bg-gradient-card shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                  So'nggi Tranzaksiyalar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'incoming' 
                            ? 'bg-gradient-success' 
                            : 'bg-destructive/10'
                        }`}>
                          {transaction.type === 'incoming' ? (
                            <ArrowDownLeft className="w-4 h-4 text-white" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-destructive" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{transaction.description}</p>
                          <p className="text-xs text-muted-foreground">{transaction.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          transaction.type === 'incoming' ? 'text-success' : 'text-destructive'
                        }`}>
                          {transaction.type === 'incoming' ? '+' : ''}{formatCurrency(transaction.amount, transaction.currency)}
                        </p>
                        <Badge 
                          variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {transaction.status === 'completed' ? 'Bajarildi' : 'Kutilmoqda'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Cards & Profile */}
          <div className="space-y-6">
            {/* Virtual Cards */}
            <Card className="bg-gradient-card shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Virtual Kartalar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cards.map((card) => (
                  <div key={card.id} className="relative">
                    <div className="p-4 bg-gradient-hero rounded-xl text-white shadow-elevated">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xs opacity-75">{card.type}</p>
                          <p className="text-lg font-bold">•••• •••• •••• {card.last4}</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Smartphone className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs opacity-75">Muddat</p>
                          <p className="font-bold">{card.expiry}</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">Balance</p>
                          <p className="font-bold">${card.balance}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white hover:bg-white/20">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Yangi Karta
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-4 bg-gradient-success text-white border-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Bu Oylik Daromad</p>
                    <p className="text-2xl font-bold">$8,450</p>
                  </div>
                  <TrendingUp className="w-8 h-8 opacity-75" />
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-primary/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Bu Oylik Xarajat</p>
                    <p className="text-2xl font-bold text-destructive">$3,230</p>
                  </div>
                  <ArrowUpRight className="w-8 h-8 text-destructive" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingDashboard;