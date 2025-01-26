// import s from "./toast.module.css";
// import { FaBeer} from 'react-icons/fa';
// import { Dispatch, SetStateAction, useEffect } from 'react';


// type Props = {
//     open: boolean;
//     setOpen: Dispatch<SetStateAction<boolean>>
//     theme:'success'|'fail'
// }

// const AppAlert = ( props: Props ) => {
//     const {theme}=props
//     useEffect(()=>{
//         const timeout = setTimeout(()=>{
//             props.setOpen(false)
//         },2000)
//         return()=>{
//             clearTimeout(timeout)
//         }
//     },[props.open,props.setOpen])
//     return props.open?(
//         <div className={s.theme}>
//             <div>
//                 {theme ==="success" &&<FaBeer className={s.iconcontainer}/>}
//             </div>
//             <p className={s.title}>Successfully added</p>
//             <span className={s.close} onClick={()=>props.setOpen(false)}>
//                 &times;
//             </span>
//         </div>
//     )
// }

// export default AppAlert;