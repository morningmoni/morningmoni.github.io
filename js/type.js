var theater = new TheaterJS();
var words = [
	"Sometimes he is droll, but for most time he is silent.",
	"He is not interested in holiday and festival",
	"and usually work everyday,",
	"but not the whole day",
	"hence usually finishes before the deadline at ease.",
	"He is not interested in Japanese anime and sports events.",
	"He has some crash on coding and music.",
	"He plays the piano,",
	"and sings,",
	"and is quite obsessed.",
	"He enjoys doing exercises,",
	"mainly for feeling good when looking into the mirror at shower.",
	"Sometimes he goes jogging over rock music,",
	"for losing fat,",
	"though he is thin.",
	"He has a bad memory for trivial things,",
	"but not the important ones.",
	"He is both sensitive and numb.",
	"He loves nature",
	"and used to keep all kinds of animals that can be fed indoors,",
	"esp ants.",
	"He is timid in social conflict and life danger,",
	"but willing to help usually.",
	"You may count on him.",
	"He is independent",
	"and self motivated.",
	"He did various things during undergrad,",
	"ask him directly if you wanna know the details.",
	"He is both hesitant and discreet.",
    "Oh, one last thing",
	"He works mainly for fun."];

theater
    .describe("morningmoni", .8, "#morningmoni")
    .describe("guest", .9, "#guest");

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
    .write("morningmoni:Alan Yuning Mao", 400)
    .write("guest:How did you become his slave?", 400)
    .write("morningmoni:He created me. And I'm his partner, not slave.", 400)
    .write("guest:Like Ford and Bernard in Westworld?", 400)
    .write("morningmoni:Exactly.", 400, "guest:", meOrAlan, 5000, removemeOrAlan, intro)
    .write("guest:", 400)
theater.write(function () { theater.play(false); });

function meOrAlan()
{
    var yes = document.getElementById('chooseMe')
    yes.innerHTML = "<a class=\"btn btn-skin\" onclick=\"afterY()\">More about Alan</a>";
    var no = document.getElementById('chooseAlan')
    no.innerHTML = "<a class=\"btn btn-skin\" onclick=\"afterN()\">More about You</a>";
    
}

function intro()
{
    if (clicked == 1){
        theater    
            .write("guest:Mind telling me more about Alan?")
            .write("morningmoni:Thought you would be more interested in me.")
            .write("guest:I'm sorry...")
            .write("morningmoni:Doesn't matter")
            .write("morningmoni:You are not the first one", 1000)
            .write("morningmoni:He is a good guy")
            .write("morningmoni:I said that not just because he asked me to.")
            .write("guest:I see")
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
            .write("morningmoni:I live within this page.")
            .write("guest:I knew that.")
            .write("morningmoni:In my spare time, I hang out with friends from other sites")
            .write("morningmoni:Besides, I write code for Alan")
            .write("guest:Write code???")
            .write("morningmoni:Of course.")
            .write("morningmoni:Otherwise, how could Alan be so good at programming?")
            .write("morningmoni:I wrote this page too.")
            .write("guest:Like building your own house")
            .write("morningmoni:Sure", 400)
            .write("guest:")
            .write("morningmoni:In my opinion, Alan should be a musician")
            .write("morningmoni:I often listen to the songs that Alan recorded")
            .write("morningmoni:Like those you can find at this page")
            .write("morningmoni:He is talented", 1000, " but lazy")
            .write("morningmoni:and lacks practice", 2000)
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
        theater.write("morningmoni:Good. I'm having breakfast now.");
        theater.write("morningmoni:See you", 2000);
        theater.write("guest:See you", 2000);
    } 
    else if (clicked == 2){
        theater.write("guest:No, I didn't even notice the buttons", 2000);
        theater.write("morningmoni:Well, you're supposed to click the other button.")
                .write("morningmoni:But anyway, nice to meet you.")
                .write("guest:Nice to meet you too")
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

