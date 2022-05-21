//event to executes the script only after the page has loaded
window.onload = function event(){
    load();
}

var game = false;
var points = 0;

function load(){
    const startBtn = document.getElementById('start');
    const wall = document.querySelectorAll('.boundary:not(.example)');
    const endBtn =  document.getElementById('end');

    startBtn.addEventListener('mouseover',start);
    startBtn.addEventListener('click',resetPoints);

    document.getElementById('status').addEventListener('mouseover',cheating);
    document.getElementsByTagName('p')[0].addEventListener('mouseover',cheating);
    
    wall.forEach(item => {
        item.addEventListener('mouseover',youLost);
    })

    endBtn.addEventListener('mouseover',youWin)

}

//function when the user clicks on S
function start(){
    if (!game){
        game = true;
        //console.log(game);
        document.querySelectorAll('.boundary:not(.example)').forEach(item => {
            item.classList.remove('youlose');
        });
        
        document.getElementById("status").innerHTML = 'GO!!';
    }


}

//function when the user loses the game
function youLost(){
    if (game){
        document.querySelectorAll('.boundary:not(.example)').forEach(item => {
            item.classList.add('youlose');
        });

        points -=10;
        document.getElementById('status').innerText = `You Lost! -10pts Total: ${points}pts`;
        game = false;
    }
}

//function when the user wins the game
function youWin(){
    if (game){
        points += 5;
        document.getElementById('status').innerText = `You Win! +5pts Total: ${points}pts`;
        game = false;
    }
}

//function used in case of cheating
function cheating(){
    if (game){
        alert("Come on, man! Don't cheat. The game has been reset");
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        points = 0;
        game = false;      
    }

}

function resetPoints(){
    if (points){
        alert("Your points have been reset!");
        points = 0;
    }
}