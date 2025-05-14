import Logo from '../../assets/LogoMonito.svg?react';

function Footer(){
    return(
        <footer className="h-[66vh] bg-orange-100 border border-orange-100 rounded-t-3xl mt-30">
            <div className='flex flex-row justify-center items-center gap-6 bg-blue-950 rounded-2xl py-7 mt-18 mx-30 text-white'>
                <h1 className='font-bold text-[26px] w-2/7 '>Register Now So You Don't Miss Our Programs</h1>
                <form className='flex gap-3 bg-white rounded-xl py-3 px-3'>
                    <input type='email' name='email' placeholder='Enter your Email' className='bg-white border border-gray-400 rounded-lg text-gray-700 py-3 pl-7 pr-80'/>
                    <button type='submit' className='bg-blue-950 rounded-lg py-3 px-7 hover:cursor-pointer hover:bg-blue-900'>Subcribe Now</button>
                </form>
            </div>
            <div className="flex flex-row gap-135 justify-center border-b border-gray-300 py-10">
                <ul className="flex flex-row gap-13 font-medium text-black hover:cursor-pointer">
                    <li>Home</li>
                    <li>Category</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex flex-row gap-8 items-center hover:cursor-pointer">
                    <li><img src="../svgs/IconFacebook.svg" alt="Facebook Icon" className="w-6 h-6"/></li>
                    <li><img src="../svgs/IconX.svg" alt="X Icon" className="w-6 h-6"/></li>
                    <li><img src="../svgs/IconInstagram.svg" alt="Instagram Icon" className="w-6 h-6"/></li>
                    <li><img src="../svgs/IconYoutube.svg" alt="Youtube Icon" className="w-7 h-7"/></li>
                </ul>
            </div>
            <div className='flex flex-row justify-center gap-65 text-gray-600 font-medium py-10'>
                <p>&copy; 2022 Monito. All rights reserved.</p>
                <Logo />
                <ul className='flex flex-row gap-10'>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );

}

export default Footer;
