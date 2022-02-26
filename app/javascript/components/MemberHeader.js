/* This Header requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BellIcon,
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatAltIcon,
  CogIcon,
  CursorClickIcon,
  HomeIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  SearchIcon,
  ShieldCheckIcon,
  SupportIcon,
  TicketIcon,
  UserIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Logo from 'images/logo.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MemberHeader({ avatarUrl, userId }) {
  const solutions = [
    {
      name: 'Home',
      href: '#',
      icon: HomeIcon,
    },
    {
      name: 'View Profile',
      href: `/users/${userId}`,
      icon: UserIcon,
    },
    {
      name: 'Your events',
      href: '#',
      icon: TicketIcon,
    },
    { name: 'Your groups',
      href: '#',
      icon: UserGroupIcon
    },
    {
      name: 'Messages',
      href: '#',
      icon: ChatAltIcon,
    },
    {
      name: 'Notifications',
      href: '#',
      icon: BellIcon,
    },
    {
      name: 'Settings',
      href: '#',
      icon: CogIcon,
    }
  ]
  // const callsToAction = [
  //   { name: 'Watch Demo', href: '#', icon: PlayIcon },
  //   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  // ]
  const resources = [
    {
      name: 'Your events',
      href: '#'
    },
    {
      name: 'Your groups',
      href: '#'
    }
  ]
  const actions = [
    { id: 1, name: 'View profile', href: `/users/${userId}`, method: 'get' },
    { id: 2, name: 'Settings', href: '#', method: 'get' },
    { id: 3, name: 'Log out', href: '/users/sign_out', method: 'delete' },
  ]

  return (
    console.log('avatarUrl: ' + avatarUrl),
    <Popover className="relative bg-white mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Hangout</span>
              <img
                className="h-10 w-auto sm:h-12"
                src={Logo}
                alt="Hangout - We are what we do"
              />
            </a>
          </div>

          {/* hamburger icon */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-4 items-center">
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

            <a href="#" className="text-xs font-semibold">
              <SearchIcon className="flex-shrink-0 h-5 w-5 text-gray-500 hover:text-gray-900" />
            </a>

            <a href="#" className="text-xs font-semibold">
              <ChatAltIcon className="flex-shrink-0 h-5 w-5 text-gray-500 hover:text-gray-900" />
            </a>

            <a href="#" className="text-xs font-semibold">
              <BellIcon className="flex-shrink-0 h-5 w-5 text-gray-500 hover:text-gray-900" />
            </a>

            <Popover className="relative -mb-4">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-xs font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    {/* <span>Avatar</span> */}
                    {/* <UserIcon className="flex-shrink-0 h-5 w-5 text-gray-500 hover:text-gray-900" /> */}

                    <span id="avatar_img" className="overflow-hidden bg-gray-200 mx-auto h-10 w-10 bg-center bg-cover items-center inline-flex relative align-middle" style={{borderRadius: '999px'}}>
                      <img src={avatarUrl} />
                    </span>

                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'ml-1 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-96 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-4 bg-white px-5 py-6 sm:p-4">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div>
                                <p className="text-xs font-semibold text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:p-4">
                          <div>
                            <ul role="list" className="space-y-4">
                              {actions.map((action) => (
                                <li key={action.id} className="text-xs font-semibold truncate">
                                  <a href={action.href} data-method={action.method} className="font-medium text-gray-500 hover:text-gray-900">
                                    {action.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          {/* <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <div
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xs font-semibold text-white bg-indigo-600 hover:opacity-80"
            >
              Welcome, { currentUser.name.split(' ')[0].charAt(0).toUpperCase() + currentUser.name.split(' ')[0].slice(1) }
            </div>
            <a
              href="/users/sign_out"
              data-method="delete"
              rel="nofollow"
              className="ml-8 whitespace-nowrap text-xs font-semibold text-gray-500 hover:text-gray-900"
            >
              Log out
            </a>
            <div
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xs font-semibold text-white bg-indigo-600 hover:opacity-80"
            >
              Profile
            </div>
          </div> */}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <span id="avatar_img" class="overflow-hidden bg-gray-200 h-16 w-16 bg-center bg-cover items-center inline-flex relative align-middle" style={{borderRadius: '999px'}}>
                  <img src={avatarUrl} />
                </span>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid gap-y-4 gap-x-8">
                {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Settings
                </a> */}

                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Help
                </a> */}
              </div>
              <div>
                <a
                  href="users/sign_out"
                  data-method="delete"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-peach transition ease-in-out delay-75 hover:opacity-80"
                >
                  Log out
                </a>
                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
