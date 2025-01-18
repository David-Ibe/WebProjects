export function StatsSection() {
    return (
      <section className="py-10 md:py-14 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 bg-background rounded-lg border border-border/50 text-center hover:border-border transition-all duration-200">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">17,841+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Agents & Developers
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border/50 text-center hover:border-border transition-all duration-200">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">106,333+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Property Listings
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border/50 text-center hover:border-border transition-all duration-200">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">320+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Areas Covered
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}