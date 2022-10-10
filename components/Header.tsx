import React from 'react'
import { MagnifyingGlassIcon, Cog8ToothIcon, BellIcon, Bars3Icon } from '@heroicons/react/24/outline'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex sticky top-0 bg-white-200/50 border-b-2 border-gray-100 p-4 justify-between items-center px-10'>
      <div className='flex items-center font-semibold'>
        <span className='text-xl lg:text-2xl font-black'>•</span>
        <span className='text-l lg:text-xl ml-2 font-mono'>Dent Carreer</span>

        {/* TODO: Menu Button for phone screens */}
        <ul className='hidden md:flex font-semibold text-xs gap-4 lg:gap-10 lg:ml-12 lg:text-sm ml-8 tracking-wide'>
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

      <div className='items-center gap-4 hidden md:flex'>
        <MagnifyingGlassIcon className='h-4 w-4 md:h-6 md:w-6 text-gray-600 cursor-pointer' />
        <Cog8ToothIcon className='h-4 w-4 md:h-6 md:w-6 text-gray-600 cursor-pointer' />
        <BellIcon className='h-4 w-4 md:h-6 md:w-6 text-gray-600 cursor-pointer' />
        <div className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-red-200'>
          {/* TODO: Profile Picture */}
        </div>
      </div>

      <div className='flex items-center gap-4 md:hidden'>
        <Bars3Icon className='h-6 w-6 text-gray-600 cursor-pointer' />
      </div>




    </header>

  )
}

export default Header;