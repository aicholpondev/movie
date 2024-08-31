import React from "react";
import Russia from "../../assets/img/russian.png"
import english from "../../assets/img/english.svg"
import i18n from "../../i18n/i18n"
import {LANG_EN, LANG_RU} from "../../api/api";
export default function Modal({img}) {
    const [showModal, setShowModal] = React.useState(false);

    function changeLng(lng){
        switch (lng){
            case "ru":
                localStorage.removeItem("en");
                localStorage.setItem("ru",LANG_RU);
                break;
            case "en":
                localStorage.removeItem("ru");
                localStorage.setItem("en",LANG_EN);
                break;
        }
        i18n.changeLanguage(lng);
        setShowModal(false)
    }
    return (
        <>
            <button className="w-[24px] h-[24px]"
                type="button"
                onClick={() => setShowModal(true)}>
                <img src={img} />

            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <button className="px-[30px] py-[10px] flex items-center gap-[10px] p-[15px]"
                                        onClick={() => changeLng("ru")}>

                                    <img className="w-[50px]" src={Russia} alt="img"/>
                                    <p>Русский</p>
                                </button>
                                <button className="px-[30px] py-[10px] flex items-center gap-[10px] p-[15px]"
                                        onClick={() => changeLng("en")}
                                >
                                    <img className="w-[50px]" src={english} alt="img"/>
                                    <p>English</p>
                                </button>
                                </div>


                            </div>
                        </div>

                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}


// export default function Modal({img,isActive,setActive,children}){
//     function handleClose(e){
//         e.stopPropagation();
//         setActive(!isActive);
//     }
//     return(
//         <>
//             {img && (
//                 <button
//                 className="w-[24px] h-[24px]"
//                 type="button"
//                 onClick={() => setActive(true)}>
//                     <img src={img} alt="img"/>
//                 </button>
//             )}
//             {isActive ? (
//                 <>
//                     <div className="justify-center items-center flex overflow-auto">
//                     <div className="relative w-auto my-6 mx-auto max-w-3xl">
//                     {/*content*/}
//                     <div className="border-0 rounded-lg shadow-lg relative">
//                     <div className="flex justify-end bg-gray-600">
//                     <button className="p-[5px] text-white"
//                     onClick={(e) => handleClose(e)}>
//                         CLOSE
//                     </button>
//                     </div>
//                         {children}
//                     </div>
//                     </div>
//                     </div>
//                     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//
//                 </>
//             ) : null}
//
//
//         </>
//     )
// }
