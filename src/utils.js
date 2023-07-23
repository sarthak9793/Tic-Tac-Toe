const winCheck = (moves) => {
    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let winCombination of winCombinations){
        const [a,b,c] = winCombination
        if(moves[a]!=="" && moves[a]===moves[b] && moves[b]===moves[c])
            return moves[a]
        }
    return false
}
const markBoardAtIndex = (index, currPlayer, moves, setCurrPlayer, isMarked, setIsMarked) => {
    const newMoves = moves.slice()
    newMoves[index] = currPlayer===1 ? "X" : "O"
    setCurrPlayer(currPlayer===1 ? 2 : 1)
    const newIsMarked = isMarked.slice()
    newIsMarked[index] = true
    setIsMarked(newIsMarked)
    return newMoves
}
const isFull = (moves) => {
    // const result
    // moves.forEach((move)=>{
    //     if(move==="")
    //         result = false
    // })
    return moves.every((move)=>(move==="X" || move==="O"))
    
}
export {winCheck, markBoardAtIndex, isFull}