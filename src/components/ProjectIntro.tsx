export type ProjectIntroProps = {
    /** Main title shown at the top */
    title: React.ReactNode;
    /** Short description paragraph under the title */
    description?: React.ReactNode;
    /** Meta: date shown in the meta row */
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
};

/**
 * ProjectIntro component
 * Props-driven hero/intro section for a project case study. Mirrors typography & spacing from Overview.
 */
const ProjectIntro: React.FC<ProjectIntroProps> = ({
                                                       title,
                                                       description,
                                                       date,
                                                       project,
                                                       role,
                                                       website,
                                                       imageSrc,
                                                       imageAlt,
                                                       className = "",
                                                       items,
                                                   }) => {
    // Build default meta items if a custom array isn't supplied
    const meta = items ?? [
        project != null && {label: "Project", value: project},
        date != null && {label: "Date", value: date},
        role != null && {label: "Role", value: role},
        website && {
            label: "Website",
            value: (
                <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                >
                    {website.label ?? "Visit website"}
                </a>
            ),
        },
    ].filter(Boolean) as Array<{ label: React.ReactNode; value: React.ReactNode; href?: string }>;

    return (
        <section className={`py-16 px-4 ${className}`}>
            <div className="container mx-auto max-w-6xl">
                {/* Title */}
                <h1 className="text-4xl font-semibold text-base-content">{title}</h1>

                {/* Description */}
                {description && (
                    <p className="mt-4 max-w-3xl text-lg text-base-content/70 leading-relaxed">{description}</p>
                )}

                {/* Meta row */}
                {meta.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {meta.map((item, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="text-sm font-semibold text-base-content/60">
                                    {item.label}
                                </div>
                                <div className="text-base text-base-content">{item.value}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Image (non-zoomable) */}
                {imageSrc && (
                    <div className="mt-10">
                        <div className="rounded-2xl bg-base-200/40 p-4">
                            <img
                                src={imageSrc}
                                alt={imageAlt || (typeof title === "string" ? title : "Project image")}
                                className="mx-auto rounded-xl border border-base-200/50 shadow-md object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectIntro;
