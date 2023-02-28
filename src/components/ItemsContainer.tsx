import React from 'react'
import Items from './Items'
import { TECHNSOLPK, HIREENGINEERS, COMPANY, SERVICES, } from './Menu'
const ItemsContainer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
            <Items Links={TECHNSOLPK} title="TECHNSOLPK" />
            <Items Links={HIREENGINEERS} title="HIRE ENGINEERS" />
            <Items Links={COMPANY} title="COMPANY" />
            <Items Links={SERVICES} title="SERVICES" />
        </div>
    )
}

export default ItemsContainer