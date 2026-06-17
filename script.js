const buttons = document.querySelectorAll('.btn') 
const title = document.querySelector('.game-title')

function Gameboard(){
    let board = [];
    const rows = 3;
    const columns = 3;

    let value = 0;

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i][j] = value;
        }   
    }

    const getBoard = () => board;

    function addValue (row,column,val, button){
        if(board[row][column] === 'x' || board[row][column] === 'o'){
            title.textContent = 'hey'
        } else{
             button.textContent = val
             button.className = 'button'
            board[row][column] = val;
        }
    }


    function checkWin(){
        let firstArr = board[0]
        let secondArr = board[1]
        let thirdArr = board[2]
        if(firstArr[0] === 'x' && firstArr[1] === 'x' && firstArr[2] === 'x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(firstArr[0] === 'o' && firstArr[1] === 'o' && firstArr[2] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true 
         } else if(secondArr[0] === 'x' && secondArr[1] === 'x' && secondArr[2] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(secondArr[0] === 'o' && secondArr[1] === 'o' && secondArr[2] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        }else if(thirdArr[0] === 'x' && thirdArr[1] === 'x' && thirdArr[2] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(thirdArr[0] === 'o' && thirdArr[1] === 'o' && thirdArr[2] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        }else if(board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] ==='x'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } else if(board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o'){
            title.textContent = `X wins ${String.fromCodePoint(0x1F389)}`
            return true
        } 
    }

    function checkBoardFull (){
        let firstRow = board[0]
        let secondRow = board[1]
        let thirRow = board[2]
        let firstArrFull = firstRow.filter(item => item === 'x' || item === 'o').length;
        let secondArrFull = secondRow.filter(item => item === 'x' || item === 'o').length;
        let thirdArrFull = thirRow.filter(item => item === 'x' || item === 'o').length;
        
        if(firstArrFull + secondArrFull + thirdArrFull === 9){
            title.textContent = 'The board is full, it is a tie!';
        }
    }

   return {addValue,getBoard,checkWin,checkBoardFull};
}

function playGame(){
    let board = Gameboard()
    let token = 'x'
        const obj = {
            firstCase : [0,0],
            secondCase: [0,1],
            thirdCase : [0,2],
            fourthCase: [1,0],
            fifthCase: [1,1],
            sixthCase: [1,2],
            seventhCase: [2,0],
            eigthCase: [2,1],
            ninthCase: [2,2]
        }
    buttons.forEach(btn => btn.addEventListener('click', (e) =>{
            let btb = e.target.id
            let row = obj[btb][0]
            let col = obj[btb][1]
            if(board.getBoard()[row][col] === 'x' 
            || board.getBoard()[row][col] === 'o'){
                title.textContent = `The ${btb} is occupied`
            } else if (board.checkWin()){
                title.textContent = 'bravo'
            }else{
                if(token === 'x' ){
                    title.textContent = `${token} Plays`
                    board.addValue(row, col, token, btn)
                    token = 'o'  
                } else if(token === 'o' ){
                    title.textContent = `${token} plays`
                    board.addValue(row, col, token, btn)
                    token = 'x'
                }
        }   
        board.checkBoardFull()
        board.checkWin()
        
    }))

    }



playGame()


