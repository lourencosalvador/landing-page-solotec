"use client"
import { GridContainer } from "./grid";
import Image from "next/image";
import { Buttom } from "./ui/buttom";
import arrowBlue from "@/../public/arrow-blue.svg";
import { List } from "./generic-list/list";
import {
  dateCartPortfolio,
  dateCartPortfolioProps,
} from "../data/date-card-portifolio";
import {motion} from "framer-motion"
import { animePropsImg, animePropsImgGalery} from "../animation/animate";

export function Portifolio() {
  return (
    <div
      className="w-full h-auto overflow-hidden lg:px-0  px-5
        relative bg-[#FFFF] flex justify-center items-center"
    >
      <GridContainer className="flex flex-col gap-16">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-zinc-900 text-[56px] font-semibold mb-2">
              Our portfolio
            </h1>
            <p className="text-[#42526B] text-[18px]">
              Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
              tristique. <br /> Pellentesque quis augue ac mauris posuere
              vehicula.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center bg-transparent border-[1px] border-[#0B63E5] hover:bg-[#0b62e5e7] hover:cursor rounded-[7px] w-[242px] px-[16px] h-[48px]">
              <Buttom
                title="View all portfolio"
                className="font-semibold text-[#0B63E5]"
              />
              <Image src={arrowBlue} alt="..." />
            </div>
          </div>
        </div>
        <div className="w-full h-auto ">
        <List<dateCartPortfolioProps>
          items={dateCartPortfolio}
          classeName=" grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 w-full "
        >
          {({ item }) => (
            <motion.div
            {...animePropsImg}
            transition={{duration: 1}}
             className="w-[35rem] h-[40.75rem] bg-[#fff] border-[0.5px] border-zinc-200 flex flex-col gap-4 hover:cursor-pointer hover:shadow-xl duration-700 ease-in-out hover:scale-105">
              <div className="w-full h-[29.25rem] bg-blue-700 overflow-hidden">
                <Image
                  src={item.img}
                  alt="..."
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-6">
                <h1 className="text-[24px] text-[#061C3D] font-medium">
                  {item.title}
                </h1>
                <p className="text-[16px] font-light text-[#42526B]">
                  {item.refresh}
                </p>
              </div>

              <div className="flex gap-2 px-6">
                <p className="text-[#0B63E5] text-[16px] font-medium">
                  View Case Study
                </p>
                <Image src={arrowBlue} alt="..." />
              </div>
            </motion.div>
          )}
        </List>
        </div>
      </GridContainer>
    </div>
  );
}
