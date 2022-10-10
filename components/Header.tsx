import React from 'react'
import { MagnifyingGlassIcon, Cog8ToothIcon, BellIcon } from '@heroicons/react/24/outline'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex sticky top-0 bg-white-200/50 border-b-2 border-gray-100 p-4 justify-between items-center'>
      <div className='flex items-center font-semibold'>
        <span className='text-xl font-black'>•</span>
        <span className='text-l ml-2 font-mono'>Dent Carreer</span>
        <ul className='hidden sm:flex font-semibold text-xs gap-4 ml-8 tracking-wide'>
          <li>
            <div className='group cursor-pointer flex flex-col relative h-full items-center'>
              Anasayfa
              <span className='absolute transition-opacity top-4 hidden group-hover:inline-block'>•</span>
            </div>
          </li>
          <li>
            <div className='group cursor-pointer flex flex-col relative h-full items-center'>
              Şehirler
              <span className='absolute transition-opacity top-4 hidden group-hover:inline-block'>•</span>
            </div>
          </li>
          <li>
            <div className='group cursor-pointer flex flex-col relative h-full items-center'>
              Tüm İlanlar
              <span className='absolute transition-opacity top-4 hidden group-hover:inline-block'>•</span>
            </div>
          </li>
          <li>
            <div className='group cursor-pointer flex flex-col relative h-full items-center'>
              Sponsorlu İlanlar
              <span className='absolute transition-opacity top-4 hidden group-hover:inline-block'>•</span>
            </div>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-4'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-600 cursor-pointer'/>
        <Cog8ToothIcon className='h-6 w-6 text-gray-600 cursor-pointer' />
        <BellIcon className='h-6 w-6 text-gray-600 cursor-pointer'/>
        <div className='h-8 w-8 rounded-full bg-red-200'>
          {/* TODO: Profile Picture */}
        </div>
      </div>




    </header>

  )
}

export default Header;