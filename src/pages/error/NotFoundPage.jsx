// React Router Dom Import
import { NavLink, useNavigate } from "react-router-dom";

// Default Function
export default function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <main className="grid h-svh place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            onClick={()=>{
              navigate(-1);
            }}
          >
            Return Back <span aria-hidden="true">&rarr;</span>
          </button>
          <NavLink
            to={'/'}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    </main>
  )
}
