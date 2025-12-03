import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-luxury.jpg" 
            alt="Luxury Workspace" 
            className="w-full h-full object-cover opacity-90 dark:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
        </div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Precision in <br/>
            <span className="italic font-light">Advertising</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            We craft high-performance Google and Meta ad campaigns that elevate your brand and drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/contact">
              <Button size="lg" className="rounded-none px-8 py-6 text-lg font-serif tracking-wide border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-300">
                Start Your Campaign
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-none px-8 py-6 text-lg font-serif tracking-wide border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Data-Driven Strategy Meets <span className="italic">Creative Excellence</span>.
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Creed Advertisements, we don't just run ads; we engineer growth. Our approach combines rigorous data analysis with compelling creative to ensure every dollar spent delivers maximum return.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to dominate search results or captivate audiences on social media, our bespoke strategies are tailored to your unique business goals.
              </p>
              <Link href="/about">
                <div className="group flex items-center gap-2 cursor-pointer">
                  <span className="font-serif font-bold text-lg border-b border-primary pb-1 group-hover:text-muted-foreground transition-colors">Read Our Story</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/about-team.jpg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-background border border-border p-6 flex flex-col justify-center items-center text-center shadow-xl hidden md:flex">
                <span className="text-5xl font-serif font-bold mb-2">100%</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Client Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Specialized solutions designed to scale your business through the most powerful advertising platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Google Ads",
                desc: "Capture high-intent traffic with precision-targeted search, display, and shopping campaigns."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Meta Ads",
                desc: "Build brand awareness and drive conversions with visually stunning campaigns on Facebook and Instagram."
              },
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Analytics & Strategy",
                desc: "Comprehensive tracking and reporting to optimize performance and maximize ROI continuously."
              }
            ].map((service, index) => (
              <div key={index} className="bg-background p-10 border border-border hover:border-primary transition-colors duration-300 group">
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <Link href="/services">
                  <span className="uppercase text-xs font-bold tracking-widest border-b border-transparent group-hover:border-primary transition-all pb-1 cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/service-ads.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-light">
            Let's discuss how we can transform your digital presence and drive real business results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none px-10 py-8 text-xl bg-background text-foreground hover:bg-background/90 border-0">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
