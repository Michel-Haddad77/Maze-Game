//event to executes the script only after the page has loaded
window.onload = function event(){
    load();
}

var game = false;
var points = 0;

function load(){
    const startBtn = document.getElementById('start');
    const wall = document.querySelectorAll('.boundary');
    const endBtn =  document.getElementById('end');

    startBtn.addEventListener('click',start);

    wall.forEach(item => {
        item.addEventListener('mouseover',youLost)
    })

    endBtn.addEventListener('mouseover',youWin)
}

//function when the user clicks on S
function start(){
    if (!game){
        game = true;
        console.log(game);
        document.querySelectorAll('.boundary').forEach(item => {
            item.classList.remove('youlose');
        });
        
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
    }

}

//function when the user loses the game
function youLost(){
    if (game){
        document.querySelectorAll('.boundary').forEach(item => {
            item.classList.add('youlose');
        });

        points -=10;
        document.getElementById('status').innerText = `You Lost! -10pts Total: ${points}pts`;
        game = false;
    }
}

function youWin(){
    if (game){
        points += 5;
        document.getElementById('status').innerText = `You Win! +5pts Total: ${points}pts`;
        game = false;
    }
}
