import SvgLogo from "../../assets/svg/SvgLogo";
import {NavLink} from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import russian from "../../assets/img/russian.png"
import english from "../../assets/img/english.svg"
import {useContext} from "react";
import {ThemeContext} from "../../darkMode/darkMode";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Modal from "../Modal/Modal";
import {useTranslation} from "react-i18next";

export default function Header(){

    const {toggle,theme} = useContext(ThemeContext);
    const { t } = useTranslation();
    // console.log(theme)
    return(
        <header className=" sticky top-0 z-[100] bg-blue-900">
            <div className="container">
                <div className="flex justify-between items-center py-[25px]">
                    <SvgLogo/>

                    <nav className="flex items-center gap-[20px]">
                        <NavLink to={"/"} className="text-white text[16px] font-bold">{t("main")}</NavLink>
                        <NavLink to={"/popular"} className="text-white text[16px] font-bold">{t("popular")}</NavLink>
                        <NavLink to={"/now-playing"} className="text-white text[16px] font-bold">{t("nowPlaying")}</NavLink>
                        <NavLink to={"/up-coming"} className="text-white text[16px] font-bold">{t("upComing")}</NavLink>
                        <NavLink to={"/top-rated"} className="text-white text[16px] font-bold">{t("topRated")}</NavLink>
                    </nav>

                    <div className="flex items-center gap-[40px]">
                        <button onClick={toggle} className="text-[22px] text-white" >
                            {
                                theme === "light" ?  <MdDarkMode /> : <MdLightMode />
                            }

                        </button>
                        <button>
                            <IoMdSearch className="text-white text-2xl " /></button>
                        <button>
                          <Modal img={ russian ? russian : english} />
                            <img  className="w-[24px]" src={russian} alt="img"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}