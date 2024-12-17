import { Location } from "../../assets/Icon/location";
import { Logo } from "../../assets/Icon/logo";
import { Navbar } from "../../assets/Icon/navbar";
import { PhoneIcon } from "../../assets/Icon/phone-icon";

export const Header = () => {
    return (
        <>
            <div className="container hidden md:flex justify-end gap-[30px] items-center">
                <div className="flex gap-[10px] items-center">
                    <a href="#">
                        <Location />
                    </a>
                    <p className="font-medium text-[12px] text-[#1a1a1a]">Company Address type here</p>
                </div>
                <div className="flex gap-[10px] items-center">
                    <a href="#">
                        <PhoneIcon />
                    </a>
                    <p className="font-medium text-[12px] text-[#1a1a1a]">+1 234 567 890</p>
                </div>
            </div>

            <header className=" bg-orange-500 pt-[25px] pb-[25px] shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-xl font-bold text-orange-500">
                        <Logo />
                    </a>
                    <nav className="hidden md:flex md:gap-[40px] lg:gap-[88px] items-center cursor-pointer">
                        <a href="#" className="text-white hover:text-[#2a3a8c] font-medium text-[16px]">
                            Home
                        </a>
                        <a href="#" className="text-white hover:text-[#2a3a8c] font-medium text-[16px]">
                            About us
                        </a>
                        <a href="#" className="text-white hover:text-[#2a3a8c] font-medium text-[16px]">
                            Services
                        </a>
                        <a href="#" className="text-white hover:text-[#2a3a8c]  font-medium text-[16px]">
                            Nevs
                        </a>
                        <button className="hidden md:block font-medium text-orange-500 text-[13px] bg-white py-[10px] px-[20px] cursor-pointer rounded-[5px]">Contact Us</button>
                    </nav>
                    <button className="block md:hidden text-gray-700 focus:outline-none">
                        <Navbar />
                    </button>
                </div>
            </header>
        </>
    );
};

