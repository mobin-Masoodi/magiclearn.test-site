import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { PiStudentFill } from "react-icons/pi";
import { MdArticle } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiOrderPlayLine } from "react-icons/ri";

export default function Header() {
    return (
        <div className='bg-white p-4 shadow'>

            <div className='flex container'>
                <div className='mx-4 cursor-pointer shadow flex lg:hidden p-4  rounded-full'>
                    <RiOrderPlayLine className='mt-1 text-xl' />
                    <div className='mr-2 lg:flex hidden'>ورود / عضویت</div>
                </div>
                <div className='lg:w-1/6 mt-1 flex justify-center lg:block  cursor-pointer'>
                    <img src="/magicLogo.svg" width={150} height={120} alt="" />
                </div>
                <div className='lg:w-3/6 mt-1 lg:flex hidden cursor-pointer space-x-8  py-4'>
                    <div className='flex opacity-80 hover:opacity-100 duration-300 hover:translate-0.5'>
                        <TiHome className='text-xl ml-1' />
                        <span>صفحه اصلی</span>
                    </div>
                    <div className='flex opacity-80 hover:opacity-100 duration-300 hover:translate-0.5'>
                        <MdArticle className='text-xl ml-1' />
                        <span>مقالات آموزشی</span>
                    </div>
                    <div className='flex opacity-80 hover:opacity-100 duration-300 hover:translate-0.5'>
                        <PiStudentFill className='text-xl ml-1' />
                        <span>دوره های آموزشی</span>

                    </div>
                    <div className='flex opacity-80 hover:opacity-100 duration-300 hover:translate-0.5'>
                        <MdOutlineVideoLibrary className='text-xl ml-1' />
                        <span>ویدیوهای آموزشی</span>
                    </div>
                </div>
                <div className='lg:w-2/6 flex justify-end '>
                    <div className='mx-2 lg:flex hidden cursor-pointer  text-xl p-5 shadow rounded-full'>
                        <FaMagnifyingGlass className='opacity-80 hover:opacity-100' />
                    </div>
                    <div className='mx-2 lg:flex hidden cursor-pointer  text-xl p-5 shadow rounded-full'>
                        <SlBasket className='opacity-80 hover:opacity-100' />
                    </div>
                    <div className='mx-4 cursor-pointer shadow flex p-4  rounded-full'>
                        <FaUserCircle className='mt-1 text-xl' />
                        <div className='mr-2 lg:flex hidden'>ورود / عضویت</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
