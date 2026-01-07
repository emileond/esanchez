import {Link} from '@tanstack/react-router'
import React from 'react'
import ProjectIntro from "./ProjectIntro";

export type CaseStudyLayoutProps = {
    title: string
    summary?: string
    children: React.ReactNode,
    date?: React.ReactNode;
    /** Meta: project/client name */
    project?: React.ReactNode;
    /** Meta: your role */
    role?: React.ReactNode;
    /** Meta: website link; provide url and optional label */
    website?: { url: string; label?: React.ReactNode } | null;
    /** Main image src (non-zoomable) */
    imageSrc?: string;
    /** Alt text for the image */
    imageAlt?: string;
    /** Optional extra classes for the outer section */
    className?: string;
    /** Optional override: provide an array of custom meta items instead of the four defaults */
    items?: Array<{ label: React.ReactNode; value: React.ReactNode; href?: string }>;
}

/**
 * Minimal, reusable layout for case studies.
 * - Breadcrumbs: Home → Portfolio → {title}
 * - Header: title + optional summary
 * - Content: vertical stack of children
 * - Footer: back to portfolio + Start a project CTA
 */
export function CaseStudyLayout({
                                    title, summary, date,
                                    project,
                                    role,
                                    website,
                                    imageSrc,
                                    imageAlt,
                                    className = "",
                                    items, children
                                }: CaseStudyLayoutProps) {
    return (
        <article className="container mx-auto px-4 py-20">
            <ProjectIntro title={title} description={summary}
                          date={date}
                          project={project}
                          role={role}
                          website={website}
                          imageSrc={imageSrc}
                          imageAlt={imageAlt}
                          className={className}
                          items={items}/>

            {/* Vertically stacked child content */}
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                {children}
            </div>

            <div className="my-10 divider"/>

            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <Link to="/" hash="work" className="btn btn-ghost">← Back to portfolio</Link>
                <Link to="/" hash="contact" className="btn btn-primary">Start a project</Link>
            </div>
        </article>
    )
}

export default CaseStudyLayout
