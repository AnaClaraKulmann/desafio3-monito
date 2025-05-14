import NavBar from "../multi/navbar";
import Hero from "../home/hero";

function Header(){
    return (
        <header className="h-[100vh] bg-[url(./images/img-hero.png)] bg-cover flex flex-col text-base text-blue-950">
            <NavBar />
            <Hero />
        </header>
    );
}

export default Header;