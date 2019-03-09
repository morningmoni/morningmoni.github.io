var theater = new TheaterJS();
var words = [
	"Sometimes he is humorous, but for most time he is silent (bc he likes to be).",
	"He is not interested in holidays and festivals",
	"and usually work everyday,",
	"but not the whole day",
	"hence usually finishes before the deadline at ease.",
	"He is not a fun of Japanese anime and sport events.",
	"He has some crash on coding and music.",
	"He plays the piano and guitar",
	"and sings,",
	"and is quite obsessed.",
	"He works out,",
	"mainly for feeling good when looking into the mirror at shower.",
	"Sometimes he goes jogging over rock music,",
	"for losing fat,",
	"though he is thin.",
	"He has a bad memory for trivial things,",
	"but not the important stuff.",
	"He is both sensitive and numb.",
	"He loves nature",
	"and used to keep all kinds of animals that can be fed indoors,",
	"esp ants. (#Ant Love Forever)",
	"He is timid in social conflict and life danger,",
	"but willing to help usually.",
	"You may count on him.",
	"He is independent",
	"and self motivated.",
	"He did plenty of fun things during undergrad,",
	"ask him directly if you wanna know the details.",
	"He is both hesitant and discreet.",
    "Oh, one last thing",
	"He works mainly for fun."];

theater
    .describe("words", .8, "#words");

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
    .write("words:Hey you!", 2000)
theater.write(function () { theater.play(false); });


