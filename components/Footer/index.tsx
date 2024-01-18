"use client";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <>
      <footer
        className="text-white wow fadeInUp dark:bg-gray-dark relative z-10 bg-yellow pt-16 md:pt-20 px-2 md:px-10 xl:px-20"
        data-wow-delay=".1s"
      >
        <div className={'flex-col gap-8 lg:flex-row flex w-full justify-between items-center'}>
            <div className={'text-2xl md:text-3xl font-bold'}>ISH RAJESH SHELLEY</div>
            <ul className={'flex flex-col md:flex-row items-center gap-4 md:gap-8'}>
                <li className={'hover:text-black transition-all duration-300 cursor-pointer'}>Guide</li>
                <li className={'hover:text-black transition-all duration-300 cursor-pointer'}>Services</li>
                <li className={'hover:text-black transition-all duration-300 cursor-pointer'}>Blog</li>
                <li className={'hover:text-black transition-all duration-300 cursor-pointer'}>Timelines</li>
                <li className={'hover:text-black transition-all duration-300 cursor-pointer'}>Contact</li>
            </ul>
            <div className={'flex gap-4'}>
                <div className={'text-yellow hover:text-white bg-white hover:bg-black transition-all duration-300 flex items-center justify-center rounded-full p-2'}>
                    <FaInstagram size={35}/>
                </div>
                <div className={'text-yellow hover:text-white bg-white hover:bg-black transition-all duration-300 flex items-center justify-center rounded-full p-2'}>
                    <FaFacebookF size={35}/>
                </div>
                <div className={'text-yellow hover:text-white bg-white hover:bg-black transition-all duration-300 flex items-center justify-center rounded-full p-2'}>
                    <RiTwitterXFill size={35}/>
                </div>
            </div>
        </div>
          <div className={'py-20 flex justify-center md:justify-start'}>
              © ISH RAJESH SHELLEY, 2024.
          </div>
      </footer>
    </>
  );
};

export default Footer;
