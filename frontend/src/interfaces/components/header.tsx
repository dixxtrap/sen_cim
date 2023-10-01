import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import logo from "../../assets/logo_sen_cim.jpg";
import { Link } from "react-router-dom";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const menuItems = [
  {
    label: "Rechercher",
    children: [
      { label: "Rechercher un défunt", route: "#" },
      { label: "Rechercher un cimetière", route: "#" },
    ],
  },
  {
    label: "Publier",
    children: [
      { label: "Envoyer une prière", route: "/wish/create" },
      { label: "Consulter les prières", route: "/wish" },
      { label: "Publier un avis de décès", route: "#" },
      { label: "Consulter les avis de décès", route: "#" },
    ],
  },
];
export const Header = () => {
  return (
    <>
      {/*
                    This example requires updating your template:
            
                    ```
                    <html class="h-full">
                    <body class="h-full">
                    ```
                  */}
      <div className="min-h-full  z-50 sticky top-0">
        <Disclosure as="nav" className="border-b border-gray-200  bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                  <div className="flex">
                    <Link to={"/"} className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-12 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-12 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                      <span className="text-2xl font-serif font-bold ml-2">
                        Sen Cim
                      </span>
                    </Link>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 items-center justify-center">
                      {menuItems.map((item) => (
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex  items-center rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500  focus:ring-offset-2 px-3 ">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <span>{item.label}</span>
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
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-60 origin-bottom-right rounded-md bg-white py-1 shadow-lg ring-1 ring-red-500/10 focus:outline-none">
                              {item.children.map((row) => (
                                <Menu.Item key={row.label}>
                                  {({ active }) => (
                                    <Link
                                      to={row.route}
                                      className={clsx(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {row.label}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ))}
                      <Link
                        to={"#"}
                        className="relative flex  items-center rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500  focus:ring-offset-2 px-3 "
                      >
                        Faire un don 🧡
                      </Link>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs bg-red-500 p-2 px-3 text-white items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          Se Connecter
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-50"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-5O"
                      >
                        <Menu.Items className="absolute right-0  z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={clsx(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                {menuItems.map((item) => (
                  <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        <span>{item.label}</span>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      {item.children.map((row) => (
                        <Disclosure.Button
                          key={row.label}
                          as="a"
                          href={row.route}
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                          {row.label}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t  px-4 border-gray-200 pb-3 pt-4">
                  Faire un don 🧡
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};
