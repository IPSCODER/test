import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-16 border-b flex items-center px-8 justify-between' >
        <h1>Header</h1>
        <ul className='flex gap-2' >
            <li>
                <Link href={"/"} >Home</Link>
            </li>
            <li>
                <Link href={"/contact"} >contact</Link>
            </li>
            <li>
                <Link href={"/maker"} >Page maker</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header