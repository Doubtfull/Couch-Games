let Theme = document.getElementById("Theme");
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

let sidebarbtn = document.getElementById("sidebarbtn");
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

let searchBar = document.getElementById("searchBar")
let games = []
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

let all = document.getElementById("all");
all.classList.add("active");
all.onclick = function all() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.remove("hidden");
    document.getElementById("Lethal Company").classList.remove("hidden");
    document.getElementById("Hollow Knight").classList.remove("hidden");
    document.getElementById("Keyboard Warriors").classList.remove("hidden");
    document.getElementById("Persona 5 Royal").classList.remove("hidden");
    document.getElementById("Sea of Thieves").classList.remove("hidden");
    document.getElementById("Bloons TD 6").classList.remove("hidden");
    document.getElementById("Goat Simulator 3").classList.remove("hidden");
    document.getElementById("Gangbeasts").classList.remove("hidden");
    document.getElementById("Monster Hunter World").classList.remove("hidden");
    document.getElementById("Palworld").classList.remove("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.remove("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.remove("hidden");
    document.getElementById("Teken 8").classList.remove("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.remove("hidden");
    document.getElementById("Arms").classList.remove("hidden");
    document.getElementById("Dead Cells").classList.remove("hidden");
    document.getElementById("Red Dead Redemption 2").classList.remove("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.remove("hidden");
    document.getElementById("Dead by Daylight").classList.remove("hidden");
    document.getElementById("Hogwarts Legacy").classList.remove("hidden");
    document.getElementById("Minecraft").classList.remove("hidden");
    document.getElementById("Brawlhalla").classList.remove("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.remove("hidden");
    document.getElementById("Slay the Spire").classList.remove("hidden");
    document.getElementById("Persona 3 Reload").classList.remove("hidden");
    document.getElementById("Forza Horizon 5").classList.remove("hidden");
    document.getElementById("Outer Worlds").classList.remove("hidden");
    document.getElementById("Survive").classList.remove("hidden");
    document.getElementById("Balatro").classList.remove("hidden");

    document.getElementById("all").classList.add("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}


let adventure = document.getElementById("adventure");
adventure.onclick = function adventure() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.remove("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.remove("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.remove("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.remove("hidden");
    document.getElementById("Palworld").classList.remove("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.add("hidden");
    document.getElementById("Dead Cells").classList.remove("hidden");
    document.getElementById("Red Dead Redemption 2").classList.remove("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.remove("hidden");
    document.getElementById("Minecraft").classList.remove("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.add("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.add("hidden");
    document.getElementById("Outer Worlds").classList.remove("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.add("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.add("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let multiplayer = document.getElementById("multiplayer");
multiplayer.onclick = function multiplayer() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.remove("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.remove("hidden");
    document.getElementById("Bloons TD 6").classList.remove("hidden");
    document.getElementById("Goat Simulator 3").classList.remove("hidden");
    document.getElementById("Gangbeasts").classList.remove("hidden");
    document.getElementById("Monster Hunter World").classList.remove("hidden");
    document.getElementById("Palworld").classList.remove("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.remove("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.remove("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.remove("hidden");
    document.getElementById("Dead Cells").classList.add("hidden");
    document.getElementById("Red Dead Redemption 2").classList.add("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.remove("hidden");
    document.getElementById("Dead by Daylight").classList.remove("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.remove("hidden");
    document.getElementById("Brawlhalla").classList.remove("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.add("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.remove("hidden");
    document.getElementById("Outer Worlds").classList.add("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.add("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.add("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let singleplayer = document.getElementById("singleplayer");
singleplayer.onclick = function singleplayer() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.remove("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.remove("hidden");
    document.getElementById("Keyboard Warriors").classList.remove("hidden");
    document.getElementById("Persona 5 Royal").classList.remove("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.remove("hidden");
    document.getElementById("Palworld").classList.add("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.remove("hidden");
    document.getElementById("Teken 8").classList.remove("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.remove("hidden");
    document.getElementById("Arms").classList.remove("hidden");
    document.getElementById("Dead Cells").classList.remove("hidden");
    document.getElementById("Red Dead Redemption 2").classList.remove("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.remove("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.remove("hidden");
    document.getElementById("Minecraft").classList.remove("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.remove("hidden");
    document.getElementById("Slay the Spire").classList.remove("hidden");
    document.getElementById("Persona 3 Reload").classList.remove("hidden");
    document.getElementById("Forza Horizon 5").classList.remove("hidden");
    document.getElementById("Outer Worlds").classList.remove("hidden");
    document.getElementById("Survive").classList.remove("hidden");
    document.getElementById("Balatro").classList.remove("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.add("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let openworld = document.getElementById("openworld");
openworld.onclick = function openworld() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.remove("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.remove("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.remove("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.remove("hidden");
    document.getElementById("Palworld").classList.remove("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.add("hidden");
    document.getElementById("Dead Cells").classList.add("hidden");
    document.getElementById("Red Dead Redemption 2").classList.remove("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.remove("hidden");
    document.getElementById("Minecraft").classList.remove("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.add("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.remove("hidden");
    document.getElementById("Outer Worlds").classList.remove("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.add("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.add("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let roguelike = document.getElementById("roguelike");
roguelike.onclick = function roguelike() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.add("hidden");
    document.getElementById("Palworld").classList.add("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.add("hidden");
    document.getElementById("Dead Cells").classList.remove("hidden");
    document.getElementById("Red Dead Redemption 2").classList.add("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.add("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.remove("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.add("hidden");
    document.getElementById("Outer Worlds").classList.add("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.remove("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.add("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let strategy = document.getElementById("strategy");
strategy.onclick = function strategy() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.remove("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.add("hidden");
    document.getElementById("Palworld").classList.add("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.add("hidden");
    document.getElementById("Dead Cells").classList.add("hidden");
    document.getElementById("Red Dead Redemption 2").classList.add("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.add("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.remove("hidden");
    document.getElementById("Slay the Spire").classList.remove("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.add("hidden");
    document.getElementById("Outer Worlds").classList.add("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.remove("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.add("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let indie = document.getElementById("indie");
indie.onclick = function indie() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.remove("hidden");
    document.getElementById("Hollow Knight").classList.remove("hidden");
    document.getElementById("Keyboard Warriors").classList.remove("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.remove("hidden");
    document.getElementById("Gangbeasts").classList.remove("hidden");
    document.getElementById("Monster Hunter World").classList.add("hidden");
    document.getElementById("Palworld").classList.remove("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.add("hidden");
    document.getElementById("Dead Cells").classList.remove("hidden");
    document.getElementById("Red Dead Redemption 2").classList.add("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.add("hidden");
    document.getElementById("Brawlhalla").classList.remove("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.remove("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.add("hidden");
    document.getElementById("Outer Worlds").classList.add("hidden");
    document.getElementById("Survive").classList.remove("hidden");
    document.getElementById("Balatro").classList.remove("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.add("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let fighting = document.getElementById("fighting");
fighting.onclick = function fighting() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.add("hidden");
    document.getElementById("Palworld").classList.add("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.remove("hidden");
    document.getElementById("Teken 8").classList.remove("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.remove("hidden");
    document.getElementById("Dead Cells").classList.add("hidden");
    document.getElementById("Red Dead Redemption 2").classList.add("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.add("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.add("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.add("hidden");
    document.getElementById("Outer Worlds").classList.add("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.add("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.add("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.remove("active");
}

let sports = document.getElementById("sports");
sports.onclick = function sports() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.add("hidden");
    document.getElementById("Palworld").classList.add("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.add("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.remove("hidden");
    document.getElementById("Arms").classList.remove("hidden");
    document.getElementById("Dead Cells").classList.add("hidden");
    document.getElementById("Red Dead Redemption 2").classList.add("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.add("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.add("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.remove("hidden");
    document.getElementById("Outer Worlds").classList.add("hidden");
    document.getElementById("Survive").classList.add("hidden");
    document.getElementById("Balatro").classList.add("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.add("active");
    document.getElementById("shooter").classList.remove("active");
}

let shooter = document.getElementById("shooter");
shooter.onclick = function shooter() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("hidden");
    document.getElementById("Lethal Company").classList.add("hidden");
    document.getElementById("Hollow Knight").classList.add("hidden");
    document.getElementById("Keyboard Warriors").classList.add("hidden");
    document.getElementById("Persona 5 Royal").classList.add("hidden");
    document.getElementById("Sea of Thieves").classList.add("hidden");
    document.getElementById("Bloons TD 6").classList.add("hidden");
    document.getElementById("Goat Simulator 3").classList.add("hidden");
    document.getElementById("Gangbeasts").classList.add("hidden");
    document.getElementById("Monster Hunter World").classList.add("hidden");
    document.getElementById("Palworld").classList.add("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.remove("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.add("hidden");
    document.getElementById("Teken 8").classList.add("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.add("hidden");
    document.getElementById("Arms").classList.add("hidden");
    document.getElementById("Dead Cells").classList.add("hidden");
    document.getElementById("Red Dead Redemption 2").classList.remove("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.add("hidden");
    document.getElementById("Dead by Daylight").classList.add("hidden");
    document.getElementById("Hogwarts Legacy").classList.add("hidden");
    document.getElementById("Minecraft").classList.add("hidden");
    document.getElementById("Brawlhalla").classList.add("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.add("hidden");
    document.getElementById("Slay the Spire").classList.add("hidden");
    document.getElementById("Persona 3 Reload").classList.add("hidden");
    document.getElementById("Forza Horizon 5").classList.add("hidden");
    document.getElementById("Outer Worlds").classList.remove("hidden");
    document.getElementById("Survive").classList.remove("hidden");
    document.getElementById("Balatro").classList.add("hidden");

    document.getElementById("all").classList.remove("active");
    document.getElementById("adventure").classList.remove("active");
    document.getElementById("multiplayer").classList.remove("active");
    document.getElementById("singleplayer").classList.remove("active");
    document.getElementById("openworld").classList.remove("active");
    document.getElementById("roguelike").classList.remove("active");
    document.getElementById("strategy").classList.remove("active");
    document.getElementById("indie").classList.remove("active");
    document.getElementById("fighting").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("shooter").classList.add("active");
}

