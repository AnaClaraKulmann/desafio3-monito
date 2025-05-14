import BlueButton from "../multi/blueButton";
import TransparentButton from "../multi/transparentButton";

function Hero(){
    return(
        <div className="flex-grow w-4/5 m-auto">
            <div className="flex flex-col sm:w-3/4 md:7/10 lg:w-3/5 xl:w-3/7 py-20">
                <h1 className="font-extrabold text-[73px]">One More Friend</h1>
                <h2 className="font-bold text-[56px]">Thousands More Fun!</h2>
                <p className="py-6">
                    Having a pet means you have more joy, a new friend, a happy 
                    person who will always be with you to have fun. We have 200+ 
                    different pets that can meet your needs!
                </p>
                <div className="flex flex-row gap-5">
                    <TransparentButton text="View Intro" icon="play"/>
                    <BlueButton text="Explore Now"/>
                </div> 
            </div>
        </div>
    )
}
export default Hero;