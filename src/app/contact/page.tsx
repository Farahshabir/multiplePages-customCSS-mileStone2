import Link from "next/link";
import Image from "next/image";
import contact from "@/app/images/contact.png"
import Header from "../components/header";
export default function Contact(){
    return(
        <>
       <div>
            <Header />
          <div>
            <div>
                <h1>Contact with us</h1>
                <p>Want to chat? We'd love to hear from you! Get in 
                    touch with our Customer Success Team to inquire
                    about speaking events, advertising rates, or just
                    say hello.
                </p>
                <button>Copy Email</button>
            </div>
            <div>
                <Image src={contact} alt=""/>
            </div>
          </div>
        </div>
        </>
    )
}