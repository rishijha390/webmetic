import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">A</span>
          </div>
          <span className="text-white text-xl font-semibold">Altech</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Pages
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Projects
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Blog
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Contact Us
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <span className="text-white">Tollfree : (+123 456 7890)</span>
        </div>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
