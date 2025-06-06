import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='flex text-white items-center gap-2 text-[18px] font-semibold mb-2 cursor-pointer hover:underline underline-offset-8' >
      <Icon/> <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
