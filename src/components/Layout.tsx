import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 md:p-8 lg:p-12">
        <nav className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/" className="text-2xl md:text-3xl font-serif hover:opacity-70 transition-opacity">
            Tanay Mishra
          </Link>
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Articles
            </NavLink>
            <NavLink
              to="/references"
              className={({ isActive }) =>
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              References
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-4 md:p-8 lg:p-12 pt-0 md:pt-0 lg:pt-0">
        <Outlet />
      </main>

      <footer className="p-4 md:p-8 lg:p-12 mt-auto">
        <div className="max-w-4xl mx-auto border-t border-black pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted">
          <span className="font-serif text-foreground">Tanay Mishra</span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/tanay-mishra-ai-automation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@tanaymishra7002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              YouTube
            </a>
            <a
              href="mailto:mail@tanaymishra.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
