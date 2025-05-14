import Logo from '../assets/LogoMonito.svg?react';

function Footer(){
    return(
        <footer className="h-[50vh] bg-orange-100 border border-orange-100 rounded-t-3xl">
            <div className='flex flex-row justify-center items-center gap-6 bg-blue-950 rounded-2xl py-7 mt-18 mx-30 text-white'>
                <h1 className='font-bold text-[26px] w-2/7 '>Register Now So You Don't Miss Our Programs</h1>
                <form className=''>
                    <input type='email' name='email' placeholder='Enter your Email' className='bg-blue-500 border border-gray-600 rounded-lg p-2 pr-60'/>
                    <button type='submit'>Subcribe Now</button>
                </form>
            </div>
            <div className="flex flex-row gap-150 justify-center border-b border-gray-300">
                <ul className="flex flex-row gap-13 font-medium text-black">
                    <li>Home</li>
                    <li>Category</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex flex-row gap-8 items-center">
                    <li><img src="../svgs/IconFacebook.svg" alt="Facebook Icon" className="w-6 h-6"/></li>
                    <li><img src="../svgs/IconX.svg" alt="X Icon" className="w-6 h-6"/></li>
                    <li><img src="../svgs/IconInstagram.svg" alt="Instagram Icon" className="w-6 h-6"/></li>
                    <li><img src="../svgs/IconYoutube.svg" alt="Youtube Icon" className="w-7 h-7"/></li>
                </ul>
            </div>
            <div className='flex flex-row justify-center gap-50 text-gray-600 font-medium'>
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
