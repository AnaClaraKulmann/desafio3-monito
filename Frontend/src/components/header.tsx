import NavBar from "./navbar";
import Hero from "./hero";

function Header(){
    return (
        <header className="h-[100vh] flex flex-col text-base text-blue-950">
            <NavBar />
            <Hero />
        </header>
    )
}

export default Header;