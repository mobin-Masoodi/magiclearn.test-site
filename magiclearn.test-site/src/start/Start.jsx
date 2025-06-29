import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

export default function Start() {
    return (
        <div className='lg:flex my-8'>
            <div className='lg:w-1/2 order-2 '>
                <img className=' relative m-auto' src="/public/img/programmer-man-process-coding-with-laptop-computer-software-development-concept-illustration_294791-810.avif" alt="" />
                <img className=' lg:flex opacity-90 absolute hidden bottom-[410px] mr-[182px] animate-bounce rotate-6' width={50} src="/public/img/code (1).png" alt="" />
            </div>
            <div className='lg:w-1/2 text-center order-1 '>
                <h1 className='text-4xl opacity-80 flex justify-center lg:mt-12 font-black'>داستان برنامه‌نویس شدنت از اینجا شروع میشه!</h1>
                <p className='flex justify-center opacity-60 my-5'>همه جا برنامه نویسی رو یاد میدن اما تخصصیش رو نه! پس با مجیک لرن بهترشو حتی اگه بهترینی</p>
                <img className='lg:mr-[510px] mr-36' src="/public/img/images (12).png" alt="" />
                <img className=' absolute lg:flex hidden rotate-45 bottom-56 lg:right-[650px]' width={100} src="/public/img/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L2xhdXJhc3RlZmFubzI2Nl9hX3NpbXBsZV9ibGFja19oYW5kX2RyYXduX2Rvb2RsZV9hcnJvd19jdXJ2ZWRfbF83NDIyZWFkMS04MTIyLTQ0YzEtOWMwYS1jMmZmZDI1MTcwYTNfMi5qcGc.webp" alt="" />
                <div className='flex justify-center lg:my-8 my-4 space-x-8'>
                    <div className='bg-white flex shadow-2xl font-black opacity-95  cursor-pointer p-6 rounded-xl border-2 border-dashed'>
                        <FaUserGraduate className='ml-1 text-lg mt-0.5' />
                        شروع مسیر یادگیری
                    </div>
                    <div className='flex p-5 text-xl border-r-2 bg-[#5326b5] text-white hover:text-[#5326b5] hover:bg-white duration-1000 opacity-95 border-b-2 shadow border-t-2 rounded-full cursor-pointer'>
                        <FaCirclePlay className='mt-1 ml-2 ' />
                        دوره های رایگان
                    </div>
                </div>
            </div>
        </div>
    )
}
