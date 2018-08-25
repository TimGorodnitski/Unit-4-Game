// initial health values
let rickHealth = 100;
let mortyHealth = 100;
let bethHealth = 100;
let jerryHealth = 100;


// sets phase to character select
let stage = 0;

// hides other elements while selecting character
$(".stage1").hide();


// sets health text to initial health
$("#rickHealth").text(rickHealth);
$("#mortyHealth").text(mortyHealth);
$("#bethHealth").text(bethHealth);
$("#jerryHealth").text(jerryHealth);



// character select function, appends clicked-on character to myCharDiv, ends choosingChar phase.
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
        $("#defenderDiv").append(this);
        $("#currentCharacterText").show();
        $("#myCharDiv").show();
        $("#enemiesRemainingText").hide();
        $("#enemiesRemaining").hide();
        stage++;
        
    };
});
















