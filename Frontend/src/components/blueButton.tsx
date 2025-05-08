type ButtonType = {
    text: string;
};

function BlueButton({text}: ButtonType){
    return (
        <div className="inline-block rounded-full bg-blue-950 text-white py-2.5 px-7 hover:cursor-pointer hover:bg-blue-900 transition"> 
         <p>{text}</p> 
        </div>
    )
}

export default BlueButton;