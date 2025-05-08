import Logo from '../assets/LogoMonito.svg?react';

function Footer(){
    return(
        <footer className="h-[50vh] bg-orange-100 border border-orange-100 rounded-t-3xl">
            <div>
                <h1>Register Now So You Don't Miss Our Programs</h1>
                <form>
                    <input type='email' name='email' placeholder='Enter your Email'/>
                    <button type='submit'>Subcribe Now</button>
                </form>
            </div>
            <div className="flex flex-row gap-150 border-b border-gray-300">
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
