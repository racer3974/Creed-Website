import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Transparent investment options for your business growth.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="border border-border p-8 flex flex-col hover:border-primary transition-colors duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground text-sm">Perfect for small businesses starting out.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">$999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Google Ads Setup & Management",
                  "Up to $2,000 Ad Spend",
                  "Monthly Performance Report",
                  "Basic Keyword Research",
                  "Email Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full rounded-none py-6 font-serif border-primary hover:bg-primary hover:text-primary-foreground">
                  Choose Starter
                </Button>
              </Link>
            </div>

            {/* Growth Plan */}
            <div className="border-2 border-primary p-8 flex flex-col bg-secondary relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground text-sm">For businesses ready to scale aggressively.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">$1,999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Google & Meta Ads Management",
                  "Up to $10,000 Ad Spend",
                  "Bi-Weekly Performance Calls",
                  "Advanced Audience Targeting",
                  "A/B Testing & Optimization",
                  "Conversion Tracking Setup",
                  "Priority Email & Phone Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full rounded-none py-6 font-serif">
                  Choose Growth
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-border p-8 flex flex-col hover:border-primary transition-colors duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground text-sm">Custom solutions for large organizations.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Unlimited Ad Spend Management",
                  "Full-Funnel Strategy",
                  "Custom Dashboard Reporting",
                  "Dedicated Account Manager",
                  "Landing Page Consultation",
                  "Cross-Channel Integration",
                  "24/7 Priority Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full rounded-none py-6 font-serif border-primary hover:bg-primary hover:text-primary-foreground">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 text-center text-muted-foreground text-sm">
            <p>* Ad spend is paid directly to the ad platforms (Google/Meta) and is not included in our management fee.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
