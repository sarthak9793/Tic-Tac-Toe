import { useState } from "react"
import Box from "./Box"
import {winCheck, markBoardAtIndex, isFull} from "./utils"

export default function Board(){    
    const [moves, setMoves] = useState(new Array(9).fill(""))
    const [isMarked, setIsMarked] = useState(new Array(9).fill(false))
    const [currPlayer, setCurrPlayer] = useState(1)
    
    let isWinner = winCheck(moves)


    const updateBoard = (index) => {
        if(isMarked[index] === false && isWinner===false){
            const newMoves = markBoardAtIndex(index, currPlayer, moves, setCurrPlayer, isMarked, setIsMarked)
            setMoves(newMoves)
        }
    }
    const handleReset = () => {
        setMoves(new Array(9).fill(""))
        setIsMarked(new Array(9).fill(false))
        isWinner = false
        setCurrPlayer(1)
    }
    return(
        <div className="mt-7">
            <div className="mx-auto text-4xl text-center mb-24 bg-custom-text-bg-color w-64 p-2 rounded-md">
                Move: Player {currPlayer===1 ? "1" : "2"}
            </div>
            <div className="h-[400px] w-[400px] grid grid-cols-3 grid-rows-3 mx-auto">
                {moves.map((move,index)=>(<Box key={index} index={index} move={move} updateBoard={updateBoard}/>))}
            </div>
            <div className="mx-auto text-4xl text-center mt-4">
                {isWinner && <div className="bg-custom-won-color w-64 p-2 rounded-md mx-auto">Player {isWinner==="X" ? "1" : "2"} Won</div>}
            </div>
            <div className="mx-auto text-4xl text-center mt-4">
                {!isWinner && isFull(moves) && <div className="bg-custom-won-color w-36 p-2 rounded-md mx-auto">Draw</div>}
            </div>
            <div className="mx-auto text-2xl text-center mt-6">
                <button onClick={handleReset} className="bg-yellow-50">New Game</button>
            </div>
        </div>
    )
}