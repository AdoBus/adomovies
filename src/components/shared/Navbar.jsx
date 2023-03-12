// import SignIn from "../home/SignIn"
import Search from "../shared/Search";
import NavBrand from "./NavBrand";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";


export default function Navbar({ genres }) {
  return (
    <>
      {/* <SignIn /> */}
      {/* <!-- Navbar with user account dropdown --> */}
      <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top navbar-stuck">
        <div className="container">
          <NavBrand />
          <Search />
          {/* <a className="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal">
            <i className="fi-user me-2"></i>Sign in
          </a> */}
          <NavProfile />
          <NavItems genres={genres} />
        </div>
      </header>
    </>
  )
}