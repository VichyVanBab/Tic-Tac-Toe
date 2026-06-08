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

    function addValue (row,column,val){
        let isCheckWin = checkWin() === 'X win' || checkWin() === 'O win';
        if(isCheckWin){
            console.log('There\'s already a winner');
        } else{
            if(board[row][column] === 'x' || board[row][column] === 'o'){
                console.error('It\'s already taken. choose another place');
            } else{
                board[row][column] = val;
            } 
        }
    }

    function checkWin(){
        let firstArr = board[0]
        let secondArr = board[1]
        let thirdArr = board[2]
        if(firstArr[0] === 'x' && firstArr[1] === 'x' && firstArr[2] === 'x'){
            return `X win`
        } else if(firstArr[0] === 'o' && firstArr[1] === 'o' && firstArr[2] === 'o'){
            return 'O win'
        } else if(secondArr[0] === 'x' && secondArr[1] === 'x' && secondArr[2] ==='x'){
            return 'X win'
        } else if(secondArr[0] === 'o' && secondArr[1] === 'o' && secondArr[2] === 'o'){
            return 'O win'
        }else if(thirdArr[0] === 'x' && thirdArr[1] === 'x' && thirdArr[2] ==='x'){
            return 'X win'
        } else if(thirdArr[0] === 'o' && thirdArr[1] === 'o' && thirdArr[2] === 'o'){
            return 'O win'
        }else if(board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] ==='x'){
            return 'X win'
        } else if(board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o'){
            return 'O win'
        } else if(board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] ==='x'){
            return 'X win'
        } else if(board[0][1] === 'o' && board[1][1] === 'o' && baord[2][1] === 'o'){
            return 'O win'
        } else if(board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] ==='x'){
            return 'X win'
        } else if(board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o'){
            return 'O win'
        } else if(board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] ==='x'){
            return 'X win'
        } else if(board[0][0] === 'o' && boar[1][1] === 'o' && board[2][2] === 'o'){
            return 'O win'
        } else if(board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] ==='x'){
            return 'X win'
        } else if(board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o'){
            return 'O win'
        } else if(board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] ==='x'){
            return 'X win'
        } else if(board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o'){
            return 'O win'
        } 
    }

    function checBoardFull (){
        let firstRow = board[0]
        let secondRow = board[1]
        let thirRow = board[2]
        let firstArrFull = firstRow.filter(item => item === 'x' || item === 'o').length;
        let secondArrFull = secondRow.filter(item => item === 'x' || item === 'o').length;
        let thirdArrFull = thirRow.filter(item => item === 'x' || item === 'o').length;

        if(firstArrFull + secondArrFull + thirdArrFull === 9){
            return 'The board if full. It is a tie! Good game'
        }
    }
    addValue(0,0,'x')
   addValue(0,1,'x')
   addValue(0,2,'x')

    
    return {addValue,getBoard,checkWin,checBoardFull};
}

const board = Gameboard();

board.addValue(1,1,'o')

console.table(board.getBoard())
console.log(board.getBoard())
console.log(board.checkWin())
console.log(board.checBoardFull())

