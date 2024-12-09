import Image from "next/image";
import tutor1 from "@/app/images/tutor1.png";
import tutor2 from "@/app/images/tutor2.png";
import tutor3 from "@/app/images/tutor3.png";
import tutor4 from "@/app/images/tutor4.png";
import tutor5 from "@/app/images/tutor5.png";
import { FaStar } from "react-icons/fa";
export default function SectionFive(){
    return(
        <>
        <div className="mainTutorContainer">
            <h1>Top instructor of the month</h1>
            <div className="tutorlist">
                <div className="tutorOne">
                    <Image src={tutor1} alt=""/>
                    <p className="tutorName">Devon Lane</p>
                    <p className="tutorSubject">Senior Developer</p>
                    <hr />
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                    {/* <span>4.6</span>
                    <span>854 students</span> */}
                </div>
                <div>
                    <Image src={tutor2} alt=""/>
                    <p>Darrell Steward</p>
                    <p>Digital Product Designer</p>
                    <hr />
                    <span>4.9</span>
                    <span>451,444 students</span>
                </div>
                <div>
                    <Image src={tutor3} alt=""/>
                    <p>Jane Cooper</p>
                    <p>UI/UX Designer</p>
                    <hr />
                    <span>4.8</span>
                    <span>435,671 students</span>
                </div>
                <div>
                    <Image src={tutor4} alt=""/>
                    <p>Albert Flores</p>
                    <p>Adobe instructor</p>
                    <hr />
                    <span>4.7</span>
                    <span>511,123 students</span>
                </div>
                <div>
                    <Image src={tutor5} alt=""/>
                    <p>Kathryn Murphy</p>
                    <p>Lead Developer</p>
                    <hr />
                    <span>4.2</span>
                    <span>2,711 students</span>
                </div>
            </div>
        </div>
        </>
    )
}