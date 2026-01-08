import {createFileRoute} from '@tanstack/react-router'
import CaseStudyLayout from '../components/CaseStudyLayout'
import Overview from "../components/Overview";
import DesignProcess from "../components/DesignProcess";
import Personas from "../components/Personas";
import Insights from "../components/Insights";
import ProcessStepper from "../components/ProcessStepper";
import Content from "../components/Content";
import {RiPaintFill, RiRouteLine} from "react-icons/ri";
import Conclusion from "../components/Conclusion";

export const Route = createFileRoute('/portfolio/recommended-actions')({
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

function FintechCaseStudyPage() {
    return (
        <CaseStudyLayout
            isProtected
            title="Recommended Actions"
            date="2025"
            role="Product Designer"
            website={
                {url: "crunchtime.com"}
            }
            image="/work/recommended-actions/cover.png"
        >
            <Overview
                description="Crunchtime provides customers with significant operational, labor, and sales data. However, users lack a streamlined, integrated way to translate that data into daily decision-making. While raw metrics are available, they’re not consistently contextualized, prioritized, or delivered at the right moment."
                problemPoints={[
                    "In restaurants, every decision is high stakes—labor costs, stock levels, scheduling, customer experience. Managers are often forced to make decisions under pressure and based on instinct alone. This reliance leads to reactive, suboptimal decisions that impact operations and employee experience."
                ]}
            />
            <DesignProcess/>
            <Personas/>
            <Insights
                title="Research & Analysis"
                image="/work/recommended-actions/research.png"
                insights={insightsData}
            />
            <ProcessStepper
                title="Solution Discovery"
                description="We ran this process to ensure our feature delivered real, measurable value instead of just more data. The initial goals were to get everyone aligned and design a scalable system that managers could trust and use immediately."
                steps={discoveryData}
            />
            <Content title="Defining Success and Scope"
                     icon={<RiRouteLine/>}
                     description="I started with alignment workshops involving engineering, product, and CS and support teams. The goal was to establish a shared vision and prevent derailing from our goals. We established success metrics, and defined goals and anti-goals to keep the project focused."
                     image="/work/recommended-actions/framework.png"
            />
            <Content title="User Journey Map"
                     icon={<RiRouteLine/>}
                     description="Conducted brainstorming sessions to map the manager’s user journey. This helped us find opportunities where an insight could prevent a poor decision. We focused on designing a scalable system that could easily include future insight types."
                     image="/work/recommended-actions/journey-map.png"
            />
            <Content title="Developing an Insights Framework"
                     icon={<RiRouteLine/>}
                     description="A critical first step was defining what an 'actionable insight' meant for our product. Working with multiple teams, we built a simple framework that helped us create any insight."
                     image="/work/recommended-actions/successdef.png"
            />
            <Content title="Early Explorations"
                     icon={<RiRouteLine/>}
                     description="Our main design priority was minimal decision friction, ensuring managers could understand and act on a recommendation within seconds."
                     image="/work/recommended-actions/iteration-1.png"
            />
            <Content title="Surfacing Insights"
                     icon={<RiRouteLine/>}
                     description="The second round of iterations was focused on optimizing the visual hierarchy and how the insights were surfaced across both dashboard and mobile views."
                     image="/work/recommended-actions/iteration-2.png"
            />
            <Insights
                title="User Testing"
                image="/work/recommended-actions/testing.png"
                insights={userTestingData}
            />
            <Content title="Final Solution"
                     icon={<RiPaintFill/>}
                     description="The final solution provides managers with a dedicated, contextual interface that surfaces only the most impactful recommendations. By optimizing the design for both web and mobile, we ensured operational leaders can make informed decisions whether they are in the back office or actively on the floor."
                     image={["/work/recommended-actions/ui-1.png", "/work/recommended-actions/ui-2.png", "/work/recommended-actions/ui-3.png", "/work/recommended-actions/ui-4.png"]}
            />
            <Conclusion>
                <>
                    <div className="flex-1/2">
                        <h3 className="font-semibold text-lg text-base-content/80 mb-4">
                            Learnings
                        </h3>
                        <p className="text-lg text-base-content/80 text-pretty">
                            The launch of Recommended Actions validated the systemic approach we took, proving that a
                            clear framework dramatically improves feature adoption and utility. The positive results not
                            only improved customers' operational metrics but also set a new standard for how data is
                            presented and consumed across our entire product suite.
                        </p>
                    </div>

                    <div className="flex-1/2">
                        <h3 className="font-semibold text-lg text-base-content/80 mb-4">
                            Key outcomes
                        </h3>
                        <p className="text-lg text-base-content/80 text-pretty">
                            This project was strategically important as one of the first AI-driven features in our
                            platform. Its launch provided significant internal leverage: our Sales and Marketing teams
                            were empowered with a powerful differentiator that has been highlighted in campaigns and
                            events, and the Product and Development teams gained experience building and scaling machine
                            learning-driven user experiences for all future product initiatives.
                        </p>
                    </div>
                </>
            </Conclusion>

        </CaseStudyLayout>
    )
}
