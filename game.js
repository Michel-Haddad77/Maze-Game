window.onload = function event(){
    load();
}
var game = false;


function load(){
    const wall = document.querySelectorAll('.boundary');
    const startBtn = document.getElementById('start');
    const status = document.getElementById("status");

    startBtn.addEventListener('click',start);
    wall.forEach(item => {
        item.addEventListener('mouseover',youLost)
    })
}

//function when the user clicks on S
function start(){
    if (!game){
        game = true;
        console.log(game);
        document.querySelectorAll('.boundary').forEach(item => {
            item.classList.remove('youlose');
        });
    }

}

//function when the user loses the game
function youLost(){
    if (game){
        document.querySelectorAll('.boundary').forEach(item => {
            item.classList.add('youlose');
        });
        game = false;
    }
}
