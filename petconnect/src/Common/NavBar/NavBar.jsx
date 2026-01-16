import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          className="px-3 py-2 md:px-5 md:py-2 md:rounded-full md:font-semibold
                     md:hover:bg-green-500 md:hover:text-white transition md:text-xl"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="px-3 py-2 md:px-5 md:py-2 md:rounded-full md:font-semibold
                     md:hover:bg-green-500 md:text-xl md:hover:text-white transition"
          to="/pets"
        >
          Pet Listing
        </Link>
      </li>
      <li>
        <Link
          className="px-3 py-2 md:px-5 md:py-2 md:rounded-full md:font-semibold
                     md:hover:bg-green-500 md:hover:text-white transition md:text-xl"
          to="/donations"
        >
          Donation Campaigns
        </Link>
      </li>
    </>
  );

  return (
    <div className=" fixed top-0 left-0 right-0 z-50 ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <span className="text-orange-500 md:text-2xl md:font-bold">
              Pet
            </span>
            <span className="text-green-500">Connect</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn bg-[#03C755] text-black border-[#e5e5e5] rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
