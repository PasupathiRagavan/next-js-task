// /components/Breadcrumb.js
'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import home from '../icons/home'
import Icon from './Icon'


const Breadcrumb = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div>
            <ul className={containerClasses}>
                <li className={paths === "/" ? `${activeClasses} ${listClasses} ml-0 flex gap-1 items-center` : `text-gray-500 ml-0 flex gap-1 items-center ${listClasses}`}>
                    <Icon tag={home} /> <Link href={'/'}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${activeClasses} ${listClasses}` : `text-gray-500 ${listClasses}`
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Breadcrumb
