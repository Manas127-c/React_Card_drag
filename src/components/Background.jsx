import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-full z-[2]'>
    <div className=' absolute w-full py-10 text-zinc-600 flex justify-center font-semibold text-lg'>Documents.</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
}

export default Background