'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCalendarAlt } from "react-icons/fa";

function Header() {
    const [colorHeader, setcolorHeader] = useState('bg-transperents')
    useEffect(() => {
        const changeColorHeader = () => {
            if (window.scrollY > 5) {
                setcolorHeader('bg-[rgba(250,250,250,0.7)]')
            } else {
                setcolorHeader('bg-transperents')
            }
        }
        window.addEventListener('scroll', changeColorHeader)
        return () => window.removeEventListener('scroll', changeColorHeader)
    }, [])

    return (
        <header className={`fixed top-0 z-50 h-[95px] w-full flex items-center justify-center ${colorHeader}`} >
            <div className="w-[1200px] flex justify-between">
                <div className="w-[200px] flex items-center">
                    <div className="w-[150px] h-[74px]">
                        <Image
                            src={`${colorHeader === 'bg-transperents' ? '/header/logo-w.png' : '/header/logo-new.png'}`}
                            width={150}
                            height={74}
                            priority
                            alt="logo"
                            className="w-auto h-auto"
                        />
                    </div>
                </div>
                <div className={`flex-1 flex items-center justify-between tracking-[0.75px] ${colorHeader === 'bg-transperents' ? 'text-white' : ''}`}>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">giới thiệu</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">giới thiệu</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">phòng nghỉ</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">ẩm thực</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">hội nghị</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">dịch vụ</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">ưu đãi</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">view 360</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">liên hệ</Link>
                    <Link href='#'
                        className="py-8 px-3 text-xs uppercase font-bold hover:text-[#5c4019]">vn/en</Link>
                    <Link href='#'
                        className="py-8 px-3">
                        <button className="py-[10px] px-5 w-[150px] h-10 text-xs uppercase font-bold text-white bg-btn hover:bg-[#d8ba8e] rounded-sm flex items-center justify-between">
                            <span className="mr-2">
                                <FaCalendarAlt />
                            </span>đặt phòng<span>
                            </span></button>
                    </Link>
                </div>
            </div>
        </header >
    );
}

export default Header;