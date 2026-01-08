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

export const Route = createFileRoute('/portfolio/uk-meds')({
    component: UKMedsCaseStudyPage,
})

const insightsData = [
    {
        description: "Users are anxious about providing personal health data remotely."
    },
    {
        description: "Anxiety peaks during the sign-up and assessment phase due to unclear expectations about costs, wait times, and who they will speak to."
    },
    {
        description: "The moment a patient receives a successful diagnosis or prescription approval, they expect an immediate, pre-populated path to ordering their medication."
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

function UKMedsCaseStudyPage() {
    return (
        <CaseStudyLayout
            // isProtected
            title="UK Meds MVP"
            date="2025"
            role="Product Designer"
            website={
                {url: "crunchtime.com"}
            }
            image="/work/uk-meds/ds.png"
        >
            <Overview
                description="As a leading UK online pharmacy, UK Meds' goal was to expand into digital healthcare by offering remote consultations with healthcare providers. This service was strategically designed to benefit patients through a convenient solution, and to benefit the business by creating a seamless, single-session funnel from clinical diagnosis to immediate prescription ordering, solidifying the brand's position in the healthtech market."
                problemPoints={[
                    "The challenge was designing a compliant, safe, and trustworthy online platform that could condense the journey from initial patient assessment to receiving medication into one smooth, intuitive digital experience."
                ]}
                goalEmphasis={null}
                goalParagraphs={[
                    "Launch a safe, trustworthy digital consultation platform.", "Create a high-converting user flow that directly links a successful consultation outcome to immediate prescription ordering via the UK Meds platform.", "Establish a modern design system and component library to ensure consistency and development speed, and support the expansion of other products."
                ]}
            />
            <DesignProcess steps={
                [
                    {
                        number: 1,
                        icon: RiUser3Line,
                        title: "Define",
                        items: ["Define patient proto-personas"],
                    },
                    {
                        number: 2,
                        icon: RiFileSearchLine,
                        title: "Research",
                        items: ["Competitive Analysis"],
                    },
                    {
                        number: 3,
                        icon: RiPenNibLine,
                        title: "Ideation",
                        items: ["Brainstorming sessions", "Prioritization matrix"],
                    },
                    {
                        number: 4,
                        icon: RiTestTubeLine,
                        title: "Design",
                        items: ["Design System", "Components & Core Flows"],
                    },
                ]
            }/>
            <Personas
                persona={{
                    name: "Sarah Davies",
                    role: "'The busy profesional'",
                    avatarUrl: "/work/uk-meds/persona.png",
                }}
                goals={["Needs the fastest way to access routine medication for a known condition without taking time off work. Values privacy and a quick, efficient checkout experience."]}
                pains={[
                    {text: "Hates navigating complex medical forms or having to wait days for a response."}, {text: "Distrusts services that look cheap or non-safe."}
                ]}
                quote="I just need a quick, reliable check-in and to get my prescription ordered without spending my afternoon."
            />
            <Personas
                persona={{
                    name: "David Singh",
                    role: "'The caregiver'",
                    avatarUrl: "/work/uk-meds/persona-2.png",
                }}
                goals={["Seeking advice for a family member or a new, low-stakes health concern.", "Needs clear, jargon-free explanations of the diagnosis and treatment plan."]}
                pains={[
                    {text: "Worried about misdiagnosis through remote services."}, {text: "Needs the platform to clearly display practitioner credentials and security measures to feel safe."}
                ]}
                quote="I need to know I'm talking to a proper professional and that my information is completely secure."
            />
            <Insights
                title="Research Insights"
                image="/work/uk-meds/competitive-analysis.png"
                insights={insightsData}
            />
            <Content title="Solution Discovery"
                     icon={<RiRouteLine/>}
                     description="The Solution Discovery phase was highly collaborative, utilizing Brainstorming Sessions with stakeholders (Sales, Marketing, Product, and Engineering) to define the MVP's scope. We used the Journey Map as our anchor, focusing our efforts entirely on eliminating friction between the clinical decision and the pharmacy sale."
                     image="/work/uk-meds/solution-discovery.png"
            />
            <Content title="Building The Design System"
                     icon={<RiRouteLine/>}
                     description="We established the foundation for the entire digital health ecosystem by creating a Design System from scratch, and built the initial component libraries that included core components for the scheduling and video consultation flow."
                     image="/work/uk-meds/ds.png"
            />
            <Content title="Final Solution"
                     icon={<RiPaintFill/>}
                     description="The MVP launched with a focused guided consultation flow. Key elements of the final solution included a waiting room, the consultation experience, and a single-click fulfillment path post-consultation. Once the consultation was approved, the patient was immediately presented with a pre-populated cart containing their prescribed medication, aligned to the high-conversion business goal while delivering immediate value to the patient."
                     image={["/work/uk-meds/ui-1.png", "/work/uk-meds/ui-2.png", "/work/uk-meds/ui-3.png", "/work/uk-meds/ui-4.png", "/work/uk-meds/ui-5.png", "/work/uk-meds/ui-6.png", "/work/uk-meds/ui-7.png"]}
            />
            <Conclusion>
                <>
                    <div className="flex-1/2">
                        <h3 className="font-semibold text-lg text-base-content/80 mb-4">
                            Key outcomes
                        </h3>
                        <p className="text-lg text-base-content/80 text-pretty">
                            The MVP successfully met the business goal of seamless fulfillment. The reusable Design
                            System also drastically accelerated development time for subsequent services, positioning UK
                            Meds for rapid future growth in the competitive healthtech landscape.
                        </p>
                    </div>
                </>
            </Conclusion>

        </CaseStudyLayout>
    )
}
