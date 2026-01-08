import {RiInformationLine, RiLightbulbLine} from "react-icons/ri";

const InsightsComponent = ({
                               title = "Research & Analysis",
                               image,
                               insights = []
                           }) => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="bg-primary/10 text-primary rounded-xl p-3 mb-4 shadow-sm">
                        <RiInformationLine className="text-3xl" aria-hidden="true"/>
                    </div>
                    <h2 className="text-4xl font-semibold text-base-content text-center">
                        {title}
                    </h2>
                </div>

                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side: Image / Illustration */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-base-300 bg-base-100">
                        {image ? (
                            <img
                                src={image}
                                alt="Research visualization"
                                className="w-full h-full"
                            />
                        ) : (
                            <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-base-300">
                                <span className="text-base-content/40 italic">Image Placeholder</span>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Insights Cards stack */}
                    <div className="flex flex-col gap-6">
                        {insights.map((insight, index) => (
                            <div
                                key={index}
                                className="card shadow-sm border border-base-200/60 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="card-body p-6 md:p-8">
                                    <div className="flex items-start gap-4">
                                        {/* Decorative Icon for each insight */}
                                        <div className="mt-1">
                                            <RiLightbulbLine className="text-xl text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-base-content mb-2">
                                                {insight.title}
                                            </h3>
                                            <p className="text-lg text-base-content/70 leading-relaxed">
                                                {insight.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InsightsComponent;

// --- Usage Example ---
/*
const insightsData = [
  {
    title: "Demand Signals",
    description: "Managers feel most exposed when making staffing decisions for unpredictable demand (like unexpected local events or adverse weather)."
  },
  {
    title: "Report Overload",
    description: "Users report spending critical time wading through high volumes of data to isolate a single metric. This highlighted a need for a consolidated interface."
  },
  {
    title: "Performance Gaps",
    description: "Corporate administrators want a system that goes beyond reporting performance; they need a mechanism to replicate success from top-performing stores."
  }
];

<InsightsComponent
  title="Research & Analysis"
  imageUrl="/path-to-your-image.png"
  insights={insightsData}
/>
*/