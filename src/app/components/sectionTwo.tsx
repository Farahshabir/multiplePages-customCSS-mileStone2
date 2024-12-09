import Image from "next/image";
import cat1 from "@/app/images/cat1.png";
import frame1 from "@/app/images/frame1.png";
import frame2 from "@/app/images/frame2.png";
import frame3 from "@/app/images/frame3.png";
import frame4 from "@/app/images/frame4.png";
import frame5 from "@/app/images/frame5.png";
import frame6 from "@/app/images/frame6.png";
import frame7 from "@/app/images/frame7.png";
import frame8 from "@/app/images/frame8.png";
import frame9 from "@/app/images/frame9.png";
import frame10 from "@/app/images/frame10.png";
import frame11 from "@/app/images/frame11.png";
import frame12 from "@/app/images/frame12.png";

export default function SectionTwo(){
    return(
        <>
        <div className="SectionTwo">
            <h1 className="catTitle">Browse top category</h1>
            <div className="submainContainerCat">
            <div className="categoryOne">
                <div className="cat1">
                    <Image className="catImage" src={frame1} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat2">
                    <Image className="catImage" src={frame2} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat3">
                    <Image className="catImage" src={frame3} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat4">
                    <Image className="catImage" src={frame4} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                </div>
                <div className="categoryOne">
                <div className="cat5">
                    <Image className="catImage" src={frame5} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat6">
                    <Image className="catImage" src={frame6} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat7">
                    <Image className="catImage" src={frame7} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat8">
                    <Image className="catImage" src={frame8} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                </div>

                <div className="categoryOne">
                <div className="cat9">
                    <Image className="catImage" src={frame9} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat10">
                    <Image className="catImage" src={frame10} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat11">
                    <Image className="catImage" src={frame11} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                <div className="cat12">
                    <Image className="catImage" src={frame12} alt=""/>
                    <p>Label</p>
                    <span>63,476 Courses</span>
                </div>
                </div>
                </div>
                <div className="catPara"><p>We have more category & subcategory. <span>Browse All</span></p></div>
        </div>
        </>
    )
}