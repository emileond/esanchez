import {RiNodeTree} from "react-icons/ri";

const ProcessStepperComponent = ({
                                     title = "Solution Discovery",
                                     description,
                                     steps = []
                                 }) => {
    return (
        <section className="py-16 px-4 bg-base-100">
            <div className="container mx-auto max-w-6xl">

                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-content p-3 rounded-xl shadow-lg">
                        <RiNodeTree className="text-3xl" aria-hidden="true"/>
                    </div>
                    <h2 className="text-4xl font-bold text-base-content">
                        {title}
                    </h2>
                </div>

                {/* Description Text */}
                {description && (
                    <p className="max-w-4xl text-lg text-base-content/70 leading-relaxed mb-12">
                        {description}
                    </p>
                )}

                {/* Stepper Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col">

                            {/* Step Header Label */}
                            <div
                                className="bg-primary text-primary-content py-3 px-6 rounded-xl text-center font-bold text-xl shadow-md z-10">
                                {step.title}
                            </div>

                            {/* Step Content Card */}
                            <div
                                className="bg-base-200/40 border border-base-300 rounded-2xl p-8 pt-10 -mt-4 min-h-[160px] flex flex-col justify-center">
                                <ul className="list-disc list-outside pl-5 space-y-3 text-base-content/80">
                                    {step.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="leading-tight">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessStepperComponent;

// --- Usage Example ---
/*
const discoveryData = [
  {
    title: "Alignment",
    items: ["Define success"]
  },
  {
    title: "Ideation",
    items: [
      "User Journey Map",
      "HMW: Insights Brainstorming",
      "Insights Framework"
    ]
  },
  {
    title: "Design",
    items: [
      "UI Design",
      "Concept Validation"
    ]
  }
];

<ProcessStepperComponent
  title="Solution Discovery"
  description="We ran this process to ensure our feature delivered real, measurable value instead of just more data. The initial goals were to get everyone aligned and design a scalable system that managers could trust and use immediately."
  steps={discoveryData}
/>
*/