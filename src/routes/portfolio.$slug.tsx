import {createFileRoute, Link} from '@tanstack/react-router'

// Dynamic route kept only as a catch-all for unknown/legacy slugs.
// All real case studies should be implemented as regular static routes
// under /src/routes using the CaseStudyLayout component.
export const Route = createFileRoute('/portfolio/$slug')({
  component: NotFoundCaseStudy,
})

function NotFoundCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Case study not found</h1>
        <p className="text-base-content/80">The case you are looking for doesn’t exist or its URL changed.</p>
      </header>
      <div className="text-center flex gap-3 justify-center">
        <Link to="/" hash="work" className="btn btn-primary">Back to portfolio</Link>
        <Link to="/blog" className="btn">Read the blog</Link>
      </div>
    </div>
  )
}
