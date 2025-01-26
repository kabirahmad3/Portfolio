// import { useEffect, useRef, useState } from "react";
import {Link} from 'react-scroll';
import appstyle from "../App.module.css";
function Home(){
    // const elementRef = useRef<HTMLDivElement>(null);
    // const [index, setIndex] = useState<number>(0);
    // const contents = [
    //     {text: "Kabir Ahmad", color: "#545333"},
    //     {text: "Student", color: "#545333"},
    //     {text: "Frontend developer", color: "#545333"}
    // ]
    // useEffect(() => {
    //     const element = elementRef.current;
    
    //     if (!element) return;
    
    //     // Create a ResizeObserver
    //     const resizeObserver = new ResizeObserver((entries) => {
    //       for (let entry of entries) {
    //         if (entry.target === element) {
    //           const newWidth = entry.contentRect.width;
    //             if(newWidth <= 0) {
    //                 setIndex((pre) => {
    //                     console.log(pre)
    //                     if (pre === contents.length - 1) {
    //                         return 0
    //                     } else {
    //                         return pre + 1
    //                     }
    //                 })
    //             }
    //         }
    //       }
    //     });
    
    //     // Observe the element
    //     resizeObserver.observe(element);
    
    //     // Cleanup on component unmount
    //     return () => {
    //       resizeObserver.disconnect();
    //     };
    //   }, []);
    const CV=()=>{
        window.location.href="https://kabirahmad3.github.io/Resume/";
    };
    return (
        <>
            <div className={appstyle.nav}>
                <div className={appstyle.head}><p className={[appstyle.head1,appstyle.navco].join(" ")}>Portfolio</p></div>
                <div className={appstyle.subnav}>
                    <div className={[appstyle.nav1,appstyle.navcom].join(" ")}><Link className={[appstyle.navc1,appstyle.navco].join(" ")}to="home" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}>Home</Link></div>
                    <div className={[appstyle.nav2,appstyle.navcom].join(" ")}><Link className={[appstyle.navc2,appstyle.navco].join(" ")} to="education" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}>Education</Link></div>
                    <div className={[appstyle.nav3,appstyle.navcom].join(" ")}><Link className={[appstyle.navc3,appstyle.navco].join(" ")} to="skill" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}>Skills</Link></div>
                    <div className={[appstyle.nav4,appstyle.navcom].join(" ")}><Link className={[appstyle.navv4,appstyle.navco].join(" ")} to="certification" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}>Certification</Link></div>
                    <div className={[appstyle.nav5,appstyle.navcom].join(" ")}><Link className={[appstyle.navc5,appstyle.navco].join(" ")} to="contact" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>Contact</Link></div>
                </div>
            </div>
            <div className={appstyle.homepage} id='home'>
                <div id={appstyle.name}>
                    I am
                    {/* <div ref={elementRef} className={appstyle.auto} style={{
                        color: contents[index].color
                    }}>{contents[index].text}</div> */}
                    <div className={appstyle.auto}></div>
                </div>
                <div className={appstyle.buttons}>
                    <button id={appstyle.tag} onClick={CV}>Resume</button>
                    <button id={appstyle.tag1}><Link to="education" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}>Learn More</Link></button>
                </div>
            </div>    
        </>
    );

}
export default Home;


                    
                    
                    
                    