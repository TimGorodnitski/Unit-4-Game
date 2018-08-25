// initial health values
let rickHealth = 100;
let mortyHealth = 100;
let bethHealth = 100;
let jerryHealth = 100;

let rickAttack = 10;
let mortyAttack = 10;
let bethAttack = 10;
let jerryAttack = 10;


let myBaseAttack = 0;
let myCharAttack = 0;






// sets health text to initial health
$("#rickHealth").text(rickHealth);
$("#mortyHealth").text(mortyHealth);
$("#bethHealth").text(bethHealth);
$("#jerryHealth").text(jerryHealth);

// sets phase to character select
let stage = 0;

// hides other elements while selecting character
$(".stage1").hide();

// character and enemy select function
$(".character").on("click", function () {

    if (stage === 0) {

        $(".stage1").show();
        $(".stage2").hide();
        $("#enemiesRemaining").append($(".character"));
        $("#myCharDiv").append(this);
        $("#enemiesRemainingText").text("Choose an Opponent");
        stage++;

    } else if (stage === 1) {
        $(".stage2").show();
        $(".stage3").hide();
        $("#defenderDiv").append(this);
        stage++;
        
    }
});

$("#attackButton").on("click", function(){




});
















