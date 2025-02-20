import { Navigation } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Opportunits = () => {
  const services = [
    "IT consultancy",
    "Product design",
    "Cloud computing",
    "Big data analytics",
    "IT management",
    "Cloud services",
  ];
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-xl mb-4">One Platform</p>
        <div className="space-y-8">
          <h1 className="text-7xl font-bold">
            Endlesso
            <br />
            <span className="text-[#5CC4FF]">opportunities</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service} />
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Opportunits;
