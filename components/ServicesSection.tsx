const ServiceCard = ({ icon, title }: { icon: string; title: string }) => (
  <div className="p-6 text-center">
    <div className="w-12 h-12 mx-auto mb-4">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
    <button className="w-8 h-8 rounded-full border border-white/20 text-white/60 hover:bg-white/10">
      →
    </button>
  </div>
);
const ServicesSection = () => {
  const services = [
    {
      icon: "https://api.iconify.design/solar:pen-new-square-linear.svg?color=white",
      title: "UI/UX creative design",
    },
    {
      icon: "https://api.iconify.design/solar:gallery-wide-linear.svg?color=white",
      title: "Visual & graphic design",
    },
    {
      icon: "https://api.iconify.design/solar:chart-2-linear.svg?color=white",
      title: "Digital marketing strategy",
    },
    {
      icon: "https://api.iconify.design/solar:user-speak-linear.svg?color=white",
      title: "Effective customer support",
    },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Giving your business some original ideas
          </h2>
          <p className="text-white/70 text-lg">
            We strive to deliver best in-class software solutions that generate
            best rating total return for business services across great mission
            goals generating billion net income
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
