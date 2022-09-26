import React from "react"
import "./css/reset.css"
import "./css/style.css"
import words from "./words.js"
import status1 from "./assets/forca0.png"
import status2 from "./assets/forca1.png"
import status3 from "./assets/forca2.png"
import status4 from "./assets/forca3.png"
import status5 from "./assets/forca4.png"
import status6 from "./assets/forca5.png"
import status7 from "./assets/forca6.png"

function Letters(props){
    return (
        <>
            <button className="letter" onClick={conferLetter}>{props.index}</button>
        </>
    )
}

function random(){ 
	return Math.random() - 0.5; 
}

function RandomWord(props){
    return (
        <>
            <p className="letters">{props.index}</p>
        </>
    )
}

function conferLetter(){
    
}

export default function App(){
    const [wordArray, setWordArray] = React.useState([])
    const gallow = [status1, status2, status3, status4, status5, status6, status7]
    const alphabet = ["A", "B", "c", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    

    function startGame(){

        words.sort(random)
        const selectedWord = words[0];
        console.log("Foi aleatorio a palavra " + selectedWord)
        const newArray = selectedWord.split('')
        setWordArray(newArray)
        console.log(wordArray)
        RandomWord(wordArray);
    }

    return (
        <div className="content">
            <div className="game">
                <img src={gallow[0]}/>
                <div className="keyword">
                    <button onClick={startGame}>Escolher Palavra</button>
                    <div className="word">
                        {wordArray.map((f, i) => <RandomWord key={i} index={f}/>)}
                    </div>
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
