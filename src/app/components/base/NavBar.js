'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import home from '@/app/components/icons/home';
import Icon from './Icon';
import users from '@/app/components/icons/users';
import account from '@/app/components/icons/account';
import project from '@/app/components/icons/project';
import calender from '@/app/components/icons/calendar';
import document from '@/app/components/icons/document';

const  NavBar = () => {
    const paths = usePathname()
   const navList = [{
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: home,
    active: paths === '/dashboard'? true :false,
   },{
    id: 2,
    name: "Users",
    link: "/users",
    icon: users,
    active: paths === '/users'? true :false,
   },{
    id: 3,
    name: "Account",
    link: "/account",
    icon: account,
    active: paths === '/account'? true :false,
   },{
    id: 4,
    name: "Projects",
    link: "/projects",
    icon: project,
    active: paths === '/projects'? true :false,
   },{
    id: 5,
    name: "Calendar",
    link: "/calendar",
    icon: calender,
    active: paths === '/calendar'? true :false,
   },{
    id: 6,
    name: "Documentation",
    link: "/documentation",
    icon: document,
    active: paths === '/documentation'? true :false,
   }]; 

  return (
    <nav className="p-6 w-full flex flex-col flex-wrap">
        <ul className="space-y-1.5">
            {
                navList.map((navItem) => {
                    return (
                        <li key={navItem.id}>
                            <Link href={navItem.link} className={navItem.active ? "w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm bg-gray-100 dark:bg-gray-900 text-slate-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-300 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600": "w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"}>
                                <Icon tag={navItem.icon} />
                                {navItem.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default NavBar;