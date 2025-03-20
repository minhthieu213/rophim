import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-between items-center h-[88px]'>
      <Image src="/logo_header.png" width={200} height={50} alt="MinhThieu"></Image>
    </div>
  )
}

export default Header