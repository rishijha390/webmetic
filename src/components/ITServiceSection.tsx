const FeatureItem = ({ title }: { title: string }) => (
  <div className="flex items-center space-x-2 mb-4">
    <div className="w-2 h-2 bg-[#4CD964] rounded-full"></div>
    <span className="text-white font-medium">{title}</span>
  </div>
);
const ITServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Team collaboration"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            We deal with the aspects IT Services
          </h2>
          <p className="text-white/70 mb-8">
            Well aware of the existing mobile app market trends to keep tabs on
            the evolving trends of the industry to developing high-grade app and
            manage quality at the top positions standard
          </p>
          <div className="grid grid-cols-2 gap-4">
            <FeatureItem title="Seize opportunities and spark" />
            <FeatureItem title="Comprehensive test approach" />
            <FeatureItem title="Experience to share goals success" />
            <FeatureItem title="Innovate create great solutions" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITServicesSection;
