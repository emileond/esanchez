// Importing specific icons from Remix Icons
import {
    RiFileSearchLine,
    RiUser3Line,
    RiGitMergeLine,
    RiPenNibLine,
    RiTestTubeLine,
    RiArrowRightDoubleFill
} from "react-icons/ri";
import type {IconType} from "react-icons";

// Types for props
type ProcessStep = {
    number: number;
    icon: IconType;
    title: string;
    items: string[];
};

type DesignProcessProps = {
    title?: string;
    steps?: ProcessStep[];
};

const defaultSteps: ProcessStep[] = [
    {
        number: 1,
        icon: RiFileSearchLine,
        title: "Research",
        items: ["Quantitative Research", "Qualitative Research"],
    },
    {
        number: 2,
        icon: RiUser3Line,
        title: "Define",
        items: ["Personas", "JTBD (Jobs to be Done)"],
    },
    {
        number: 3,
        icon: RiGitMergeLine, // Represents connecting ideas/brainstorming
        title: "Solution Discovery",
        items: ["Brainstorming workshop", "Insights Framework"],
    },
    {
        number: 4,
        icon: RiPenNibLine,
        title: "Design",
        items: ["Insight anatomy", "Surfaces"],
    },
    {
        number: 5,
        icon: RiTestTubeLine,
        title: "Testing",
        items: ["Prototype testing", "Surveys"],
    },
];

const DesignProcessComponent = ({
                                    title = "Design Process",
                                    steps = defaultSteps,
                                }: DesignProcessProps) => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto w-full">
                {/* Section Heading with decorative arrows */}
                <div className="flex items-center gap-3 mb-12">
                    <h2 className="text-4xl font-semibold text-base-content">
                        {title}
                    </h2>
                    {/* Decorative arrows using Remix Icon */}
                    <RiArrowRightDoubleFill className="text-4xl text-primary/50" aria-hidden="true"/>
                </div>

                {/* 5-Column Grid for Cards (responsive) */}
                <div className="grid grid-flow-col auto-cols-fr gap-4 items-stretch">
                    {steps.map((step) => {
                        const IconComponent = step.icon;

                        return (
                            // Card Container
                            // 'relative' and 'overflow-hidden' are needed for the background number
                            <div
                                key={step.number}
                                className="min-w-[220px] card bg-base-100 shadow-md border border-base-200 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Large Background Number */}
                                <div
                                    className="absolute -right-2 -top-5 text-[10rem] font-black text-base-200/90 select-none pointer-events-none z-0 leading-none"
                                    aria-hidden="true"
                                >
                                    {step.number}
                                </div>

                                {/* Card Content */}
                                <div className="card-body p-8 relative z-10">
                                    {/* Icon with primary color background */}
                                    <div className="bg-primary/10 text-primary rounded-xl p-3 w-fit mb-4 shadow-sm">
                                        <IconComponent className="text-3xl" aria-hidden="true"/>
                                    </div>

                                    <h3 className="card-title text-xl font-bold mb-3 text-base-content">
                                        {step.title}
                                    </h3>

                                    {/* Disc List */}
                                    <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                        {step.items.map((item, index) => (
                                            <li key={index} className="leading-snug">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DesignProcessComponent;