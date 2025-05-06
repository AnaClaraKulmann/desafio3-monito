import ReactIcon from '../assets/react.svg?react'
import Ico from '../assets/react.svg'

function Header(){
    return (
        <header>
            <nav className="bg-red-200 flex flex-row gap-4">
                <h1 className="text-green-800 hover:cursor-pointer">nav</h1>
                <p>dcdcd</p>
                <p>cdj</p>
                <img src={Ico} />
                <img src="./vite.svg"></img>
                <ReactIcon />

            </nav>
            <div>
                <h2>hero</h2>
            </div>
        </header>
    )
}

export default Header;