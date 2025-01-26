import React from "react";
import appstyle from "../App.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
// import { ToastContainer , toast} from 'react-toastify';
// import AppAlert from "./alert";
// import { useState } from "react";


function Contact(){
    // const [showAlert, setAlert]=useState(false)

    const sendEmail= (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        emailjs.sendForm("service_rfdlu5c", "template_g4gcapb" , form, "h-y_1JfSOakMBXj1v")
        .then((result)=>{
            console.log(result.text);
            
        }, (error)=>{
            console.log(error.text);
    });
    }
    return(
        <>
            <section className={appstyle.con} id="contact">
                <section className={appstyle.form}>
                    <div className={appstyle.sec1}>
                        <h6 className={appstyle.sec1heading}>Contact</h6>
                        <p className={appstyle.sec1para}>Want to say hello? Want to know more about us? Give us a call or drop us an email and we will get back to you as soon as possible.</p>
                    </div>
                    <div className={appstyle.sec2}>
                        <div className={appstyle.sec2div}>
                            <span className={appstyle.phone}><FontAwesomeIcon icon={faPhone} /></span>
                            <p className={appstyle.phone1}>+91 8090522138</p>
                        </div>
                        <div className={appstyle.sec2div2}>
                            <span className={appstyle.location}><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            <p className={appstyle.location1}>Ashoka Garden, Bhopal, 462023</p>
                        </div>
                        <div className={appstyle.sec2div3}>
                            <span className={appstyle.mail}><FontAwesomeIcon icon={faEnvelope} /></span>
                            <p className={appstyle.mail1}>kabirahmad985@gmail.com</p>
                        </div>
                    </div>
                    <div className={appstyle.sec3}>
                        <form action="" method="post" onSubmit={sendEmail}>
                            <input type="text" className={appstyle.formname} name="name" placeholder="Enter Your Name" required />

                            <input type="email" className={appstyle.formemail} name="email" placeholder="Enter Your Email Address" required />

                            <input type="text" className={appstyle.formsubject} name="subject" placeholder="Subject(Optional)" />

                            <textarea className={appstyle.formmessage} name="message" placeholder="Message" required></textarea>

                            <button type="submit" className={appstyle.formsubmit}>Send Message</button>
                            {/* <AppAlert open={showAlert} setOpen={setAlert} theme={"success"}/> */}
                        </form>
                    </div>
                    
                </section>
            </section>
        </>
    )
}

export default Contact;