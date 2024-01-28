import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
    const ref=useRef(null)
  const fdata = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vero?",
      size: "0.6mb",
      close: true,
      tags: { isopen: false, title: "Download", color: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vero?Lorem ipsum dolor sit amet",
      size: "0.4mb",
      close: false,
      tags: { isopen: true, title: "Upload", color: "blue" },
    },
    {
      desc: "consectetur adipisicing elit. Autem, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vero?",
      size: "0.2mb",
      close: false,
      tags: { isopen: true, title: "Download Now", color: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="flex-wrap absolute z-[3] top-0 left-0 w-full h-full flex gap-3 overflow-hidden">
        {fdata.map((e,i)=>(<Cards reference={ref} key={i} val={e}/>))}
      </div>
    </>
  );
};

export default Foreground;
