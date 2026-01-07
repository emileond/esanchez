import {Link, Outlet} from '@tanstack/react-router'
import {createRootRoute} from '@tanstack/react-router'
import {useEffect, useState} from 'react'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <div data-theme="corporate" className="min-h-screen flex flex-col bg-base-100 text-base-content">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <SiteFooter/>
        </div>
    )
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Increased threshold slightly for a more intentional feel
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        /* 1. The Wrapper: Stays fixed and handles the vertical positioning */
        <header
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-0 transition-all duration-500 ease-in-out">

            {/* 2. The Pill: Animates its width, background, and rounded corners */}
            <nav
                className={`
                    flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${scrolled
                    ? 'mt-4 w-[95%] max-w-[800px] rounded-full border border-white/10 bg-base-100/70 backdrop-blur-md shadow-lg py-2 px-6'
                    : 'mt-0 w-full max-w-none rounded-none border-b border-transparent bg-base-100 py-4 px-8'
                }
                `}
            >
                {/* Navbar Start */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <span className="font-bold tracking-tight">Emilio Sanchez</span>
                            {!scrolled && (
                                <span className="hidden md:inline text-base-content/40 ml-2 font-light">
                                    — Product Designer
                                </span>
                            )}
                        </div>
                    </Link>
                </div>

                {/* Navbar Center (Links) */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center gap-8 text-sm font-medium">
                        <li>
                            <Link to="/" className="hover:text-primary transition-colors">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-primary transition-colors">About</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        </li>
                        <div className="flex items-center">
                            <Link
                                to="/"
                                className={`
                            btn btn-sm rounded-full transition-all
                            ${scrolled ? 'btn-primary px-6' : 'btn-ghost'}
                        `}
                            >
                                Contact
                            </Link>
                        </div>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

function SiteFooter() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-base-200 text-base-content p-10 text-sm text-center">
            <p className="opacity-70">© {year} Emilio Sanchez — Product Designer</p>
        </footer>
    )
}
