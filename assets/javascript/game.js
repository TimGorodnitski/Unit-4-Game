// initial stat values
let rickHealth = 110;
let rickAttack = 10;
let rickDefense = 15;

let mortyHealth = 90;
let mortyAttack = 10;
let mortyDefense = 15;

let bethHealth = 80;
let bethAttack = 10;
let bethDefense = 10;

let jerryHealth = 75;
let jerryAttack = 10;
let jerryDefense = 5;

let myBaseAttack = 0;
let myCharAttack = 0;
let myCharHealth = 0;
let attackCount = 1;
let killCount = 0;

let opponentHealth = 0;
let opponentDefense = 0;


$("#gameover").hide();
$("#winscreen").hide();

// // sets text to initial values
$("#rickHealth").text(rickHealth);
$("#mortyHealth").text(mortyHealth);
$("#bethHealth").text(bethHealth);
$("#jerryHealth").text(jerryHealth);

$("#rickAttack").text(rickAttack);
$("#mortyAttack").text(mortyAttack);
$("#bethAttack").text(bethAttack);
$("#jerryAttack").text(jerryAttack);

$("#rickDefense").text(rickDefense);
$("#mortyDefense").text(mortyDefense);
$("#bethDefense").text(bethDefense);
$("#jerryDefense").text(jerryDefense);





// sets phase to character select
let stage = 0;

// hides other elements while selecting character
$(".stage1").hide();

// character and enemy select function
$(".character").on("click", function () {

    if (stage === 0) {

        myCharHealth = $(this).find("span.charHealth").text();
        myBaseAttack = $(this).find("span.charAttack").text();
        myCharAttack = $(this).find("span.charAttack").text();
        $(this).addClass("myChar");
        $(".stage1").show();
        $(".stage2").hide();
        $("#enemiesRemaining").append($(".character"));
        $("#myCharDiv").append(this);
        $("#enemiesRemainingText").text("Choose an Opponent");
        stage++;

    } else if (stage === 1) {


        opponentHealth = $(this).find('span.charHealth').text();
        opponentDefense = $(this).find('span.charDefense').text();
        $(this).addClass("myOpp");
        $("#defenderDiv").append(this);
        $(".stage2").show();
        $(".stage3").hide();
        stage++;

    }
});

$("#attackButton").on("click", function () {

    $(".console1").text("You attacked for " + myCharAttack + " damage!")

    opponentHealth -= myCharAttack;

    $(".myOpp").find('span.charHealth').text(opponentHealth);


    if (opponentHealth <= 0) {
        killCount++;
        $("#enemiesRemainingText").text("Your Opponent Died! Choose Another!");
        $(".myOpp").remove();
        stage = 1;
        $(".stage2").hide();
        $(".stage4").show();
        $(".console1").text("Click Attack to Begin!");
        $(".console2").text("");
        if (killCount === 3) {
            $("#gameDiv").hide();
            $("#winscreen").show();
        };

    };


    if (opponentHealth >= 0) {
        myCharHealth -= opponentDefense;
        $(".console2").text("Your opponent defended for " + opponentDefense + " damage!")
    };



    if (myCharHealth <= 0) {
        $("#gameDiv").hide();
        $("#gameover").show();
    };
    $(".myChar").find('span.charHealth').text(myCharHealth);
    attackCount++;
    myCharAttack = myBaseAttack * attackCount;
    $(".myChar").find('span.charAttack').text(myCharAttack);


});
















