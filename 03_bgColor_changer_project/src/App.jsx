import { useState } from "react";
import ColorBox from "./components/ColorBox";

function App() {
    const [bgColor, setBgColor] = useState("#212121");

    function changeBgColor(color) {
        setBgColor(color);
    }

    return (
        <>
            <div
                className="w-screen h-screen"
                style={{ backgroundColor: bgColor }}
            ></div>
            <div className="flex justify-center gap-4 bg-white fixed bottom-10 left-5 right-5 rounded-3xl p-2">
                <ColorBox color="red" onClick={changeBgColor} />
                <ColorBox color="blue" onClick={changeBgColor} />
                <ColorBox color="green" onClick={changeBgColor} />
                <ColorBox color="yellow" onClick={changeBgColor} />
                <ColorBox color="teal" onClick={changeBgColor} />
                <ColorBox color="pink" onClick={changeBgColor} />
                <ColorBox color="purple" onClick={changeBgColor} />
                <ColorBox color="black" onClick={changeBgColor} />
                <ColorBox color="indigo" onClick={changeBgColor} />
                <ColorBox color="violet" onClick={changeBgColor} />
                <ColorBox color="orange" onClick={changeBgColor} />
            </div>
        </>
    );
}

export default App;
