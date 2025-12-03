import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive advertising solutions tailored to your business goals.
          </p>
        </div>
      </section>

      {/* Google Ads Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Search Engine Marketing</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Google Ads</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Be found when it matters most. We manage high-performance Google Ads campaigns that capture intent and drive qualified traffic to your site. From keyword research to ad copy optimization, we handle it all.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Search Network Campaigns",
                  "Display Advertising",
                  "Google Shopping Ads",
                  "Remarketing Strategies",
                  "Conversion Tracking Setup"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="rounded-none px-8 py-6 font-serif">Get Started with Google Ads</Button>
              </Link>
            </div>
            <div className="relative h-[500px] bg-secondary overflow-hidden">
              <img 
                src="/images/service-ads.jpg" 
                alt="Google Ads Visualization" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] bg-background overflow-hidden">
              <img 
                src="/images/hero-luxury.jpg" 
                alt="Social Media Marketing" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Social Media Advertising</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meta Ads</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Connect with your audience where they spend their time. Our Facebook and Instagram campaigns are designed to build brand awareness, engage users, and drive direct sales through visually compelling creatives.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Audience Targeting & Segmentation",
                  "Creative Ad Design",
                  "A/B Testing",
                  "Pixel Integration",
                  "Lead Generation Forms"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="rounded-none px-8 py-6 font-serif">Launch Meta Campaigns</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "We analyze your current presence and identify opportunities." },
              { step: "02", title: "Strategy", desc: "We build a custom roadmap aligned with your KPIs." },
              { step: "03", title: "Launch", desc: "We deploy campaigns with precision targeting and creative." },
              { step: "04", title: "Optimize", desc: "We continuously refine based on real-time data." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif font-bold opacity-20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
