import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Cards = ({ val ,reference}) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 px-6 py-10 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm leading-tight font-medium mt-5">{val.desc}</p>
        <div className="absolute w-full   bottom-0 left-0 ">
          <div className="flex item-center justify-between px-8 py-2  mb-5">
            <h5 className="text-sm">{val.size}</h5>
            <span className="w-5 h-5 rounded-full bg-zinc-600 flex items-center justify-center ">
              {val.close ? (<IoIosClose size="0.7em" color="white"/>):(<LuDownload size="0.7em" color="white" />)}                        
            </span>
          </div>
          {val.tags.isopen && (<div className={`w-full h-10 ${val.tags.color === "blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
            <h5 className=" text-xs font-semibold">{val.tags.title}</h5>
          </div>)}
          
        </div>
      </motion.div>
    </>
  );
};

export default Cards;
