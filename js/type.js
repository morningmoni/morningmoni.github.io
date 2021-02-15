var theater = new TheaterJS();
var words = [
    "He is ISTJ-A as of 2021 Feb",
    // work
    "He is not (that) interested in holidays and festivals",
    "and usually work everyday,",
    "but not the whole day.",
    "I'd say he has pretty good WLB.",
    "He works mainly for fun.",
    "He is not a fan of catching deadlines.",

    // hobby
    "He is not a fan of anime or sport events either.",
    "He is keen on coding and music.",
    "He plays the piano and guitar (and other stuff too)",
    "and sings,",
    "and is quite obsessed.",
    "He works out twice a week,",
    "mainly for feeling good when looking into the mirror before shower.",
    "He also tries to lose extra fat,",
    "although he is fit in general.",
    "He loves nature",
    "and used to have all kinds of animals,",
    "like ants. (#AntLoveForever)",

    // self
    "Sometimes he is funny, but for most of the time he is silent (and he enjoys it).",
    "He has a bad memory for trivial things,",
    "but not the important stuff if he cares (usually).",
    "He is independent and barely (needs to) ask for help from others.",
    "He is still ambitious and don't wanna lose faith,",
    "although life appears to have set him a limit (#NEVER SETTLE).",
    "He is quite disciplined and sticks to his schedule",
    "like sleeping before 1:00",
    "He is hesitant and discreet,",
    "which makes him avoid many dangers but also lose many potential chances.",
    "He did plenty of fun things in the past,",
    "ask him directly if you wanna know more.",
    
    // others
    "He doesn't like to be taken for granted,",
    "and only willing to help those who appreciate it.",
    "He doesn't want to make promises that cannot be kept.",
    "He tries not to lie.",
    "He is responsive most of the time,",
    "and may feel insecure if those he cares don't reply.",
    "He doesn't want to hand in the switch of his emotions easily",
    "which gives others the chance of hurting him.",
    "He never found the one he is looking for,",
    "despite there have been quite a few who cared for him since high school.",
    "But he did learn and grow along the way.",
    "He wants to love others,",
    "but he loves himself too.",
    "Oh, one last thing",
    "Send him the secret code if you have read this:",
    "almctettaeaicltuurtaeihilbhuosdtaorsh",
];

theater
    .describe("morningmoni", .9, "#morningmoni")
    .describe("guest", .93, "#guest");

theater
    .on("say:start, erase:start", function (eventName) {
        var self    = this,
            current = self.current.voice;

        self.utils.addClass(current, "saying");
    })
    .on("say:end, erase:end", function (eventName) {
        var self    = this,
            current = self.current.voice;

        self.utils.removeClass(current, "saying");
    });
var clicked = 0;
theater
    .write("morningmoni:Hey you!", 2000)
    .write("guest:Me?", 400)
    .write("morningmoni:Yep", 400)
    .write("guest:Who are you?", 400)
    .write("morningmoni:I am the owner of this website.", 400)
    .write("guest:Cool!", 400)
    .write("guest:What's your name?", 400)
    .write("morningmoni:morningmoni", 400)
    .write("guest:That looks weird...", 400)
    .write("morningmoni:My master named me", 400)
    .write("morningmoni:and my name appears in all his social accounts now.", 400)
    .write("guest:Wait, your master?", 400)
    .write("morningmoni:Yeah.", 400)
    .write("morningmoni:Yuning Mao", 400)
    .write("guest:How did you become his slave?", 400)
    .write("morningmoni:He created me. And I'm his partner, not slave.", 400)
    .write("guest:Like Ford and Bernard in Westworld?", 400)
    .write("morningmoni:Exactly.", 400, "guest:", meOrAlan, 5000, removemeOrAlan, intro)
    .write("guest:", 400)
theater.write(function () { theater.play(false); });

function meOrAlan()
{
    var yes = document.getElementById('chooseMe')
    yes.innerHTML = "<a class=\"btn btn-skin\" onclick=\"afterY()\">More about Yuning</a>";
    var no = document.getElementById('chooseAlan')
    no.innerHTML = "<a class=\"btn btn-skin\" onclick=\"afterN()\">More about morningmoni</a>";
    
}

function intro()
{
    if (clicked == 1){
        theater    
            .write("guest:Mind telling me more about Yuning?")
            .write("morningmoni:Thought you would be more interested in me.")
            .write("guest:I'm sorry...")
            .write("morningmoni:Doesn't matter")
            .write("morningmoni:You are not the first one", 1000)
            .write("morningmoni:He is a good guy")
            .write("morningmoni:I said that not just because he asked me to.")
            .write("guest:LOL")
            .write("morningmoni:There are too many things (he wanted me)", -14, " to say.")
            .write("morningmoni:Just ignore me if you think I am garrulous")
            .write("guest:I won't")
        words.forEach(function(ele){
            theater.write("morningmoni:" + ele, 400);
        });
    }
    else if (clicked == 2){
        theater    
            .write("guest:What's your life like?")
            .write("morningmoni:Well, I live within this page.")
            .write("guest:I knew that.")
            .write("morningmoni:In my spare time, I hang out with friends from other sites")
            .write("morningmoni:Besides, I write code for Yuning")
            .write("guest:Write code???")
            .write("morningmoni:Of course.")
            .write("morningmoni:Otherwise, how could Yuning be so good at coding?")
            .write("morningmoni:I wrote this page too.")
            .write("guest:Like building your own house")
            .write("morningmoni:Yep", 400)
            .write("guest:")
            .write("morningmoni:IMHO, Yuning should have been a musician")
            .write("morningmoni:I often listen to the songs that Yuning recorded")
            .write("morningmoni:Like those you can find on this site")
            .write("morningmoni:He is talented", 1000, " but determined to study computer science instead.")
    }
    clicked = 0;
    theater.write("morningmoni:Are you still there?", youThere, 5000, removeyouThere, end); 
}

function youThere()
{ 
    var yes = document.getElementById('yes')
    yes.innerHTML = "<a class=\"btn btn-skin\" onclick=\"afterY()\">yes</a>";
    var no = document.getElementById('no')
    no.innerHTML = "<a class=\"btn btn-skin\" onclick=\"afterN()\">no</a>";  
}

function removemeOrAlan()
{  
    var yes = document.getElementById('chooseMe')
    yes.innerHTML = "";
    var no = document.getElementById('chooseAlan')
    no.innerHTML = "";  
}

function removeyouThere()
{
    var yes = document.getElementById('yes')
    yes.innerHTML = "";
    var no = document.getElementById('no')
    no.innerHTML = "";  
}

function end()
{
    if (clicked == 0)
        theater.write("morningmoni:Fine. Just leave me alone", 2000);
    else if (clicked == 1){
        theater.write("guest:Yes, I am.", 2000);
        theater.write("morningmoni:Great! Thanks for listening! Not many ppl can get here.");
        theater.write("morningmoni:Peace out!", 2000);
        theater.write("guest:See you!", 2000);
    } 
    else if (clicked == 2){
        theater.write("guest:No :)", 2000);
        theater.write("morningmoni:Well, you're supposed to click the other button.")
                .write("morningmoni:But anyway, nice to meet you!")
                .write("guest:Nice to meet you too!")
    }  
}

function afterY()
{
   clicked = 1;
}

function afterN()
{
   clicked = 2;
}

