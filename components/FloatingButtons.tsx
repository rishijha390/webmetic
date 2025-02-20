import { Headphones, PenSquare, ShoppingCart, ArrowUp } from "lucide-react";
export const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-2">
      <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50">
        <Headphones size={20} />
      </button>
      <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50">
        <PenSquare size={20} />
      </button>
      <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50">
        <ShoppingCart size={20} />
      </button>
      <button className="p-3 bg-green-400 text-white rounded-lg shadow-lg hover:bg-green-500">
        <ArrowUp size={20} />
      </button>
    </div>
  );
};
