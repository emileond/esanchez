import {Link} from '@tanstack/react-router'

export type CaseStudyCardProps = {
    to: string
    imageUrl: string
    title: string
    description: string
    logo?: string
    featured?: boolean
    className?: string
}

export function CaseStudyCard({to, imageUrl, title, description, logo, featured, className}: CaseStudyCardProps) {
    return (
        <Link
            to={to}
            className={`
                group card rounded-2xl bg-base-100 border border-base-content/10 
                flex overflow-hidden transition-colors duration-300 hover:bg-base-200/50 hover:border-base-content/50
                ${featured ? 'md:flex-row col-span-2' : 'flex-col'} 
                ${className}
            `}
        >
            {/* Content Section */}
            <div className={`card-body p-8 flex flex-col justify-between ${featured ? 'md:w-1/2' : 'w-full'}`}>
                <div>
                    {logo && (

                        <img className="max-h-9 mb-6" src={logo} alt="Project logo"/>
                    )}

                    <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                        {title}
                    </h3>
                    <p className="text-base-content/60 leading-relaxed line-clamp-3 text-sm">
                        {description}
                    </p>
                </div>

                <div className="card-actions mt-8">
                    <div
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                        <span>See project</span>
                        <span className="text-xl">→</span>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <figure className={`
                relative overflow-hidden bg-base-200 rounded-none m-0 h-96
                ${featured ? 'md:w-1/2 md:border-l border-base-content/10' : 'border-b border-base-content/10 aspect-[16/10]'}
            `}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                />
            </figure>
        </Link>
    )
}