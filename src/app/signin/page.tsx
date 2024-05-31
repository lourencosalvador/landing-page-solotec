import drow from "@/../public/drow.png";
import avatar from "@/../public/perfil.png"
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { Form } from "./components/form";
import { GridContainer } from "../components/grid";

export default function Signin() {
  return (
    <div className=" bg-zinc-950 flex justify-center items-center p-14 mx-auto ">
      <Image
        src={drow}
        alt=".."
        width={650}
        height={650}
        className="absolute top-0 right-0"
      />
      <GridContainer>
        <div className="flex w-full h-auto justify-center items-center">
          <div className="lg:flex hidden flex-col ">
            <Image src={logo} alt=".." />
            <div className="flex flex-col gap-[145px]">
              <h1 className="lg:text-[70px] text-[50px] font-black text-[#FCFCFC] w-[690px] text-left leading-[98px]">
                Register now on the platform
              </h1>

              <div className="flex flex-col gap-8">
                <p className="text-[18px] text-[#FCFCFC] w-[483px] text-left font-light">
                  Be even more connected with solotec and register on our
                  platform, and stay connected to our news and updates.
                </p>
                <div className="flex gap-3  items-center">
                  <div className="flex">
                    <div className="size-[50px] rounded-full border-[2px] border-[CDDFFF] overflow-hidden">
                      <Image
                       src={avatar}
                       alt="..."
                       className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="size-[50px] rounded-full border-[2px] border-[CDDFFF] overflow-hidden -ml-4 z-10">
                    <Image
                       src={avatar}
                       alt="..."
                       className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="size-[50px] rounded-full border-[2px] border-[CDDFFF] overflow-hidden -ml-4 z-20">
                    <Image
                       src={avatar}
                       alt="..."
                       className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">+ 200</span> connected
                    people
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Form />
        </div>
      </GridContainer>
    </div>
  );
}
