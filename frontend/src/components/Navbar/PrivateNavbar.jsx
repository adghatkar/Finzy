import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { SiAuthy } from "react-icons/si";
import { logoutAction } from "../../redux/slice/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.removeItem("userInfo");
  };

  return (
    <Disclosure as="nav" className="bg-black shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center">
                {/* Logo */}
                <SiAuthy className="h-8 w-8 text-white" />
                <Link
                  to="/"
                  className="ml-2 text-2xl font-bold text-white"
                  aria-label="Go to homepage"
                >
                  Finzy
                </Link>
              </div>

              <div className="hidden md:flex md:space-x-8">
                <Link
                  to="/add-transaction"
                  className="text-sm font-medium text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out"
                >
                  Add Transaction
                </Link>
                <Link
                  to="/add-category"
                  className="text-sm font-medium text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out"
                >
                  Add Category
                </Link>
                <Link
                  to="/categories"
                  className="text-sm font-medium text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out"
                >
                  Categories
                </Link>
                <Link
                  to="/profile"
                  className="text-sm font-medium text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out"
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out"
                >
                  Dashboard
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={logoutHandler}
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black bg-white rounded-md hover:bg-gray-200 transition duration-200 ease-in-out"
                >
                  <IoLogOutOutline className="h-5 w-5 mr-1" aria-hidden="true" />
                  Logout
                </button>

                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/student-dashboard"
                            className={classNames(
                              active ? "bg-gray-700" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            My Dashboard
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logoutHandler}
                            className={classNames(
                              active ? "bg-gray-700" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Navs  private links */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link to="/">
                <Disclosure.Button className="block py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-gray-700">
                  Finzy
                </Disclosure.Button>
              </Link>
              <Link to="/add-transaction">
                <Disclosure.Button className="block py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-gray-700">
                  Add Transaction
                </Disclosure.Button>
              </Link>
              <Link to="/add-category">
                <Disclosure.Button className="block py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-gray-700">
                  Add Category
                </Disclosure.Button>
              </Link>
              <Link to="/categories">
                <Disclosure.Button className="block py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-gray-700">
                  Categories
                </Disclosure.Button>
              </Link>
              <Link to="/profile">
                <Disclosure.Button className="block py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-gray-700">
                  Profile
                </Disclosure.Button>
              </Link>
              <Link to="/dashboard">
                <Disclosure.Button className="block py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-gray-700">
                  My Dashboard
                </Disclosure.Button>
              </Link>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="button"
                  onClick={logoutHandler}
                  className="block px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
