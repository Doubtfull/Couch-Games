let Theme = document.getElementById("Theme");
let sidebarbtn = document.getElementById("sidebarbtn");
let searchBar = document.getElementById("searchBar");
let all = document.getElementById("all");
let adventure = document.getElementById("adventure");
let multiplayer = document.getElementById("multiplayer");
let singleplayer = document.getElementById("singleplayer");
let openworld = document.getElementById("openworld");
let roguelike = document.getElementById("roguelike");
let strategy = document.getElementById("strategy");
let indie = document.getElementById("indie");
let fighting = document.getElementById("fighting");
let sports = document.getElementById("sports");
let shooter = document.getElementById("shooter");
let games = [];
let gamesToShow = [];

const allGenres = [
    "all",
    "adventure",
    "multiplayer",
    "singleplayer",
    "openworld",
    "roguelike",
    "strategy",
    "indie",
    "fighting",
    "sports",
    "shooter"
];
function genreDefaultColour() {
    allGenres.forEach(genre => {
        const element = document.getElementById(genre);
        element.classList.remove("active");
    });
}
const allGames = [
    "The Legend Of Zelda: Breath of the Wild",
    "Lethal Company",
    "Hollow Knight",
    "Keyboard Warriors",
    "Persona 5 Royal",
    "Sea of Thieves",
    "Bloons TD 6",
    "Goat Simulator 3",
    "Gangbeasts",
    "Monster Hunter World",
    "Palworld",
    "Tom Clancy's Rainbow Six Siege",
    "Super Smash Bros. Ultimate",
    "Teken 8",
    "Tony Hawk's Pro Skater 1 + 2",
    "Arms",
    "Dead Cells",
    "Red Dead Redemption 2",
    "Microsoft Flight Simulator",
    "Dead by Daylight",
    "Hogwarts Legacy",
    "Minecraft",
    "Brawlhalla",
    "Fire Emblem: Three Houses",
    "Slay the Spire",
    "Persona 3 Reload",
    "Forza Horizon 5",
    "Outer Worlds",
    "Survive",
    "Balatro"
];


function genreSelect() {
    allGames.forEach(game => {
        const element = document.getElementById(game);
        if (gamesToShow.includes(game)) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });
}

Theme.onclick = function () {
    document.body.classList.toggle("light_mode");
    document.body.classList.toggle("main-lightmode");
    document.body.classList.toggle("side-lightmode");
    
    if (document.body.classList.contains("light_mode")) {
        Theme.src = "Icons/Cresent Icon.png";
    } else {
        Theme.src = "Icons/Sun Icon.png";
    }
}

sidebarbtn.onclick = function sidebarbtn() {
    if (document.getElementById("sidebar").style.width === "250px") {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "20px";
        document.getElementById("header").style.left = "0px";
        document.getElementById("sidebar").style.paddingLeft = "0px";
        document.getElementById("sidebar").style.paddingRight = "0px";
    } else {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("sidebar").style.paddingLeft = "10px";
        document.getElementById("sidebar").style.paddingRight = "15px";
        document.getElementById("main").style.marginLeft = "300px";
        document.getElementById("header").style.left = "280px";
    }
}

for (let i = 0; i < document.getElementById("catalogue").childElementCount; i++) {
    let game = document.getElementById("catalogue").children.item(i)

    games.push(game)
}
searchBar.onkeyup = (e) => {
    let search = searchBar.value

    games.forEach(game => {
        if (game.id.toLowerCase().includes(search.toLowerCase()) && game.hidden) {
            game.hidden = false
            
        } else if (!game.id.toLowerCase().includes(search.toLowerCase()) && !game.hidden) {
            game.hidden = true
        }
    })
}

all.classList.add("active");
all.onclick = function all() {
    allGames.forEach(game => {
        document.getElementById(game).classList.remove("hidden");
    });

    genreDefaultColour();
    document.getElementById("all").classList.add("active");
}


adventure.onclick = function adventure() {
    gamesToShow = [
        "The Legend Of Zelda: Breath of the Wild",
        "Hollow Knight",
        "Sea of Thieves",
        "Monster Hunter World",
        "Palworld",
        "Dead Cells",
        "Red Dead Redemption 2",
        "Hogwarts Legacy",
        "Minecraft",
        "Outer Worlds"
    ];
    
    genreSelect();

    genreDefaultColour();
    document.getElementById("adventure").classList.add("active");
}

multiplayer.onclick = function multiplayer() {
    gamesToShow = [
        "Lethal Company",
        "Sea of Thieves",
        "Bloons TD 6",
        "Goat Simulator 3",
        "Gangbeasts",
        "Monster Hunter World",
        "Palworld",
        "Tom Clancy's Rainbow Six Siege",
        "Super Smash Bros. Ultimate",
        "Arms",
        "Microsoft Flight Simulator",
        "Dead by Daylight",
        "Minecraft",
        "Brawlhalla",
        "Forza Horizon 5"
    ];

    genreSelect();
    
    genreDefaultColour();
    document.getElementById("multiplayer").classList.add("active");
}

singleplayer.onclick = function singleplayer() {
    gamesToShow = [
        "The Legend Of Zelda: Breath of the Wild",
        "Hollow Knight",
        "Keyboard Warriors",
        "Persona 5 Royal",
        "Monster Hunter World",
        "Super Smash Bros. Ultimate",
        "Teken 8",
        "Tony Hawk's Pro Skater 1 + 2",
        "Arms",
        "Dead Cells",
        "Red Dead Redemption 2",
        "Microsoft Flight Simulator",
        "Hogwarts Legacy",
        "Minecraft",
        "Fire Emblem: Three Houses",
        "Slay the Spire",
        "Persona 3 Reload",
        "Forza Horizon 5",
        "Outer Worlds",
        "Survive",
        "Balatro"
    ];

    genreSelect();

    genreDefaultColour();
    document.getElementById("singleplayer").classList.add("active");
}

openworld.onclick = function openworld() {
    gamesToShow = [
        "The Legend Of Zelda: Breath of the Wild",
        "Sea of Thieves",
        "Goat Simulator 3",
        "Monster Hunter World",
        "Palworld",
        "Red Dead Redemption 2",
        "Hogwarts Legacy",
        "Minecraft",
        "Forza Horizon 5",
        "Outer Worlds"
    ];

    genreSelect();

    genreDefaultColour();
    document.getElementById("openworld").classList.add("active");
}

roguelike.onclick = function roguelike() {
    gamesToShow = [
        "Dead Cells",
        "Slay the Spire",
        "Balatro"
    ];

    genreSelect();

    genreDefaultColour();
    document.getElementById("roguelike").classList.add("active");
}

strategy.onclick = function strategy() {
    gamesToShow = [
        "Bloons TD 6",
        "Fire Emblem: Three Houses",
        "Slay the Spire",
        "Balatro"
    ];

    genreSelect();

    genreDefaultColour();
    document.getElementById("strategy").classList.add("active");
}

indie.onclick = function indie() {
    gamesToShow = [
        "Lethal Company",
        "Hollow Knight",
        "Keyboard Warriors",
        "Goat Simulator 3",
        "Gangbeasts",
        "Palworld",
        "Dead Cells",
        "Brawlhalla",
        "Slay the Spire",
        "Survive",
        "Balatro"
    ];
    
    genreSelect();

    genreDefaultColour();
    document.getElementById("indie").classList.add("active");
}

fighting.onclick = function fighting() {
    gamesToShow = [
        "Super Smash Bros. Ultimate",
        "Teken 8",
        "Arms"
    ];

    genreSelect();

    genreDefaultColour();
    document.getElementById("fighting").classList.add("active");
}

sports.onclick = function sports() {
    gamesToShow = [
        "Tony Hawk's Pro Skater 1 + 2",
        "Arms",
        "Forza Horizon 5"
    ];

    genreSelect();

    genreDefaultColour();
    document.getElementById("sports").classList.add("active");
}

shooter.onclick = function shooter() {
    gamesToShow = [
        "Sea of Thieves",
        "Tom Clancy's Rainbow Six Siege",
        "Red Dead Redemption 2",
        "Outer Worlds",
        "Survive"
    ];

    genreSelect();
    
    genreDefaultColour();
    document.getElementById("shooter").classList.add("active");
}