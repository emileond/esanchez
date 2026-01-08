import {useEffect, useId, useState} from "react";
import {RiUserFill} from "react-icons/ri";

export type ContentProps = {
    /** Optional leading icon (React node). Example: <RiUserFill className="text-2xl" /> */
    icon?: React.ReactNode;
    /** Optional title for the content block */
    title?: React.ReactNode;
    /** Optional description text or rich content */
    description?: React.ReactNode;
    /** Image URL or array of URLs to display; clicking opens a full-screen preview */
    image?: string | string[];
    /** Alt text for the image(s). If multiple images, you can pass an array of alts matching the order of `image`. */
    imageAlt?: string | string[];
    /** Optional additional class names for the outer card */
    className?: string;
    /** Callbacks when the image preview opens/closes */
    onImageOpen?: () => void;
    onImageClose?: () => void;
};

/**
 * Content component
 * Props-driven block that can show an icon, title, description, and image(s) with full-screen preview.
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const labelId = useId();

    // Normalize to an array for consistent rendering
    const images: string[] = Array.isArray(image) ? image : image ? [image] : [];

    const altFor = (idx: number, fallbackKind: "Preview" | "Full-size" = "Preview") => {
        const defaultAlt = typeof title === "string" ? title : `${fallbackKind} image`;
        if (Array.isArray(imageAlt)) return imageAlt[idx] || defaultAlt;
        return imageAlt || defaultAlt;
    };

    const openPreview = (idx = 0) => {
        setCurrentIndex(idx);
        setIsPreviewOpen(true);
        onImageOpen?.();
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
        onImageClose?.();
    };

    // Close on ESC and allow arrow navigation when multiple images
    useEffect(() => {
        if (!isPreviewOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                closePreview();
            } else if (images.length > 1 && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
                e.preventDefault();
                setCurrentIndex((prev) => {
                    if (e.key === "ArrowRight") return (prev + 1) % images.length;
                    return (prev - 1 + images.length) % images.length;
                });
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
    }, [isPreviewOpen, images.length]);

    return (
        <section className={`${className} py-20`}>
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

                {images.length > 0 && (
                    <div className="mt-4">
                        {images.length === 1 ? (
                            <div>
                                <img
                                    src={images[0]}
                                    alt={altFor(0, "Preview")}
                                    className="mx-auto rounded-xl border border-base-200/50 shadow-sm cursor-pointer"
                                    onClick={() => openPreview(0)}
                                />
                                <p className="text-xs text-base-content/60 mt-2">Click to view</p>
                            </div>
                        ) : (
                            <div>
                                <div className="grid grid-cols-2 gap-6">
                                    {images.map((src, idx) => (
                                        <img
                                            key={`${src}-${idx}`}
                                            src={src}
                                            alt={altFor(idx, "Preview")}
                                            className="w-full rounded-xl border border-base-200/50 shadow-sm cursor-pointer"
                                            onClick={() => openPreview(idx)}
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-base-content/60 mt-2">Click any image to view</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Full-screen image preview overlay */}
            {images.length > 0 && isPreviewOpen && (
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

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous image"
                                className="absolute left-4 md:left-8 btn btn-circle"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
                                }}
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                aria-label="Next image"
                                className="absolute right-4 md:right-8 btn btn-circle"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((i) => (i + 1) % images.length);
                                }}
                            >
                                ›
                            </button>
                        </>
                    )}

                    <img
                        src={images[currentIndex]}
                        alt={altFor(currentIndex, "Full-size")}
                        className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Content;
