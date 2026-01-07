import {RiQuestionLine, RiLightbulbFlashLine} from "react-icons/ri";

const OverviewComponent = ({
                               title = "Overview",
                               description = "Crunchtime provides customers with significant operational, labor, and sales data. However, users lack a streamlined, integrated way to translate that data into daily decision-making. While raw metrics are available, they're not consistently contextualized, prioritized, or delivered at the right moment.",
                               problemTitle = "Problem Statement",
                               problemPoints = [
                                   "In restaurants, every decision is high stakes — labour costs, stock levels, scheduling, customer experience.",
                                   "Managers are often forced to make decision under pressure and based on instinct alone. This reliance leads to reactive, suboptimal decisions that impact operations and employee experience."
                               ],
                               goalTitle = "Goal",
                               goalEmphasis = {
                                   pre: "To transform the manager's workflow from ",
                                   emphasized: "reactive",
                                   post: " to proactive."
                               },
                               goalParagraphs = [
                                   "Automate data analysis, reduce decision friction, and empower managers to confidently take the best action that maximizes efficiency."
                               ]
                           }: {
    title?: string;
    description?: string;
    problemTitle?: string;
    problemPoints?: string[];
    goalTitle?: string;
    goalEmphasis?: { pre?: string; emphasized?: string; post?: string };
    goalParagraphs?: string[];
}) => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Section Heading */}
                <h2 className="text-4xl font-semibold text-center mb-8 text-base-content">
                    {title}
                </h2>

                {/* Introductory Paragraph */}
                {description && (
                    <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-base-content/70 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Two-Column Layout for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                    {/* Left Card: Problem Statement (Standard Background) */}
                    <div className="card bg-base-100 shadow-xl rounded-xl">
                        <div className="card-body p-8 md:p-10">
                            {/* Icon - using primary color for accent */}
                            <RiQuestionLine className="text-5xl text-primary mb-6" aria-hidden="true"/>

                            <h3 className="card-title text-2xl font-bold mb-4 text-base-content">
                                {problemTitle}
                            </h3>

                            <div className="space-y-4 text-base-content/80 leading-relaxed">
                                {problemPoints.map((p, idx) => (
                                    <p className="text-lg" key={idx}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Card: Goal (Highlighted Primary Background) */}
                    {/* Note: Using text-primary-content ensures text is readable on the primary background color */}
                    <div
                        className="card shadow-xl rounded-xl">
                        <div className="card-body p-8 md:p-10">
                            {/* Icon - inherits text-primary-content color */}
                            <RiLightbulbFlashLine className="text-primary text-5xl mb-6" aria-hidden="true"/>

                            <h3 className="card-title text-2xl font-bold mb-4">
                                {goalTitle}
                            </h3>

                            <div className="space-y-6 leading-relaxed">
                                {/* Emphasized text matching the design */}
                                <p className="text-lg font-medium">
                                    {goalEmphasis?.pre}
                                    <span
                                        className="font-extrabold underline decoration-2 underline-offset-4">{goalEmphasis?.emphasized}</span>
                                    {goalEmphasis?.post}
                                </p>
                                {goalParagraphs.map((p, idx) => (
                                    <p className="text-lg text-base-content/80" key={idx}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OverviewComponent;