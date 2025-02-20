import { Headphones, Pen, ShoppingCart } from "lucide-react";
const Navigation = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-l-lg">
      <div className="flex flex-col gap-6 text-white/70">
        <button className="hover:text-white transition-colors">
          <Headphones size={24} />
        </button>
        <button className="hover:text-white transition-colors">
          <Pen size={24} />
        </button>
        <button className="hover:text-white transition-colors">
          <ShoppingCart size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
