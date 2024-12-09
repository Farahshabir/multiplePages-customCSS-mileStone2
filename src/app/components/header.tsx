import Image from "next/image";
import Link from "next/link";
import LOGO from "@/app/images/LOGO.png";
import { GoBell } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
export default function Header(){
    return(
        <div>
            <div className="topMainNavBar">
                <div className="navBarLinks">
                    <ul>
                        <li><Link href={"/"} className="">Home</Link></li>
                        <li><Link href={"/courses"} className="">Courses</Link></li>
                        <li><Link href={"/about"} className="">About</Link></li>
                        <li><Link href={"/contact"} className="">Contact</Link></li>
                        <li><Link href={"/team"} className="">Become an Instructor</Link></li>
                    </ul>
                </div>
                <div className="navBarData">
                    <select className="navBarOptions">
                        <option value="1">USD</option>
                        <option value="2">PK</option>
                    </select>
                    <select className="navBarOptions">
                        <option value="1">English</option>
                        <option value="2">Turkish</option>
                    </select>
                </div>
            </div>
            <div className="secondNavBar">
                <div className="secondNavBarLeft">
                <div className="logo"><Image src={LOGO} alt=""/></div>
                <div className="browse"><select><option value="1">Browse</option></select></div>
                <div className="searchBar">
                <span className="searchIcon"><CiSearch /></span>
                <input className="placeholder" type="text" placeholder="What do you want learn..."></input>
                    </div>
                </div>

                <div className="NavSocialIcon">
                    <div className="socialmenus"><span><GoBell /></span></div>
                    <div className="socialmenus"><span><FaRegHeart /></span></div>
                    <div className="socialmenus"><span><LuShoppingCart /></span></div>
                    <div className="createAccount"><button>Create Account</button></div>
                    <div className="signup"><button>Sign In</button></div>
                </div>
            </div>
        </div>
    )
}