import React from "react";
interface NewsCardProps {
  date: string;
  title: string;
  image: string;
}
export const NewsCard = ({
  date,
  title,
  image
}: NewsCardProps) => {
  return <div className="relative group overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <span className="text-white/80 text-sm mb-2">{date}</span>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>;
};