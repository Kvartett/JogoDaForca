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

const gallow = [status1, status2, status3, status4, status5, status6, status7]
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function App(){
    const [chosedWord, setChosedWord] = React.useState([])
    const [desableInput, setDesableInput] = React.useState(true)
    const [error, setError] = React.useState(0)
    const [gameWord, setGameWord] = React.useState([])
    const [usedLetters, setUsedLetters] = React.useState(alphabet)
    const [specialLetters, setSpecialLetters] = React.useState("")
    const [kick, setKick] = React.useState("")
    const [wordColor, setWordColor] = React.useState("black")
    

    function startGame(){
        setDesableInput(false)
        setUsedLetters([])
        random()
        setError(0)
        setWordColor("black")
        setKick("")
    }

    function finishGame(){
        setDesableInput(true)
        setUsedLetters(alphabet)
        setKick("")
        setGameWord(chosedWord)
    }

    function random(){ 
        const x = Math.floor(Math.random() * words.length)
        const word = words[x]
        const wordArray = word.split("")
        setChosedWord(wordArray)

        let trace = []
        wordArray.forEach((letter) => trace.push(" _"))
        setGameWord(trace)

        const newSpecialWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        setSpecialLetters(newSpecialWord)
    }

    function letterClicked(l){
        setUsedLetters([...usedLetters, l])
        if (specialLetters.includes(l)){
            correctLetter(l)
        } else {
            wrongLetter(l)
        }
    }

    function correctLetter(l){
        const newWordLetter = [...gameWord]
        chosedWord.forEach((letra, i) => {
            if(specialLetters[i] === l){
                newWordLetter[i] = letra
            }
        })
        setGameWord(newWordLetter)

        if(!newWordLetter.includes(" _")){
            setWordColor("green")
            finishGame()
        }
    }

    function wrongLetter(l){
        const newQuantityErrors = error + 1
        setError(newQuantityErrors)

        if(newQuantityErrors === 6){
            setWordColor("red")
            finishGame()
        }
    }

    function tryWord(){
        let chosedTryWord = ""
        chosedWord.forEach((l) => chosedTryWord += l)
        if (kick === chosedTryWord){
            setWordColor("green")
        } else {
            setWordColor("red")
            setError(6)
        }
        finishGame()
    }

    return (
        <div className="content">
            <div className="game">
                <img src={gallow[error]}/>
                <div className="keyword">
                    <button onClick={startGame}>Escolher Palavra</button>
                    <h1 className={wordColor}>{gameWord}</h1>
                </div>
            </div>
            <div className="letters">
                <ul className="all-letters">
                    {alphabet.map((letter) => (
                        <button className="letter" 
                        onClick={() => letterClicked(letter)}
                        disabled={usedLetters.includes(letter)} 
                        key={letter}>{letter}</button>
                    ))}
                </ul>
                <div className="kick">
                    <p>Já sei a palavra!</p>
                    <input disabled={desableInput} value={kick} onChange={(e) => setKick(e.target.value)}/>
                    <button onClick={tryWord}>Chutar</button>
                </div>
            </div>
        </div>
    )
}