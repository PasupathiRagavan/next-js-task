import React from 'react'
import NavBar from '../../base/NavBar';
import Button from '../../base/Button';
import Link from 'next/link';
import CustomText from '../../base/Text';
import { toggleNavigation } from '../../icons';
import Breadcrumb from '../../base/Breadcrumb';
import Icon from '../../base/Icon';

const SideBar = () => {
  return (
    <>
        {/* <!-- Sidebar Toggle --> */}
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center py-4">
                {/* <!-- Navigation Toggle --> */}
                <Button className="text-gray-500 mr-3 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                    <CustomText as="span" className="sr-only">Toggle Navigation</CustomText>
                  <Icon tag={toggleNavigation} />
                </Button>
                {/*  <!-- End Navigation Toggle --> */}

                {/*  <!-- Breadcrumb --> */}
                <Breadcrumb
                    homeElement={'Home'}
                    separator={
                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    }
                    activeClasses='text-blue-600'
                    containerClasses='flex items-center' 
                    listClasses='hover:underline text-sm font-medium'
                    capitalizeLinks
                />
            </div>
        </div>
        {/* <!-- End Sidebar Toggle --> */}

        {/*  <!-- Sidebar --> */}
        <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-6">
                <Link className="flex-none text-xl font-extrabold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/dashboard" aria-label="Logo">Logo</Link>
            </div>

           <NavBar />
        </div>
        {/*  <!-- End Sidebar --> */}
    </>
  )
}

export default SideBar;