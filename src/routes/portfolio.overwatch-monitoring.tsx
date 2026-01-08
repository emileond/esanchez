import {createFileRoute} from '@tanstack/react-router'
import CaseStudyLayout from '../components/CaseStudyLayout'
import Overview from "../components/Overview";
import DesignProcess from "../components/DesignProcess";
import Personas from "../components/Personas";
import Insights from "../components/Insights";
import Content from "../components/Content";
import {
    RiFileSearchLine,
    RiPaintFill,
    RiPenNibLine,
    RiRouteLine,
    RiTestTubeLine,
    RiUser3Line
} from "react-icons/ri";
import Conclusion from "../components/Conclusion";

export const Route = createFileRoute('/portfolio/overwatch-monitoring')({
    component: CaseStudyPage,
})

const insightsData = [
    {
        description: "Engineers did not have an effective system to alert them when a critical metric was trending toward an unacceptable limit."
    },
    {
        description: "Only a small subset of the thousands of data points were critical for at-a-glance monitoring."
    },
    {
        description: "Due to the necessity of monitoring up to a dozen wells simultaneously, the interface needed to maximize data density while minimizing visual noise, prioritizing color and shape to convey status quickly."
    }
];

const userTestingData = [
    {
        title: "Users want to be in control",
        description: "Users don’t want the system to make an automated action after clicking the CTA button."
    },
    {
        title: "Complex metrics lead to confusion and inaction",
        description: "Users prefer data that is easy to digest and actionable; displaying too much information causes cognitive load."
    },
    {
        title: "Context is critical",
        description: "Users need insights that are immediately relevant to their current tasks."
    }
];

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

function CaseStudyPage() {
    return (
        <CaseStudyLayout
            title="Overwatch: Monitoring for Drilling Engineering"
            date="2019"
            role="UX/UI Designer"
            website={
                {url: "https://www.hpinc.com/technologies/bit-guidance-system"}
            }
            image="/work/overwatch/ui-1.png"
        >
            <Overview
                description="Overwatch was designed for Motive Drilling Technologies to solve a critical operational challenge for field engineers. While existing software provided rich, detailed data essential for individual well analysis, it was poorly suited for simultaneous monitoring. The objective was to create a focused, high-density dashboard that allowed engineers to proactively track the health and performance of multiple active wells at once, ensuring that critical issues were flagged instantly."
                problemPoints={[
                    "Drilling engineers often monitor tenths of active wells simultaneously. Their existing dashboards were designed for single-well analysis and lacked a centralized, high-level view. This forced engineers into a cumbersome workflow.", "The absence of a clear alerting and summary system led to reactive management, increased cognitive load, and delayed decision-making, increasing the risk of costly drilling errors."
                ]}
                goalEmphasis={null}
                goalParagraphs={[
                    "Design a visual system that allows a single engineer to confidently monitor significantly more wells simultaneously than they could with the legacy solution.", "Integrate complex performance calculations directly into the UI, eliminating the need for manual data extraction and external calculations required for immediate correctional calls."
                ]}
            />
            <DesignProcess steps={
                [
                    {
                        number: 1,
                        icon: RiUser3Line,
                        title: "Define",
                        items: ["On-site observation and interviews to understand the real-world operational environment and key monitoring metrics."],
                    },
                    {
                        number: 2,
                        icon: RiFileSearchLine,
                        title: "Analysis",
                        items: ["Decomposed the current workflow and data structure to define the hierarchy of information required for proactive monitoring."],
                    },
                    {
                        number: 3,
                        icon: RiPenNibLine,
                        title: "Ideation",
                        items: ["Rapidly prototyped data visualization concepts, focusing on how to effectively convey status and risk at a glance."],
                    },
                    {
                        number: 4,
                        icon: RiTestTubeLine,
                        title: "Design",
                        items: ["Developed the high-fidelity visual system and validated the monitoring workflow with real engineers."],
                    },
                ]
            }/>
            <Personas
                persona={{
                    name: "Eric Miller",
                    role: "Directional Drilling Engineer",
                    avatarUrl: "/work/overwatch/persona.png",
                }}
                goals={["Ensure all drilling operations adhere strictly to the planned trajectory and safety regulations.", "Identify subtle changes in well deviation immediately to correct the course before incidents happen."]}
                pains={[
                    {
                        label: "Cognitive overload",
                        text: "Managing multiple wells simultaneously with dashboards designed for single-well deep dives."
                    }, {text: "No active alerting means small, concerning deviations are often missed until they become expensive, critical problems."}
                ]}
                quote="I need to quickly identify when to correct the course."
            />
            <Insights
                title="Research Insights"
                image="/work/overwatch/onsite.png"
                insights={insightsData}
            />
            <Content title="Solution Discovery"
                     icon={<RiRouteLine/>}
                     description="Solution Discovery focused on translating complex engineering calculations into intuitive visual indicators. The primary innovation was the use of a simple, color-coded status system per well, which allowed the engineer to instantly assess the overall health of their entire operation before clicking into any single well."
                     image={["/work/overwatch/old-ui.png", "/work/overwatch/iteration-1.png", "/work/overwatch/iteration-2.png", "/work/overwatch/iteration-3.png"]}
            />
            <Content image="/work/overwatch/cd-1.png"/>
            <Content image="/work/overwatch/cd-2.png"/>
            <Content image="/work/overwatch/cd-3.png"/>
            <Content title="Final Solution"
                     icon={<RiPaintFill/>}
                     image="/work/overwatch/ui-1.png"
            />
            <Conclusion>
                <>
                    <div className="flex-1/2">
                        <h3 className="font-semibold text-lg text-base-content/80 mb-4">
                            Key outcomes
                        </h3>
                        <p className="text-lg text-base-content/80 text-pretty">
                            The Overwatch project delivered significant operational value by successfully solving a core
                            monitoring challenge through targeted UX design. The product achieved immediate success
                            during its beta test phase, with engineers reporting a drastic reduction in the time
                            required to take corrective action on a well.
                        </p>
                        <p className="text-lg text-base-content/80 text-pretty">
                            Time-to-Action Reduction: The time required for an engineer to identify a critical
                            divergence and initiate the correctional workflow was reduced by 35% (avg).
                        </p>
                        <p className="text-lg text-base-content/80 text-pretty">
                            Positive User Feedback: The design received overwhelmingly positive feedback, positioning
                            Overwatch as a scalable tool for the entire engineering organization.
                        </p>
                    </div>
                </>
            </Conclusion>

        </CaseStudyLayout>
    )
}
