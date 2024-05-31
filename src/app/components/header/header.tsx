
import logo  from '@/../public/logo.svg'
import Image from 'next/image'
import { GridContainer } from '../grid';
import { List } from '../generic-list/list';
import { HeaderLinks, HeaderLinksData } from './utils';
import { Buttom } from '@/app/components/ui/buttom';


export const Navbar = () => {
  return (
    <header className=" relative z-10 w-full h-20   flex items-center mt-[20px] mb-[95px]">
      <GridContainer className="lg:px-3 px-5 ">
        <div className="z-10 flex justify-center items-center lg:gap-3 gap-1 ">
        <Image 
         src={logo}
         alt='Logotipo do site Monabele'
         className='lg:size-auto w-20 h-20'
        />
        <h1 className='font-medium lg:text-[36px] text-[26px]'>Solotec</h1>
        </div>

      <List<HeaderLinks> items={HeaderLinksData} classeName="lg:flex hidden gap-7 justify-center ml-16 items-center">
       {({item}) => (
        <li key={item.route} className={`text-[12.5px] text-[#B0B0B0]  ${item.state && "bg-[#FFFFFF40] py-[6px] px-[0.70rem] rounded-md font-semibold  text-[#ffff]"}`}>
          <a href={item.route}>{item.label}</a>
        </li>
       )}
      </List>

        <div className="btns flex justify-center items-center gap-[10px]">
          <Buttom
          title='Sign In'
          className='bg-[#1E1E1E] hover:bg-[#4543435e]'
          />
           <Buttom
          title='Join us'
          className='bg-[#FEB548] hover:bg-[#d7993d]'
          />
        </div>
      </GridContainer>
    </header>
  );
};