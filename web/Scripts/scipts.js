let Theme = document.getElementById("Theme");
Theme.onclick = function () {
    document.body.classList.toggle("light_mode");
    document.body.classList.toggle("main-lightmode");
    document.body.classList.toggle("side-lightmode");
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

let adventure = document.getElementById("adventure");
adventure.onclick = function adventure() {
    let games = []
    for (let i = 0; i < document.getElementById("catalogue").childElementCount; i++) {
        let game = document.getElementById("catalogue").children.item(i)

        games.push(game)
    }

    games.forEach(game => {
        game.classList.remove("show");
        game.classList.toggle("hidden");
    })

    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.add("show");
    document.getElementById("Lethal Company").classList.toggle("hidden");
    document.getElementById("Hollow Knight").classList.toggle("show");
    document.getElementById("Keyboard Warriors").classList.toggle("hidden");
    document.getElementById("Persona 5 Royal").classList.toggle("hidden");
    document.getElementById("Sea of Thieves").classList.toggle("show");
    document.getElementById("Bloons TD 6").classList.toggle("hidden");
    document.getElementById("Goat Simulator 3").classList.toggle("hidden");
    document.getElementById("Gangbeasts").classList.toggle("hidden");
    document.getElementById("Monster Hunter World").classList.toggle("show");
    document.getElementById("Palworld").classList.toggle("show");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.toggle("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.toggle("hidden");
    document.getElementById("Teken 8").classList.toggle("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.toggle("hidden");
    document.getElementById("Arms").classList.toggle("hidden");
    document.getElementById("Dead Cells").classList.toggle("show");
    document.getElementById("Red Dead Redemption 2").classList.toggle("show");
    document.getElementById("Microsoft Flight Simulator").classList.toggle("hidden");
    document.getElementById("Dead by Daylight").classList.toggle("hidden");
    document.getElementById("Hogwarts Legacy").classList.toggle("show");
    document.getElementById("Minecraft").classList.toggle("show");
    document.getElementById("Brawlhalla").classList.toggle("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.toggle("hidden");
    document.getElementById("Slay the Spire").classList.toggle("hidden");
    document.getElementById("Persona 3 Reload").classList.toggle("hidden");
    document.getElementById("Forza Horizon 5").classList.toggle("hidden");
    document.getElementById("Outer Worlds").classList.toggle("show");
    document.getElementById("Survive").classList.toggle("hidden");
    document.getElementById("Balatro").classList.toggle("hidden");
}

let multiplayer = document.getElementById("multiplayer");
multiplayer.onclick = function multiplayer() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").style.display = 'inline-block';
    document.getElementById("Lethal Company").classList.toggle("show");
    document.getElementById("Hollow Knight").classList.toggle("hidden");
    document.getElementById("Keyboard Warriors").classList.toggle("hidden");
    document.getElementById("Persona 5 Royal").classList.toggle("hidden");
    document.getElementById("Sea of Thieves").classList.toggle("show");
    document.getElementById("Bloons TD 6").classList.toggle("show");
    document.getElementById("Goat Simulator 3").classList.toggle("show");
    document.getElementById("Gangbeasts").classList.toggle("show");
    document.getElementById("Monster Hunter World").classList.toggle("show");
    document.getElementById("Palworld").classList.toggle("show");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.toggle("show");
    document.getElementById("Super Smash Bros. Ultimate").classList.toggle("show");
    document.getElementById("Teken 8").classList.toggle("hidden");
    document.getElementById("Tony Hawk's Pro Skater 1 + 2").classList.toggle("hidden");
    document.getElementById("Arms").classList.toggle("hidden");
    document.getElementById("Dead Cells").classList.toggle("hidden");
    document.getElementById("Red Dead Redemption 2").classList.toggle("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.toggle("show");
    document.getElementById("Dead by Daylight").classList.toggle("show");
    document.getElementById("Hogwarts Legacy").classList.toggle("hidden");
    document.getElementById("Minecraft").classList.toggle("show");
    document.getElementById("Brawlhalla").classList.toggle("show");
    document.getElementById("Fire Emblem: Three Houses").classList.toggle("hidden");
    document.getElementById("Slay the Spire").classList.toggle("hidden");
    document.getElementById("Persona 3 Reload").classList.toggle("hidden");
    document.getElementById("Forza Horizon 5").classList.toggle("show");
    document.getElementById("Outer Worlds").classList.toggle("hidden");
    document.getElementById("Survive").classList.toggle("hidden");
    document.getElementById("Balatro").classList.toggle("hidden");
}

function singleplayer() {
    document.getElementById("catalogue").innerHTML = `
        <div class="game-card">
            <div class="game-image-holder">
                <img class="game-image" src="Photos/BOTW.jpg" alt="botw">
            </div>
            <div class="platform-icon-holder">
                <img class="platform-icon" src="Icons/Switch Icon.png" alt="Switch Icon">
            </div>
            <div class="title-button-format">
                <p class="game-title">The Legend Of Zelda: Breath of the Wild</p>
                
            </div>
            <div class="game-description-holder">
                <p class="game-description">
                    No kingdom. No memories. After a 100-year slumber, Link wakes up alone in a world he no longer remembers. Now the legendary hero must explore a vast and dangerous land and regain his memories before Hyrule is lost forever.
                </p>
            </div>
        </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Hollow Knight.jpg" alt="hollow knight">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Switch Icon.png" alt="Switch Icon">
                    <img class="platform-divider-icon" src="Icons/Playstation Icon.png" alt="Playstation Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Hollow Knight</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.
                        As the enigmatic Knight, you&#39;ll traverse the depths, unravel its mysteries and conquer its evils.
                        
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Keyboard Warriors.png" alt="keyboard warriors">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-divider-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Keyboard Warriors</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Think you can type fast? Challenge yourself on Keyboard Warriors. Achieve your best time and share with friends. Are you the Ultimate Keyboard Warrior?
                        
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Persona5R.jpg" alt="P5R">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Switch Icon.png" alt="Switch Icon">
                    <img class="platform-divider-icon" src="Icons/Playstation Icon.png" alt="Playstation Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Persona 5 Royal</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Forced to transfer to a high school in Tokyo, the protagonist has a strange dream. “You truly are a prisoner of fate.
                        In the near future, ruin awaits you.” He must save others from distorted desires by donning the mask of a Phantom Thief.
                    </p>
                </div>
            </div>
                <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/monster hunter world.jpg" alt="mhw">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-right-icon" src="Icons/Playstation Icon.png" alt="Playstation Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Monster Hunter World</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        As a hunter, you'll take on quests to hunt monsters in a variety of habitats. Take down these monsters and receive materials that you can use to create stronger weapons and armor in order to hunt even more dangerous monsters.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/tekken 8.jpg" alt="tekken 8">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Teken 8</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Experience the next chapter in the longest-running videogame storyline with 32 redesigned, unique fighters and master the all-new &#39;Heat&#39; system to crush your opponents.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/thps12.jpg" alt="thps1+2">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Tony Hawk's Pro Skater 1 + 2</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Skate as the legendary Tony Hawk and the full Pro roster skate to songs from the era-defining soundtrack. Hit insane trick combos with the iconic handling of the Tony hawk&#39;s Pro skater series
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Arms.jpg" alt="arms">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Arms</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Whether you bring the fight to your friends over local wireless* or across the world via the Internet, reach beyond your limits. This is a fighting game unlike any you&#39;ve played before, by any stretch of the imagination.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Dead Cells.jpg" alt="btd6">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Dead Cells</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Explore a sprawling, ever-changing castle... assuming you&#39;re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos//rdr2.jpg" alt="rdr2">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Red Dead Redemption 2</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        America, 1899. After a robbery goes wrong in the town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and bounty hunters massing on their heels, the gang must rob, steal and fight their way to survive.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Hogwarts Legacy.jpg" alt="hogwarts legacy">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Hogwarts Legacy</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Embark on a journey through familiar and new locations as you explore and discover magical beasts, craft potions, master spell casting, upgrade talents and become the wizard you want to be.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/FETH.jpg" alt="fire emblem: three houses">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Fire Emblem: Three Houses</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        As their professor, you must lead your students in their academic lives and in turn-based, tactical RPG battles wrought with strategic, new twists to overcome.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/slay the spire.jpg" alt="slay the spire">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Slay the Spire</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Persona 3 Reload.jpg" alt="P3R">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Persona 3 Reload</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Experience the pivotal game of the Persona series faithfully remade with cutting-edge graphics, modernized quality-of-life features, and signature stylish UI.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Forza Horizon 5.jpg" alt="forza horizon 5">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Forza Horizon 5</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        Enjoy limitless driving action in hundreds of the world&#39;s greatest cars. Discover Historic cities, beaches, canyons, and breathtaking views in stunning, detailed resolution.
                    </p>
                </div>
            </div><div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Outer Worlds.jpg" alt="outer worlds">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Outer Worlds</p>
                    
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        During your journey through the furthest colony, you will meet a host of characters who will want to join your crew. Armed with unique abilities, these companions all have their own missions, motivations, and ideals. It's up to you to help them achieve their goals, or turn them to your own ends.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/Outer Worlds.jpg" alt="outer worlds">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Outer Worlds</p>
                    
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        During your journey through the furthest colony, you will meet a host of characters who will want to join your crew. Armed with unique abilities, these companions all have their own missions, motivations, and ideals. It's up to you to help them achieve their goals, or turn them to your own ends.
                    </p>
                </div>
            </div>
            <div class="game-card">
                <div class="game-image-holder">
                    <img class="game-image" src="Photos/balatro.jpg" alt="balatro">
                </div>
                <div class="platform-icon-holder">
                    <img class="platform-icon" src="Icons/Windows Icon.png" alt="Windows Icon">
                    <img class="platform-left-icon" src="Icons/Mac Icon.png" alt="Mac Icon">
                    <img class="platform-divider-icon" src="Icons/Linux Icon.png" alt="Linux Icon">
                    <img class="platform-icon" src="Icons/Xbox Icon.png" alt="Xbox Icon">
                </div>
                <div class="title-button-format">
                    <p class="game-title">Balatro</p>
                </div>
                <div class="game-description-holder">
                    <p class="game-description">
                        The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands, discover game-changing jokers, and trigger adrenaline-pumping, outrageous combos.
                    </p>
                </div>
            </div>
    `;
}

function sports() {
    document.getElementById("The Legend Of Zelda: Breath of the Wild").classList.toggle("hidden");
    document.getElementById("Lethal Company").classList.toggle("hidden");
    document.getElementById("Hollow Knight").classList.toggle("hidden");
    document.getElementById("Keyboard Warriors").classList.toggle("hidden");
    document.getElementById("Persona 5 Royal").classList.toggle("hidden");
    document.getElementById("Sea of Thieves").classList.toggle("hidden");
    document.getElementById("Bloons TD 6").classList.toggle("hidden");
    document.getElementById("Goat Simulator 3").classList.toggle("hidden");
    document.getElementById("Gangbeasts").classList.toggle("hidden");
    document.getElementById("Monster Hunter World").classList.toggle("hidden");
    document.getElementById("Palworld").classList.toggle("hidden");
    document.getElementById("Tom Clancy's Rainbow Six Siege").classList.toggle("hidden");
    document.getElementById("Super Smash Bros. Ultimate").classList.toggle("hidden");
    document.getElementById("Teken 8").classList.toggle("hidden");
    document.getElementById("Dead Cells").classList.toggle("hidden");
    document.getElementById("Red Dead Redemption 2").classList.toggle("hidden");
    document.getElementById("Microsoft Flight Simulator").classList.toggle("hidden");
    document.getElementById("Dead by Daylight").classList.toggle("hidden");
    document.getElementById("Hogwarts Legacy").classList.toggle("hidden");
    document.getElementById("Minecraft").classList.toggle("hidden");
    document.getElementById("Brawlhalla").classList.toggle("hidden");
    document.getElementById("Fire Emblem: Three Houses").classList.toggle("hidden");
    document.getElementById("Slay the Spire").classList.toggle("hidden");
    document.getElementById("Persona 3 Reload").classList.toggle("hidden");
    document.getElementById("Outer Worlds").classList.toggle("hidden");
    document.getElementById("Survive").classList.toggle("hidden");
    document.getElementById("Balatro").classList.toggle("hidden");
}
