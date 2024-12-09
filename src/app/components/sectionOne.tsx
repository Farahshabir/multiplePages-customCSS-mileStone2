import Image from "next/image";
import pic1 from "@/app/images/pic1.png";
export default function SectionOne(){
    return(
       <>
       <div className="sectionOne">
            <div className="webIntro">
                <h1>Learn with expert anytime anywhere</h1>
                <p>Our mission is to help people to find the best course
                    online and learn with expert anytime, anywhere.
                </p>
                <button>Create Account</button>
            </div>
            <div className="webImage">
            <Image className="imgBanner" src={pic1} alt=""/>
            </div>
       </div>
       </>
    )
}