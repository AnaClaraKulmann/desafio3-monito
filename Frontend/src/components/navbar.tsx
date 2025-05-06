import Logo from '../assets/LogoMonito.svg?react';
import IconSearch from '../assets/IconSearch.svg?react';

function NavBar(){
    return (
       <nav className='items-center justify-between flex flex-row flex-wrap w-4/5 m-auto pt-3 mt-4'>
        <Logo />
        <ul className='flex flex-row gap-5 font-bold ml-4'>
            <li className='hover:cursor-pointer px-5'>Home</li>
            <li className='hover:cursor-pointer px-5'>Category</li>
            <li className='hover:cursor-pointer px-5'>About</li>
            <li className='hover:cursor-pointer px-5'>Contact</li>
        </ul>
        <div>
            <IconSearch className='hover:cursor-pointer'/>
            <input className='' type='text' name='search-nav' placeholder='Search something here!'></input>
        </div>
       </nav>
    )
}

export default NavBar;