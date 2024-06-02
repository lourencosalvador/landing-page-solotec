import Image from "next/image";
import background from "@/../public/Features.svg";
import { datacartProps, dateCart } from "@/app/data/date-card";
import { List } from "./generic-list/list";
import arrowBlue from "@/../public/arrow-blue.svg";

export function Service() {
  return (
    <div className="w-full h-[73.5rem] bg-rose-400 overflow-hidden relative flex flex-col  items-center gap-[62px] py-[100px]">
      <Image
        src={background}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="..."
      />
      <div className="relative flex flex-col justify-center items-center gap-8 ">
        <h1 className="text-[56px] font-bold text-center leading-[70px]">
          Take a look at <br /> our services and join now
        </h1>
        <p className="text-[19px] font-light w-[648px] text-center ">
          we offer quality services and professionals who excel in what they do,
          from diology to the production of the work, this at solotec
        </p>
      </div>

      <List<datacartProps>
        items={dateCart}
        classeName="relative grid grid-cols-2 grid-rows-2 gap-6 "
      >
        {({ item }) => (
          <div className="bg-[#E6E8EC] w-[648px] h-[248px] rounded-[20px] 
          flex gap-6 p-[40px] duration-700 ease-in-out hover:cursor-pointer hover:shadow-xl">
            <div>
              <div className="size-[76px] rounded-[10px] bg-[#F0F5FF] flex justify-center items-center">
                <Image src={item.icon} alt=".." />
              </div>
            </div>
            <div>
              <h1 className="text-[24px] font-medium text-[#061C3D] mb-[12px]">
                {item.title}
              </h1>
              <h3 className="text-[16px] font-light text-[#42526B] mb-[20px]">
                {item.description}
              </h3>
              <div className="flex gap-2">
                <p className="text-[#0B63E5] text-[16px] font-medium">
                  Learn More
                </p>
                <Image src={arrowBlue} alt="..." />
              </div>
            </div>
          </div>
        )}
      </List>
    </div>
  );
}
