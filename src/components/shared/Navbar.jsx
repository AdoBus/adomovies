// import SignIn from "../home/SignIn"
import Link from "next/link"
import { useRouter } from "next/router";


export default function Navbar({ genres }) {
  const router = useRouter();

  return (
    <>
      {/* <SignIn /> */}
      {/* <!-- Navbar with user account dropdown --> */}
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top navbar-stuck">
        <div className="container">
          <Link href='/'>
            <a className="navbar-brand d-flex justify-content-star me-2 me-xl-4">
              <img className="d-block me-2" src="/img/logo/logo.svg" width="30" alt="Adomovies.com" /><h5 className="mt-2">Adomovies.com</h5>
            </a>
          </Link>
          <button type="button" className="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarUserNav"
            aria-controls="navbarUserNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="order-lg-3">
            <form className="form-group">
              <div className="input-group input-group-sm">
                <span className="input-group-text text-muted">
                  <i className="fi-search"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter keywords..." />
              </div>
              <button type="button" className="btn btn-translucent-primary btn-sm">Search</button>
            </form>
          </div>
          {/* <a className="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal">
            <i className="fi-user me-2"></i>Sign in
          </a> */}
          <div className="collapse navbar-collapse order-lg-2" id="navbarUserNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
                <Link href={`${router.pathname == "/" ? "javascript:" : "/"}`}>
                  <a className="nav-link">HOME</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">GENRE</a>
                <ul className="dropdown-menu row">
                  {genres.map(genre => (
                    <li key={genre.id} className="col-6">
                      <Link href="/genres">
                        <a className="dropdown-item">{genre.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">MOVIES</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">TV SERIES</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">IMDB TOP 250</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}