interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}
export const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  title,
  description,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`flex items-center gap-8 py-16 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <p className="text-xl font-semibold mb-4">Step {stepNumber}</p>
        <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={`Step ${stepNumber} illustration`}
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};
