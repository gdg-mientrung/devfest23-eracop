'use client'
import { Popover } from 'antd'
import Link from 'next/link'

export default function NavHeader() {

  return (
    <div className='flex justify-start px-14 gap-28 bg-[#14293A] items-center'>
      <Link href='/'>
      <img className='h-20 w-20 object-scale-down' src="https://res.cloudinary.com/dk6yblsoj/image/upload/v1700938533/eracop-high-resolution-logo-white-transparent_jxpxwa.png" alt="" />
      </Link>
      <h1 className="text-white text-center">Welcome to virtual fitting room</h1>
    </div>
  )
}
