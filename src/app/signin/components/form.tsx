import { Buttom } from "@/app/components/ui/buttom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


// const schemaForm = z.object({
//   password: z.string().min(5),
//   email: z.string().email()
// })

// type SchemaForm = z.infer<typeof schemaForm>


export function Form() {


  // function handleFormData(data: SchemaForm){
  //   console.log(data)
  // }

  return (
    <form
      action=""
      className=" max-w-4xl p-16 mx-auto  rounded-lg h-[627px] bg-[#FCFCFC] z-10"
    >
      <div className="flex justify-center items-center mb-[70px]">
        <h1 className="text-zinc-900 text-[26px] font-bold">Login</h1>
      </div>
      <div className="flex flex-col gap-6 mb-[90px]">
        <div className=" flex flex-col w-[382px] gap-4">
          <label htmlFor="" className="text-zinc-950 text-[14px] font-semibold">
            Email or phone number
          </label>
          <input
            type="text"
      
            className="px-[28px] py-[20px] 
                border-[1px] rounded-md border-[#9E9E9E] 
                 text-[14px] text-[#AAAA] placeholder:text-[#AAAA] outline-[#0B63E5]
                w-full"
            placeholder="Enter your email or phone number"
          />
        </div>
        <div className=" flex flex-col w-[382px] gap-4">
          <label htmlFor="" className="text-zinc-950 text-[14px] font-semibold">
            Password
          </label>
          <input
            type="text"
       
            className="px-[28px] py-[20px] 
                border-[1px] rounded-md border-[#9E9E9E] 
                 text-[14px] text-[#AAAA] placeholder:text-[#AAAA] outline-[#0B63E5]
                w-full"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
      <Buttom
        className="bg-[#0B63E5] text-[14px] font-medium w-full h-[60px] hover:bg-[#0b62e5cd] duration-300 ease-out"
        title="Log In"
  
      />
      <p className="text-[15px] font-bold text-[#0B63E5] hover:cursor-pointer  hover:text-[#0b62e5cd] duration-300 ease-out">Create an account</p>
      </div>
    </form>
  );
}
