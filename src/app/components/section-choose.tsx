"use client"
import Image from "next/image";
import arrowRigth from "@/../public/ArrowRight.svg";
import quadre from "@/../public/Rectangle 58.svg";
import { Buttom } from "./ui/buttom";
import { GridContainer } from "./grid";
import {motion} from "framer-motion"
import { animeProps, animePropsCard, animePropsImg } from "../animation/animate";

export function Choose() {
  return (
    <div
      className="w-full h-full -z-10   overflow-hidden
     relative bg-[#FFFF] flex justify-center items-center"
    >
      <GridContainer className="gap-[80px]">
      <div className="flex flex-col">
        <motion.h1 
        {...animeProps}
        transition={{duration: 1}}
        className="text-[#061C3D] text-[56px] font-semibold leading-[70px] mb-[24px]">
          why choose <br /> Solutec ?
        </motion.h1>

        <div className="*:text-[#061C3D] *:text-[18px] *:w-[550px] flex flex-col gap-6 mb-[52px]">
          <p>
            Because is semper justo quis tempor. Praesent molestie, lorem sed
            imperdiet tempor, libero urna semper urna, facilisis vulputate velit
            arcu vitae mi. Donec ac nisi ex.
          </p>

          <p>
            Because is semper justo quis tempor. Praesent molestie, lorem sed
            imperdiet tempor, libero urna semper urna, facilisis vulputate velit
            arcu vitae mi. Donec ac nisi ex.
          </p>

          <p>
            Because is semper justo quis tempor. Praesent molestie, lorem sed
            imperdiet tempor, libero urna semper urna, facilisis vulputate velit
            arcu vitae mi. Donec ac nisi ex. Because is semper justo quis
            tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna
            semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi
            ex.
          </p>
        </div>
       

        <motion.div
        {...animePropsCard}
        transition={{duration: 1}}
        className="flex justify-center items-center bg-[#0B63E5] hover:bg-[#0b62e5e7] hover:cursor rounded-[7px] w-[242px] px-[16px] h-[48px]">
       <Buttom
        title="Schedule Meeting"
         className="font-semibold"
        />
        <Image
         src={arrowRigth}
         alt="..."
        />
       </motion.div>
      </div>

      <motion.div
        {...animePropsImg}
        transition={{duration: 1, delay: 0.8}}
      >
        <Image src={quadre} alt="..." />
      </motion.div>
      </GridContainer>
    </div>
  );
}
