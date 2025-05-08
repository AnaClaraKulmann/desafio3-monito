type ButtonType = {
    text: string;
    icon?: "play" | "arrow";
};

const iconType: Record<string, string> = {
    play: "src/assets/IconPlay.svg",
    arrow: "src/assets/IconRightArrow.svg",
};

function TransparentButton({text, icon}: ButtonType){
    return (
        <div className="flex flex-row gap-1 rounded-full border border-blue-950 bg-transparent text-blue-950 py-2.5 px-7 hover:cursor-pointer hover:bg-white transition"> 
        <p>{text}</p> 
        {icon && <img src={iconType[icon]} alt={icon} className="w-6 h-6" />}
        </div>
    );
}

export default TransparentButton;