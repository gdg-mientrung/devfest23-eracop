'use client'
import { Popover } from 'antd'
import Link from 'next/link'

export default function NavHeader() {

  return (
    <div className='flex justify-start px-14 gap-28 bg-[linear-gradient(-180deg,#f53d2d,#f63)]'>
      <Link href='/'>
      <img className='h-20 w-20 object-scale-down' src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1385749/draw_svg20210625-19886-xh0lc.svg.png" alt="" />
      </Link>
      <h1>Welcome to virtual room</h1>
    </div>
  )
}
