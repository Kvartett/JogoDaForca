import "./css/reset.css"
import "./css/style.css"
import status1 from "./assets/forca0.png"
import status2 from "./assets/forca1.png"
import status3 from "./assets/forca2.png"
import status4 from "./assets/forca3.png"
import status5 from "./assets/forca4.png"
import status6 from "./assets/forca5.png"
import status7 from "./assets/forca6.png"

const gallow = [status1, status2, status3, status4, status5, status6, status7]
const alphabet = ["A", "B", "c", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function Letters(props){
    return (
        <>
            <button className="letter">{props.index}</button>
        </>
    )
}

export default function App(){
    return (
        <div className="content">
            <div className="game">
                <img src={gallow[0]}/>
                <div className="keyword">
                    <button className="start">Escolher Palavra</button>
                    <p className="word">_ _ _ _ _</p>
                </div>
            </div>
            <div className="letters">
                <ul className="all-letters">
                    {alphabet.map((f, i) => <Letters key={i} index={f}/>)}
                </ul>
                <div className="kick">
                    <p>Já sei a palavra!</p>
                    <input></input>
                    <button>Chutar</button>
                </div>
            </div>
        </div>
    )
}