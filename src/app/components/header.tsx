"use client"
import Image from "next/image";
import background from "@/../public/Header.svg";
import { Navbar } from "./header/header";
import { Buttom } from "./ui/buttom";
import arrowRigth from "@/../public/ArrowRight.svg"
import logoCompany from "@/../public/Company Logo.svg"
import {motion} from "framer-motion"
import { animeProps, animePropsCard } from "../animation/animate";
export function Header() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <Navbar />
      <Image
        src={background}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="..."
      />
      <div className="relative  flex flex-col gap-8 justify-center items-center mb-[75px]">
        <motion.div
           {...animePropsCard}
           transition={{duration: 1.2}}
         className="flex flex-col lg:leading-[87px] loading-[60px] font-bold lg:text-[80px] text-[50px] text-center">
        <h1 >Transforming </h1>
        <h1>life into technology</h1>
        </motion.div>
       
        <motion.p 
         {...animeProps}
         transition={{duration: 1.5, delay: 0.5}}
        className="font-light lg:text-[20px] text-[16px] lg:w-[606px] w-[500px] text-center">
          solotec aims to provide solutions for your technological projects and
          beyond, supporting your objectives and projects in your daily life in
          a multitude of ways.
        </motion.p>
       <div className="flex justify-center items-center bg-[#0B63E5] hover:bg-[#0b62e5e7] rounded-[7px] w-auto px-[16px] h-[48px]">
       <Buttom
        title="More Information "
         className="font-semibold "
        />
        <Image
         src={arrowRigth}
         alt="..."
        />
       </div>
      </div>

      <div className="lg:px-0 px-5 relative flex flex-col gap-2 justify-center items-center">
        <p className="text-[14px] font-light">
        We have <span className="text-[#FFC759]">240+</span> Our clients and partners
        </p>
       
        <Image
           src={logoCompany}
           alt=".."
        />
       
      </div>
    </div>
  );
}
