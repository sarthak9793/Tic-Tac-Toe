export default function Box({move,index, updateBoard}){
    const handleClick = () => {
        updateBoard(index)
    }

    return(
        <div className="bg-custom-board-bg-color p-8 border-2 border-black flex justify-center align items-center text-white" onClick={handleClick}>
            <div className="text-9xl">
                {move}
            </div>
        </div>
    )
}