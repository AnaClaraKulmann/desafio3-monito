import Logo from '../assets/LogoMonito.svg?react';
import IconSearch from '../assets/IconSearch.svg?react';
import BlueButton from './blueButton';

function NavBar(){
    return (
       <nav className='items-center justify-between flex flex-row flex-wrap w-4/5 m-auto pt-3 mt-4'>
        <Logo />
        <ul className='flex flex-row gap-4 font-bold'>
            <li className='hover:text-xs hover:cursor-pointer hover:text-blue-900 px-2'>Home</li>
            <li className='hover:text-xs hover:cursor-pointer hover:text-blue-900 px-2'>Category</li>
            <li className='hover:text-xs hover:cursor-pointer hover:text-blue-900 px-2'>About</li>
            <li className='hover:text-xs hover:cursor-pointer hover:text-blue-900 px-2'>Contact</li>
        </ul>
        <div className='flex flex-row gap-2 bg-blue-100 rounded-full items-center px-3 py-2'>
            <IconSearch className='hover:cursor-pointer'/>
            <input className='outline-none pr-7 text-xs' type='text' name='search-nav' placeholder='Search something here!'></input>
        </div>
        <div className='font-bold'>
         <BlueButton text='Join the community' />
        </div>
        <div className='flex flex-row gap-2 hover:cursor-pointer'>
            <img src='./svgs/IconCurrency.svg' alt='Money icon' />
            <p>VND</p>
            <img src='./svgs/IconDropdownArrow.svg' alt='Dropdown arrow icon'/>
        </div>
       </nav>
    )
}

export default NavBar;