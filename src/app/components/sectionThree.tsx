import Image from "next/image";
import course1 from "@/app/images/course1.png";
import course2 from "@/app/images/course2.png";
import course3 from "@/app/images/course3.png";
import course4 from "@/app/images/course4.png";
import course5 from "@/app/images/course5.png";
import course6 from "@/app/images/course6.png";
import course7 from "@/app/images/course7.png";
import course8 from "@/app/images/course8.png";
import course9 from "@/app/images/course9.png";
import course10 from "@/app/images/course10.png";
import photo from "@/app/images/photo.png";
import feature1 from "@/app/images/feature1.png";
import feature2 from "@/app/images/feature2.png";
import feature3 from "@/app/images/feature3.png";
import feature4 from "@/app/images/feature4.png";
import recent1 from "@/app/images/recent1.png";
import recent2 from "@/app/images/recent2.png";
import recent3 from "@/app/images/recent3.png";
import { FaStar } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";


export default function SectionTwo(){
    return(
        <>
        <div className="sectionThree">
            <h1>Best selling courses</h1>
            <div className="bestCourse">
                <div className="Maincourse1"> 
                    <div className="courseOne">
                            <Image className="coursePic" src={course1} alt=""/>
                        <div className="coursedetails">
                        <span className="CourseInfo1">DESIGN</span>
                        <span className="CourseFee1">$57</span>
                    </div>
                    <p>Machine Learning A-Z Hands-On Python & R in Data...</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course2} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo2">DEVELOPMENT</span>
                        <span className="CourseFee2">$57</span>
                    </div>
                    <p>The Complete 2021 Web Development Bootcamp</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course3} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo3">BUISNESS</span>
                        <span className="CourseFee3">$57</span>
                    </div>
                    <p>Learn Python Programming Masterclass</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course4} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo4">MARKETING</span>
                        <span className="CourseFee4">$57</span>
                    </div>
                    <p>The Complete Digital Marketing Course-12 Courses in 1</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course5} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo5">IT & SOFTWARE</span>
                        <span className="CourseFee5">$57</span>
                    </div>
                    <p>Reiki Level I, II and Master/Teacher Program</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>
                
            </div>

            <div className="Maincourse1"> 
                <div className="courseOne">
                    <Image className="coursePic" src={course6} alt=""/>
                    <div className="coursedetails">
                        <span className="CourseInfo6">MUSIC</span>
                        <span className="CourseFee6">$57</span>
                    </div>
                    <p>Machine Learning A-Z Hands-On Python & R in Data...</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course7} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo7">MARKETING</span>
                        <span className="CourseFee7">$57</span>
                    </div>
                    <p>Machine Learning A-Z Hands-On Python & R in Data...</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course8} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo8">HEALTH & FITNESS</span>
                        <span className="CourseFee8">$57</span>
                    </div>
                    <p>Machine Learning A-Z Hands-On Python & R in Data...</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course9} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo9">DESIGN</span>
                        <span className="CourseFee9">$57</span>
                    </div>
                    <p>Machine Learning A-Z Hands-On Python & R in Data...</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>

                <div className="courseOne">
                <Image className="coursePic" src={course10} alt=""/>
                <div className="coursedetails">
                        <span className="CourseInfo10">LIFESTYLE</span>
                        <span className="CourseFee10">$57</span>
                    </div>
                    <p>Machine Learning A-Z Hands-On Python & R in Data...</p>
                    <div className="bestCourseIcons">
                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                    <span className="status">265.7K students</span>
                    </div>
                </div>
                
            </div>
            </div>
        </div>

        <div className="sectionThree2">
           
            <div className="mainfeatureCourse">
                <div className="subMainFeature">
                <div className="OurFeatureTitle">
            <h1>Our feature courses</h1>
            <p>Vestibulum sed dolor sed diam mollias maximus vel nec dolor. Donec varius purus et eleifend porta.</p>
            </div>
            <div className="featureCourses">
                    <div className="feature1">
                        <div>
                            <Image className="featureImage1" src={feature1} alt="" width={270}/>
                        </div>
                        <div className="featureDetails">
                                <div className="subfeatureDetails">
                                    <span className="detail1">HEALTH & FITNESS</span>
                                    <span className="detail2">$14.00 </span><span className="detail2disCount"><s>$26.00</s></span>
                                    <p className="detail3">Investing In Stocks The Complete Course! (13 H...</p>
                                </div>
                                <div className="sub2featureDetails">
                                    <Image className="featuredetail4" src={photo} alt=""/>
                                    <span className="featuredetail5">Kevin Gibert</span>
                                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                                    <span className="featuredetail6">(357,914)</span>
                                </div>
                                <div className="sub3featureDetails">
                                    <span className="featuredetail7"><LuUser2 /></span><span className="featuredetailstudents">265.7K students</span>
                                    <span className="featuredetail8"><FiBarChart /></span><span className="featuredetailcat">Beginner</span>
                                    <span className="featuredetail9"><LuClock4 /></span><span className="featuredetailtime">6 hour</span>
                                </div>
                        </div>
                    </div>

                    <div className="feature1">
                        <div>
                            <Image className="featureImage1" src={feature2} alt="" width={270}/>
                        </div>
                        <div className="featureDetails">
                                <div className="subfeatureDetails">
                                    <span className="detail1">HEALTH & FITNESS</span>
                                    <span className="detail2">$14.00 </span><span className="detail2disCount"><s>$26.00</s></span>
                                    <p className="detail3">Investing In Stocks The Complete Course! (13 H...</p>
                                </div>
                                <div className="sub2featureDetails">
                                    <Image className="featuredetail4" src={photo} alt=""/>
                                    <span className="featuredetail5">Kevin Gibert</span>
                                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                                    <span className="featuredetail6">(357,914)</span>
                                </div>
                                <div className="sub3featureDetails">
                                    <span className="featuredetail7"><LuUser2 /></span><span className="featuredetailstudents">265.7K students</span>
                                    <span className="featuredetail8"><FiBarChart /></span><span className="featuredetailcat">Beginner</span>
                                    <span className="featuredetail9"><LuClock4 /></span><span className="featuredetailtime">6 hour</span>
                                </div>
                        </div>
                    </div>
            </div>
            <div className="featureCourses">
                    <div className="feature1">
                        <div>
                            <Image className="featureImage1" src={feature3} alt="" width={270}/>
                        </div>
                        <div className="featureDetails">
                                <div className="subfeatureDetails">
                                    <span className="detail1">HEALTH & FITNESS</span>
                                    <span className="detail2">$14.00 </span><span className="detail2disCount"><s>$26.00</s></span>
                                    <p className="detail3">Investing In Stocks The Complete Course! (13 H...</p>
                                </div>
                                <div className="sub2featureDetails">
                                    <Image className="featuredetail4" src={photo} alt=""/>
                                    <span className="featuredetail5">Kevin Gibert</span>
                                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                                    <span className="featuredetail6">(357,914)</span>
                                </div>
                                <div className="sub3featureDetails">
                                    <span className="featuredetail7"><LuUser2 /></span><span className="featuredetailstudents">265.7K students</span>
                                    <span className="featuredetail8"><FiBarChart /></span><span className="featuredetailcat">Beginner</span>
                                    <span className="featuredetail9"><LuClock4 /></span><span className="featuredetailtime">6 hour</span>
                                </div>
                        </div>
                    </div>

                    <div className="feature1">
                        <div>
                            <Image className="featureImage1" src={feature4} alt="" width={270}/>
                        </div>
                        <div className="featureDetails">
                                <div className="subfeatureDetails">
                                    <span className="detail1">HEALTH & FITNESS</span>
                                    <span className="detail2">$14.00 </span><span className="detail2disCount"><s>$26.00</s></span>
                                    <p className="detail3">Investing In Stocks The Complete Course! (13 H...</p>
                                </div>
                                <div className="sub2featureDetails">
                                    <Image className="featuredetail4" src={photo} alt=""/>
                                    <span className="featuredetail5">Kevin Gibert</span>
                                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                                    <span className="featuredetail6">(357,914)</span>
                                </div>
                                <div className="sub3featureDetails">
                                    <span className="featuredetail7"><LuUser2 /></span><span className="featuredetailstudents">265.7K students</span>
                                    <span className="featuredetail8"><FiBarChart /></span><span className="featuredetailcat">Beginner</span>
                                    <span className="featuredetail9"><LuClock4 /></span><span className="featuredetailtime">6 hour</span>
                                </div>
                        </div>
                    </div>
            </div>
          
            </div>
            </div>

        </div>

<div className="RecentMain">
        <div className="sectionThree3">
            <h1>Recently added courses</h1>
                <div className="recentAdded">
                    <div className="recentCard">
                            <Image src={recent1} alt=""/>
                            <span>DESIGN</span>
                            <span>$57</span>
                            <p>The Python Mega Course: Build 10 Real World Applications</p>
                        <hr />
                            <div className="recentAddedStatus">
                                <span className="recentSpan"><FaStar />5.0</span>
                                <span className="recentSpan"><PiStudent />265.7K students</span>
                            </div>
                    </div>
                    <div className="recentCard">
                            <Image src={recent2} alt=""/>
                            <span>IT & SOFTWARE</span>
                            <span>$57</span>
                            <p>Facebook Ads & Facebook Marketing MASTERY 2021 Cours...</p>
                        <hr />
                            <div className="recentAddedStatus">
                                <span className="recentSpan"><FaStar />5.0</span>
                                <span className="recentSpan"><PiStudent />265.7K students</span>
                            </div>
                    </div>
                    <div className="recentCard">
                            <Image src={recent3} alt=""/>
                            <span className="CourseInfo2">DEVELOPMENT</span>
                            <span>$57</span>
                            <p>2021 Complete Python Bootcamp From Zero to Hero in Python</p>
                        <hr />
                            <div className="recentAddedStatus">
                                <span className="recentSpan"><FaStar />5.0</span>
                                <span className="recentSpan"><PiStudent />265.7K students</span>
                            </div>
                    </div>
                    <div className="addToCartCourse">
                            <div>
                                <span className="CourseInfo2">DEVELOPMENT</span>
                                <h2>2021 Complete Python Bootcamp From Zero to Hero in Python</h2>
                                <div className="addtoCartBox">
                                    <Image className="featuredetail4" src={photo} alt=""/>
                                    <p>Course by</p>
                                    <span className="featuredetail5">Kevin Gibert</span>
                                    <span className="star"><FaStar /></span><span className="rating">5.0</span>
                                    <span className="featuredetail6">(357,914)</span>
                                </div>
                                <div className="sub3featureDetails">
                                    <span className="featuredetail7"><LuUser2 /></span><span className="featuredetailstudents">265.7K students</span>
                                    <span className="featuredetail8"><FiBarChart /></span><span className="featuredetailcat">Beginner</span>
                                    <span className="featuredetail9"><LuClock4 /></span><span className="featuredetailtime">6 hour</span>
                                </div>
                            </div>
                            <div>
                                <span>$14.00</span>
                                <span>$26.00</span>
                                <span>56% OFF</span>
                            </div>
                            <div>
                                
                            </div>
                    </div>
            </div>
        </div>
        </div>
        </>
    )}