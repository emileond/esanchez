import {useEffect, useId, useState} from "react";
import {RiUserFill} from "react-icons/ri";

export type ContentProps = {
    /** Optional leading icon (React node). Example: <RiUserFill className="text-2xl" /> */
    icon?: React.ReactNode;
    /** Optional title for the content block */
    title?: React.ReactNode;
    /** Optional description text or rich content */
    description?: React.ReactNode;
    /** Optional image URL to display; clicking opens a full-screen preview */
    image?: string;
    /** Alt text for the image, recommended when `image` is provided */
    imageAlt?: string;
    /** Optional additional class names for the outer card */
    className?: string;
    /** Callbacks when the image preview opens/closes */
    onImageOpen?: () => void;
    onImageClose?: () => void;
};

/**
 * Content component
 * Props-driven block that can show an icon, title, description, and an image with full-screen preview.
 * Styled to align with Tailwind + DaisyUI conventions used across the project.
 */
const Content: React.FC<ContentProps> = ({
                                             icon,
                                             title,
                                             description,
                                             image,
                                             imageAlt,
                                             className = "",
                                             onImageOpen,
                                             onImageClose,
                                         }) => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const labelId = useId();

    const openPreview = () => {
        setIsPreviewOpen(true);
        onImageOpen?.();
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
        onImageClose?.();
    };

    // Close on ESC
    useEffect(() => {
        if (!isPreviewOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                closePreview();
            }
        };
        document.addEventListener("keydown", onKey);
        // Prevent page scroll while modal open
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = original;
        };
    }, [isPreviewOpen]);

    return (
        <section className={`${className}`}>
            <div>
                {(icon || title) && (
                    <div className="flex items-center gap-3 mb-4">
                        {icon && (
                            <div className="bg-primary/10 text-primary rounded-xl p-3 shadow-sm">
                                {icon}
                            </div>
                        )}
                        {title && (
                            <h2 id={labelId} className="text-4xl font-semibold text-base-content">
                                {title}
                            </h2>
                        )}

                    </div>
                )}

                {description && (
                    <p className="max-w-4xl text-lg text-base-content/70 leading-relaxed mb-12">
                        {description}
                    </p>
                )}

                {image && (
                    <div className="mt-4">
                        <img
                            src={image}
                            alt={imageAlt || (typeof title === "string" ? title : "Preview image")}
                            className="w-full rounded-xl border border-base-200/50 shadow-sm cursor-pointer object-cover"
                            onClick={openPreview}
                        />
                        <p className="text-xs text-base-content/60 mt-2">Click to view</p>
                    </div>
                )}
            </div>

            {/* Full-screen image preview overlay */}
            {image && isPreviewOpen && (
                <div
                    className="fixed inset-0 z-[1000] bg-base-content/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={typeof title === "string" ? labelId : undefined}
                    onClick={closePreview}
                >
                    <button
                        type="button"
                        aria-label="Close image preview"
                        className="absolute top-4 right-4 btn btn-sm btn-circle"
                        onClick={closePreview}
                    >
                        ✕
                    </button>
                    <img
                        src={image}
                        alt={imageAlt || (typeof title === "string" ? title : "Full-size image")}
                        className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Content;
