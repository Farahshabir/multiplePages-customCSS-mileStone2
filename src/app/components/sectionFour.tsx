import Image from "next/image";
import intructor from "@/app/images/instructor.png";
import steps from "@/app/images/steps.png"
export default function SectionFour(){
    return(
        <>
        <div>
            <div className="instructor">
                <Image src={intructor} alt=""/>
                <Image src={steps} alt=""/>
            </div>
        </div>
        </>
    )
}