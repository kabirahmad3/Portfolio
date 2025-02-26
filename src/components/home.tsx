// import { useEffect, useRef, useState } from "react";
import appstyle from "../App.module.css";
import {Link} from 'react-scroll';



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


                    
                    
                    
                    