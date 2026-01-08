import {
    RiUserFill,
    RiFocus2Line,
    RiDoubleQuotesL,
    RiEmotionUnhappyLine
} from "react-icons/ri";

// Types for props
interface PersonaInfo {
    name: string;
    role: string;
    avatarUrl?: string;
}

interface PainPoint {
    label?: string;
    text?: string;
}

interface PersonasProps {
    title?: string;
    persona?: PersonaInfo;
    goals?: string[];
    quote?: string;
    pains?: PainPoint[];
}

const defaultPersona: PersonaInfo = {
    name: "Marcus Diaz",
    role: "Store Manager @ Tasty Pizza",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
};

const defaultGoals: string[] = [
    "Ensure staffing and inventory levels are optimized and within budgets.",
    "Create fair schedules, preventing costly burnout or turnover.",
    "Ensure the execution of operations remains high, regardless of volume.",
];

const defaultPains: PainPoint[] = [
    {
        label: "Analysis Paralysis",
        text: "Too much data in too many reports makes it nearly impossible to isolate the one thing that needs fixing.",
    },
    {
        label: "Reactive Management",
        text: "He often realizes a problem too late, forcing him to scramble to fix it during the shift.",
    },
];

const PersonasComponent = ({
                               title = "Personas",
                               persona = defaultPersona,
                               goals = defaultGoals,
                               quote = "My biggest challenge isn't running the floor, it's finding the time I need to confidently analyze the data",
                               pains = defaultPains,
                           }: PersonasProps) => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-10">
                    {/* Header Icon */}
                    <div className="bg-primary/10 text-primary rounded-xl p-3 mb-4 shadow-sm">
                        <RiUserFill className="text-4xl" aria-hidden="true"/>
                    </div>
                    <h2 className="text-4xl font-semibold text-base-content">
                        {title}
                    </h2>
                </div>

                {/* Bento Box Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Profile (Top-Left) */}
                    <div className="card bg-base-100 shadow-md border border-base-200/50 h-full">
                        <div className="card-body flex flex-col items-center justify-center text-center p-8">
                            <div className="avatar mb-4">
                                <div
                                    className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {/* Persona image */}
                                    <img
                                        src={persona.avatarUrl || "https://i.pravatar.cc/150?u=fallback"}
                                        alt={persona.name}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-base-content mb-1">
                                {persona.name}
                            </h3>
                            <p className="text-base-content/70 font-medium">
                                {persona.role}
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Goals/Needs (Top-Right) */}
                    <div className="card bg-base-100 shadow-md border border-base-200/50 h-full">
                        <div className="card-body p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <RiFocus2Line className="text-2xl text-primary" aria-hidden="true"/>
                                <h3 className="text-xl font-semibold text-base-content">
                                    Goals/Needs:
                                </h3>
                            </div>
                            <ul className="list-disc list-outside pl-5 space-y-3 text-base-content/80 leading-snug text-lg">
                                {goals.map((g, idx) => (
                                    <li key={idx}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Quote (Bottom-Left) */}
                    {/* Using primary color background */}
                    <div className="card bg-primary text-primary-content shadow-md h-full relative overflow-hidden">
                        {/* Decorative large quote icon in background */}
                        <RiDoubleQuotesL
                            className="absolute top-4 left-4 text-primary-content/20 text-8xl pointer-events-none select-none"
                            aria-hidden="true"/>
                        <div className="card-body p-8">
                            <div className="flex items-center gap-3 h-full">
                                <p className="text-xl italic text-center text-pretty">
                                    "{quote}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Pain Points (Bottom-Right) */}
                    <div className="card bg-base-100 shadow-md border border-base-200/50 h-full">
                        <div className="card-body p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <RiEmotionUnhappyLine className="text-2xl text-error" aria-hidden="true"/>
                                <h3 className="text-xl font-semibold text-base-content">
                                    Pain Points:
                                </h3>
                            </div>
                            <div className="space-y-4 text-base-content/80 leading-snug text-lg">
                                {pains.map((p, idx) => (
                                    <p key={idx}>
                                        <span className="font-medium text-base-content">{p.label}:</span> {p.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PersonasComponent;