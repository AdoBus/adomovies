import Search from "../shared/Search";
import NavBrand from "./NavBrand";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react"

export default function Navbar({ genres }) {
  const session = useSession()
  return (
    <>

      <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top navbar-stuck">
        <div className="container">
          <NavBrand />
          <Search />
          {session.status === 'authenticated' ?
            <NavProfile profile={session.data.user} /> :
            <></>
          }
          <NavItems genres={genres} />
        </div>
      </header>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}