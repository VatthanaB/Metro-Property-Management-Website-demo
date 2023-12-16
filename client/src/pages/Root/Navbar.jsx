import { Link, NavLink } from "react-router-dom";
import MetroLogo from "../../assets/images/MetroLogo.png";
import { IoSearchSharp } from "react-icons/io5";
import classNames from "classnames";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
export default function MainNavigation() {
  // Desktop version
  const DesktopMenu = () => (
    <ul className="md:flex hidden md:space-x-16 lg:space-x-30 ml-5">
      {links.map((link) => (
        <NavLink
          className={classNames({
            "text-2xl text-gray-100 hover:text-red-500 flex ": true,
          })}
          key={link.href}
          to={link.href}
        >
          {link.label}
        </NavLink>
      ))}
    </ul>
  );

  // Mobile version
  const MobileMenu = () => (
    <div className="relative">
      <Menu>
        <Menu.Button>
          <GiHamburgerMenu className="text-4xl text-white " />
        </Menu.Button>
        <Menu.Items className="absolute -right-4 top-16 w-40 bg-black bg-opacity-80 space-y-2 text-xl rounded flex-col items-center pt-3">
          {linksMobile.map((link) =>
            link.href === "/results" ? (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-blue-500 text-red-500" : "text-red-500"
                    } flex rounded-md px-4 pb-3`}
                    href="tel:09 391 4642"
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <>
                    <NavLink
                      className={`${
                        active ? "bg-blue-500 text-red-500" : "text-white"
                      } flex rounded-md px-4`}
                      to={link.href}
                    >
                      {link.label}
                    </NavLink>
                    <hr className="text-white p-0" />
                  </>
                )}
              </Menu.Item>
            )
          )}
        </Menu.Items>
      </Menu>
    </div>
  );

  // const location = useLocation();
  // const currentPath = location.pathname;
  // console.log("currentPath", currentPath);
  const links = [
    {
      href: "/search",
      label: (
        <>
          <IoSearchSharp className=" text-4xl mx-3" /> Rental Property
        </>
      ),
    },
    { href: "/services", label: "Our Service" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About us" },
  ];
  const linksMobile = [
    { href: "/services", label: "Our Service" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About us" },
    { href: "/results", label: "09 391 4642" },
  ];
  return (
    <nav
      className={classNames({
        "flex  space-x-6 py-5 px-5 md:px-10 h-30  items-center z-50 sticky top-0 font-medium": true,
        "pr-5 lg:pr-28": true,
        "bg-black bg-opacity-80": true,
        // " bg-metro-grey": currentPath !== "/",
        // hidden: currentPath === "/",
      })}
    >
      {" "}
      <Link to="/">
        <img className="w-32 md:w-48 lg:w-96  " src={MetroLogo}></img>
      </Link>
      <div
        className={classNames({
          "flex justify-evenly md:justify-between items-center w-full ": true,
        })}
      >
        <Link
          to="/search"
          className=" md:hidden text-xl md:text-base  min-w-fit   text-gray-100 hover:text-red-500 flex mr-12 "
        >
          <IoSearchSharp className=" text-4xl mx-1 md:mx-3   hover:text-red-500" />{" "}
          Rental Property
        </Link>
        <div>
          {/* Render the desktop menu on medium screens and larger */}
          <div className="md:block hidden">
            <DesktopMenu />
          </div>

          {/* Render the mobile menu on small screens */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
      <Link
        to="/search/results"
        className="text-red-600 min-w-fit font-bold text-2xl hidden lg:flex justify-end "
      >
        09 391 4642
      </Link>
    </nav>
  );
}
