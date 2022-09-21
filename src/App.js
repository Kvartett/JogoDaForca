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
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letters(props){
    return (
        <li></li>
    )
}

export default function App(){
    return (
        <div className="content">
            <img src={gallow.status1}/>
            <button className="start">Escolher Palavra</button>
            <p className="word"></p>
            <ul>
                {alphabet.map((f, i) => <Letters key={i}/>)}
            </ul>
            <div className="kick">
                <p>Ja sei a palavra</p>
                <imput></imput>
                <button>Chutar</button>
            </div>
        </div>
    )
}