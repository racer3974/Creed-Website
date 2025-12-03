import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            We are a team of digital strategists dedicated to your growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/about-team.jpg" 
                alt="Our Team Collaboration" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Creed Advertisements was founded on a simple belief: that digital advertising should be transparent, precise, and relentlessly focused on results.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In a world of noise, we bring clarity. We don't believe in vanity metrics. We believe in leads, sales, and tangible ROI. Our team combines analytical rigor with creative flair to build campaigns that not only reach your audience but resonate with them.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Data-Driven Decisions",
                  "Transparent Reporting",
                  "Creative Excellence",
                  "Continuous Optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Integrity</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                We operate with complete transparency. You'll always know where your budget is going and what results it's driving.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Innovation</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                The digital landscape changes daily. We stay ahead of the curve, testing new strategies to keep you competitive.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Partnership</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                We view ourselves as an extension of your team. Your success is our success, and we're in it for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
