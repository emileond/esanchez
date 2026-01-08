import {createFileRoute} from '@tanstack/react-router'
import {CaseStudyCard} from '../components/CaseStudyCard'

export const Route = createFileRoute('/')({
    component: HomePage,
})

function HomePage() {
    return (
        <div className="bg-base-100">
            <HeroSection/>
            <CaseStudiesSection/>
            <AboutSection/>
            <ContactSection/>
        </div>
    )
}

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 py-52">
                <div>
                    <h1 className="text-5xl md:text-5xl font-semibold leading-tight">
                        Hello, I am Emilio.
                        A Product Designer.
                    </h1>
                    <p className="py-6 text-lg text-base-content/80 max-w-prose">
                        I’m Emilio Sanchez, a Product Designer focused on turning complex
                        problems into simple, usable products. I work across discovery,
                        UX/UI, prototyping, and end-to-end delivery.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#work"
                            className="btn btn-primary"
                        >
                            View portfolio
                        </a>
                        <a
                            href="#contact"
                            className="btn"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CaseStudiesSection() {
    const cases = [
        {
            slug: 'recommended-actions',
            logo: '/work/recommended-actions/logo.png',
            title: 'Recommended Actions',
            summary: 'How I led the design of our platform’s first AI-driven feature, transforming complex operational data into actionable insights that improved decision-making for restaurant managers.',
            imageUrl: '/work/recommended-actions/cover.png',
        },
        {
            slug: 'uk-meds',
            logo: '/work/uk-meds/logo.png',
            title: 'UK Meds MVP',
            summary: 'How I designed a compliant digital consultation platform that bridged the gap between clinical assessment and e-commerce, creating a seamless \'diagnosis-to-delivery\' flow that drove conversion and established a scalable design system for future healthtech growth.',
            imageUrl: '/work/uk-meds/ds.png',
        },
        {
            slug: 'overwatch-monitoring',
            logo: '/work/overwatch/logo.png',
            title: 'Overwatch: Monitoring for Drilling Engineering',
            summary: 'How I designed a high-density monitoring system for Motive Drilling, transforming complex multi-well data into a proactive \'at-a-glance\' dashboard that reduced response times by 35% and prevented costly operational errors.',
            imageUrl: '/work/overwatch/ui-1.png',
        },
    ] as const

    return (
        <section id="work" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
                <div className="grid grid-cols-2 auto-rows gap-6">
                    {cases.map((c, idx) => (
                        <CaseStudyCard
                            key={c.slug}
                            to={`/portfolio/${c.slug}`}
                            imageUrl={c.imageUrl}
                            title={c.title}
                            description={c.summary}
                            logo={c.logo}
                            featured={idx === 0}
                            className={idx === 0 ? 'col-span-2' : ''}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutSection() {
    return (
        <section id="about" className="container mx-auto py-24 px-4">
            <h2 className="text-3xl font-semibold mb-4">About</h2>
            <div className="max-w-[1300px] mx-auto py-16 flex gap-20">
                <div className="flex flex-col gap-8 text-base-content/80 text-lg">
                    <p>
                        Based in Mexico, I'm a maker at heart, I love bringing ideas to life.
                    </p>
                    <p>
                        I’ve helped startups and product teams ship better experiences—leading discovery, shaping
                        strategy and designing interfaces that are accessible and delightful.
                    </p>
                    <p>
                        When I'm not building digital products, you can find me playing paddle tennis, doing mtb,
                        chilling with my dog, or playing videogames.
                    </p>
                </div>
                <div className="flex-1/3 flex flex-col gap-6">
                    <h4 className="text-lg text-base-content/80 mb-0 font-semibold">Past experience</h4>
                    <div>
                        <h5 className="text-base-content/80 mb-1 font-medium">Senior Product Designer</h5>
                        <div className="text-base-content/60 text-sm mb-1">Crunchtime</div>
                        <div className="flex align-center children-wrap text-base-content/60 text-sm">
                            <div>Jun 2023</div>
                            <div>-</div>
                            <div>Present</div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-base-content/80 mb-1 font-medium">Senior Product Designer</h5>
                        <div className="text-base-content/60 text-sm mb-1">Zenput</div>
                        <div className="flex align-center children-wrap text-base-content/60 text-sm">
                            <div>Jan 2022</div>
                            <div>-</div>
                            <div>Jun 2023</div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-base-content/80 mb-1 font-medium">Senior Experience Designer</h5>
                        <div className="text-base-content/60 text-sm mb-1">EPAM Systems</div>
                        <div className="flex align-center children-wrap text-base-content/60 text-sm">
                            <div>Sep 2020</div>
                            <div>-</div>
                            <div>Dec 2021</div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-base-content/80 mb-1 font-medium">UX/UI Designer</h5>
                        <div className="text-base-content/60 text-sm mb-1">iTexico / Improving Nearshore</div>
                        <div className="flex align-center children-wrap text-base-content/60 text-sm">
                            <div>Nov 2018</div>
                            <div>-</div>
                            <div>Sep 2020</div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-base-content/80 mb-1 font-medium">UI Designer</h5>
                        <div className="text-base-content/60 text-sm mb-1">Yaydoo</div>
                        <div className="flex align-center children-wrap text-base-content/60 text-sm">
                            <div>Nov 2017</div>
                            <div>-</div>
                            <div>Sep 2018</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function ContactSection() {
    return (
        <section id="contact" className="py-48">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
                        <p className="text-base-content/80 mb-6">
                            Interested in working together or want to say hi? Get in touch.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a className="btn btn-primary" href="mailto:hello@emiliosanchez.design">Email me</a>
                            <a className="btn" href="/EmilioSanchez_Resume.pdf" target="_blank" rel="noreferrer">View
                                resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
