interface ServiceCardProps {
  title: string;
}
const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <div className="border border-white/10 rounded-3xl p-6 hover:bg-white/5 transition-colors cursor-pointer">
      <h3 className="text-white text-xl font-medium">{title}</h3>
    </div>
  );
};

export default ServiceCard;
