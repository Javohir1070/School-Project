import React from "react";
import { IoMdClose } from "react-icons/io";
export const Modal = ({children, openModal, setOpenModal, extraModal}) => {
    return(
        <div id="wrapper" onClick={(e) => e.target.id == "wrapper" && setOpenModal(false)} className={`fixed inset-0 bg-[#00000079] ${extraModal} backdrop-blur flex items-center duration-300 ${openModal ? "scale-100" : "scale-0"} justify-center`}>
            <div className="absolute w-[500px] h-[300px] bg-white rounded-md">
                <button className="absolute top-3 right-3" onClick={() => setOpenModal(false)}><IoMdClose size={"25px"}/></button>
                {children}
            </div>
        </div>
    )
}