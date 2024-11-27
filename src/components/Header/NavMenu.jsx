import React from 'react'
import { MdMenu } from "react-icons/md";
import Image from 'next/image';
import logo from '../../access/logo-dark.png'
import Link from 'next/link';
import Order from '../Order/Order';
const NavBar = [
  {
    id: 1,
    title: 'Home',
    link: "#"
  },
  {
    id: 2,
    title: 'About',
    link: "#"
  },
  {
    id: 3,
    title: 'Blog',
    link: "#"
  },
  {
    id: 4,
    title: 'Contact',
    link: "/contact-us"
  },


]
function NavMenu() {
  return (
    <>
      <div className="bg-brandDark text-white py-3 font-varela">
        <nav className=' container  flex justify-between items-center'>
          <div className="">
            <Link href="/" className=''>
              <Image src={logo} width={200} height={200} className='mt-2' alt='' />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className='flex items-center gap-4'>
              {NavBar.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className='  inline-block text-sm py-2 px-3 hover:text-lemon uppercase'>{item.title}</Link>
                </li>

              ))}
              <Link href='Order'>
                <div className="  ml-20 border-2 border-lemon text-white px-6 py-2 rounded-md hover:bg-lemon hover:text-black ">
                  Order Now</div>
              </Link>
            </ul>
          </div>
          <div className="md:hidden"><MdMenu className='text-4xl' /></div>
        </nav>
      </div>
    </>

  )
}

export default NavMenu