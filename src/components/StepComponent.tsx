import { StepSection } from "./StepSection";

const StepComponent = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4">
        <StepSection
          stepNumber={1}
          title="Create"
          description="Web designing in a powerful way of just not a profession, hony. We have a tendency to beve."
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        />
        <StepSection
          stepNumber={2}
          title="Engage"
          description="Web designing in a powerful way of just not a profession, hony. We have a tendency to beve."
          imageUrl="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=1200&q=80"
          reverse
        />
      </main>
    </div>
  );
};

export default StepComponent;
