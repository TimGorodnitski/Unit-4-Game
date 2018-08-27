// initial health values
let rickHealth = 110;
let mortyHealth = 90;
let bethHealth = 80;
let jerryHealth = 75;

let rickAttack = 10;
let rickCounter = 5;
let mortyAttack = 10;
let mortyCounter = 5;
let bethAttack = 10;
let bethCounter = 5;
let jerryAttack = 10;
let jerryCounter = 5;

let myBaseAttack = 0;
let myCharAttack = 0;
let myCharHealth = 0;

let opponentHealth = 0;
let opponentCounter = 0;




// sets health text to initial health
// $("#rickHealth").text(rickHealth);
// $("#mortyHealth").text(mortyHealth);
// $("#bethHealth").text(bethHealth);
// $("#jerryHealth").text(jerryHealth);

// sets phase to character select
let stage = 0;

// hides other elements while selecting character
$(".stage1").hide();

// character and enemy select function
$(".character").on("click", function () {

    if (stage === 0) {

        myCharHealth = $(this).find('span').text();
        $(".stage1").show();
        $(".stage2").hide();
        $("#enemiesRemaining").append($(".character"));
        $("#myCharDiv").append(this);
        $("#enemiesRemainingText").text("Choose an Opponent");
        stage++;

    } else if (stage === 1) {


        opponentHealth = $(this).find('span').text();
        opponentCounter = 
        $("#defenderDiv").append(this);
        $(".stage2").show();
        $(".stage3").hide();

        stage++;

    }
});

$("#attackButton").on("click", function () {



    opponentHealth



});
















