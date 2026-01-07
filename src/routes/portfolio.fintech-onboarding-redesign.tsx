import {createFileRoute} from '@tanstack/react-router'
import CaseStudyLayout from '../components/CaseStudyLayout'
import Overview from "../components/Overview";
import DesignProcess from "../components/DesignProcess";
import Personas from "../components/Personas";
import Insights from "../components/Insights";
import ProcessStepper from "../components/ProcessStepper";
import Content from "../components/Content";
import {RiInfoI} from "react-icons/ri";
import ProjectIntro from "../components/ProjectIntro";
import Conclusion from "../components/Conclusion";

export const Route = createFileRoute('/portfolio/fintech-onboarding-redesign')({
    component: FintechCaseStudyPage,
})

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

function FintechCaseStudyPage() {
    return (
        <CaseStudyLayout
            isProtected
            title="Fintech onboarding redesign"
            summary="Reduced time-to-first-value by 42% through progressive profiling and guided setup across web and mobile."
            date="2025"
            role="Product Designer"
            website={
                {url: "crunchtime.com"}
            }
            imageSrc="https://images.unsplash.com/photo-1720962158789-9389a4f399da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
            <Overview/>
            <DesignProcess/>
            <Personas/>
            <Insights
                title="Research & Analysis"
                imageUrl="/path-to-your-image.png"
                insights={insightsData}
            />
            <ProcessStepper
                title="Solution Discovery"
                description="We ran this process to ensure our feature delivered real, measurable value instead of just more data. The initial goals were to get everyone aligned and design a scalable system that managers could trust and use immediately."
                steps={discoveryData}
            />
            <Content title="Design"
                     icon={<RiInfoI/>}
                     description="Lorem ipsum"
                     image="https://images.unsplash.com/photo-1763906667544-02814d191864?q=80&w=818&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Conclusion>

                <>
                    <div className="flex-1/2">
                        <h3 className="font-semibold text-lg text-base-content/80">
                            Learnings
                        </h3>
                        <p>
                            lorem ipsum
                        </p>
                    </div>

                    <div className="flex-1/2">
                        <h3 className="font-semibold text-lg text-base-content/80">
                            Key outcomes
                        </h3>
                        <p>
                            lorem ipsum
                        </p>
                    </div>
                </>
            </Conclusion>

        </CaseStudyLayout>
    )
}
