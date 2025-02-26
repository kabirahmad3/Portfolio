import appstyle from "../App.module.css";
import {Link} from 'react-scroll';




function Nav(){
    return(
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
        </>
    )
}

export default Nav;
