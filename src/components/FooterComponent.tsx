import { FloatingButtons } from "./FloatingButtons";
import { Footer } from "./Footer";
import HeroSectionF from "./HeroSectionF";
import { NewsCard } from "./NewsCard";
import { PartnersSection } from "./PartnersSection";
export default function FooterComponent() {
  const newsItems = [
    {
      date: "22 Dec 2020",
      title: "5 Easy Ways To Improve",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      date: "10 Nov 2020",
      title: "How Can I Manage IT",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    },
    {
      date: "16 Feb 2020",
      title: "Digital Conference Of IT",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSectionF />
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
      <PartnersSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
