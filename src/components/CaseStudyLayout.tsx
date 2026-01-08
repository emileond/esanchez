import {Link} from '@tanstack/react-router'
import {useState} from 'react'
import ProjectIntro from "./ProjectIntro";
import ky from 'ky'

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
    image?: string;
    /** Alt text for the image */
    imageAlt?: string;
    /** Optional extra classes for the outer section */
    className?: string;
    /** Optional override: provide an array of custom meta items instead of the four defaults */
    items?: Array<{ label: React.ReactNode; value: React.ReactNode; href?: string }>;
    /** If true, the case study is protected behind a password prompt shown on initial load */
    isProtected?: boolean;
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
                                    image,
                                    imageAlt,
                                    className = "",
                                    items, children,
                                    isProtected
                                }: CaseStudyLayoutProps) {

    const [password, setPassword] = useState("")
    const [verifying, setVerifying] = useState(false)
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleVerify(e?: React.FormEvent | React.MouseEvent) {
        e?.preventDefault()
        setError(null)
        setVerifying(true)
        try {
            const res: { ok: boolean } = await ky.get('/api/verify-password', {
                searchParams: {password}
            }).json()
            if (res.ok) {
                setVerified(true)
            } else {
                setError('Incorrect password. Please try again.')
            }
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setVerifying(false)
        }
    }

    if (isProtected && !verified) {
        return (
            <article className="container mx-auto px-4 py-20">
                <div className="max-w-xl mx-auto card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <h1 className="card-title text-2xl">This case study is private</h1>
                        <p className="text-base-content/80">Enter the password to access it.</p>
                        <form className="form-control gap-3 mt-4" onSubmit={handleVerify}>
                            <input
                                type="password"
                                className="input input-bordered"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                aria-label="Password"
                            />
                            {error && <div className="text-error text-sm">{error}</div>}
                            <div className="card-actions justify-end mt-2">
                                <button
                                    type="submit"
                                    className={`btn btn-primary ${verifying ? 'btn-disabled' : ''}`}
                                    disabled={verifying}
                                >
                                    {verifying ? 'Verifying…' : 'Access'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        )
    }

    return (
        <article className="container mx-auto px-4 py-20">
            <ProjectIntro title={title} description={summary}
                          date={date}
                          project={project}
                          role={role}
                          website={website}
                          imageSrc={image}
                          imageAlt={imageAlt}
                          className={className}
                          items={items}/>

            {/* Vertically stacked child content */}
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
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
