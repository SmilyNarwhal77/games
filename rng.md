<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>RNG Clicker II</title>
    <style>
        body {
            margin: 0;
            font-family: sans-serif;
        }

        .main {
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        nav {
            width: 150px;
            background-color: aquamarine;
            border-right: 1px solid black;
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            width: 100%;
        }

        nav ul li {
            background-color: aquamarine;
            border-bottom: 1px solid black;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s ease;
            font-weight: bold;
        }

        nav ul li:hover {
            background-color: #7fffd4;
        }

        .locked {
            opacity: 0.5;
        }

        .noexist::after {
            content: "";
        }

        button#sell {
            margin-top: auto;
            margin-bottom: 10px;
            padding: 5px 10px;
            cursor: pointer;
        }

        main {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }

        #clickbutton {
            background-color: azure;
            width: 6vw;
            height: 6vw;
            border-radius: 50%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 40px auto;
            transition: transform 0.2s ease;
            font-weight: bold;
            cursor: pointer;
        }

        #clickbutton:hover {
            transform: scale(1.2);
        }

        #luckarea, #rollarea {
            background-color: cornsilk;
            max-width: 65vw;
            text-align: center;
            margin: 2vh auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-weight: bold;
        }

        #rolling {
            display: block;
            margin: 20px auto;
            padding: 8px 16px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
        }

        #inventory {
            margin-top: 20px;
        }

        ul#ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
            gap: 10px;
            list-style: none;
            padding: 0;
        }

        ul#ul li {
            background-color: #f0f0f0;
            padding: 5px;
            border: 1px solid #ccc;
            text-align: center;
            border-radius: 5px;
        }
        .special {
            color: gold;
        }
        .code-input-container {
            position: absolute;
            top: 10px;
            right: 20px;
            background-color: #f0f8ff;
            padding: 10px 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
            z-index: 1000;
        }

        .code-input-container label {
            margin-right: 8px;
        }

        #codeinput {
            padding: 5px 8px;
            border: 1px solid #aaa;
            border-radius: 4px;
            font-size: 1rem;
            width: 120px;
        }
        .code-input-container {
            position: absolute;
            top: 10px;
            right: 20px;
            background-color: #f0f8ff;
            padding: 10px 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        #codeinput {
            padding: 5px 8px;
            border: 1px solid #aaa;
            border-radius: 4px;
            font-size: 1rem;
            width: 120px;
        }

        #submitcode {
            padding: 6px 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.2s ease;
        }

        #submitcode:hover {
            background-color: #45a049;
        }

        .code-error {
            color: crimson;
            font-size: 0.9rem;
            margin-top: 6px;
            margin-left: 4px;
            font-weight: normal;
        }

    </style>  
</head>
<body>
    <div class="code-input-container">
        <label for="codeinput">Enter Code ✨:</label>
        <input type="text" id="codeinput" maxlength="20" pattern="[A-Za-z0-9]*" placeholder="Your Code">
        <button id="submitcode" onclick="submitCode()">Submit</button>
        <div id="codeerror" class="code-error"></div>
    </div>
    <div class="main">
        <nav>
            <ul>
                <li><strong>PARTS:</strong></li>
                <li id="p1">Part 1</li>
                <li id="p2" class="locked">Part 2</li>
                <li id="p3" class="locked">Part 3</li>
                <li id="p4" class="locked noexist">Part 4</li>
                <li id="p5" class="locked noexist">Part 5</li>
                <li id="p6" class="locked noexist">Part 6</li>
                <li id="p7" class="locked noexist">Part 7</li>
                <li id="p0" class="locked special">Special</li>
            </ul>
            <button id="sell" onclick="sellall()">SELL ALL</button>
        </nav>
        <main>
            <button id="clickbutton" onclick="getluck();">+<span id="clickamount">1 </span>Luck</button>
            <div id="luckarea">
                Luck: <span id="luckdisplay">1</span>
            </div>
            <div id="rollarea">
                You rolled a <span id="rolldisplay">Nothing! Chance: 1 in 1</span>
            </div>
            <button id="rolling" onclick="rollrarity()">
                ROLL!<br>Costs: <span id="rollcost">0</span> Luck
            </button>
            
            <div id="inventory">
                <ul id="ul"></ul>
            </div>
        </main>
    </div>
<script type="module">
        import devsiderarities from "./rarities.js";
        import codes from "./codes.js";
        async function oof () {
            window.devsiderarities = devsiderarities;
            window.codes = codes;
        }
        oof();
    </script>
    <script>
        // ============== UTILITY FUNCTIONS ==============
        function generateBigSuffixes() {
            const units = ["", "Un", "Du", "Tr", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];
            const tens = ["", "De", "Vg", "Tg", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD"];
            const hundreds = ["", "Ce", "DuCe", "TrCe", "QaCe", "QiCe", "SxCe", "SpCe", "OcCe", "NoCe"];
            const thousandyearsofdeath = ["", "Mi", "Di", "Ti", "Qai", "Qii", "Sxi", "Spi", "Oi", "Ni"];
            const suffixes = [];
            let k = 3;
            
            for (let tyod = 0; tyod < thousandyearsofdeath.length; tyod++) {
                k = 3 + tyod * 3000;
                let uvz = k;
                
                for (let h = 0; h < hundreds.length; h++) {
                    k = uvz + 300 * h;
                    let uva = k;
                    
                    for (let t = 0; t < tens.length; t++) {
                        k = uva + 30 * t;
                        let uvb = k;
                        
                        if (t === 0 && h === 0 && tyod === 0) {
                            for (let u = -1; u < units.length; u++) {
                                k = uvb + 3 * u;
                                k -= 3;
                                let name;
                                
                                if (t === 0 && h === 0 && tyod === 0) {
                                    switch (u) {
                                        case -1: name = ""; break;
                                        case 0: name = "K"; break;
                                        case 1: name = "M"; break;
                                        case 2: name = "B"; break;
                                        case 3: name = "T"; break;
                                        default: 
                                            name = units[u] + tens[t] + hundreds[h] + thousandyearsofdeath[tyod]; 
                                            break;
                                    }
                                } else {
                                    name = units[u] + tens[t] + hundreds[h] + thousandyearsofdeath[tyod];
                                }
                                
                                const vvv = k + 3;
                                name += "(e" + vvv + ")";
                                if (name !== "") suffixes.push(name);
                            }
                        } else {
                            for (let u = 0; u < units.length; u++) {
                                k = uvb + 3 * u;
                                k -= 3;
                                let name = units[u] + tens[t] + hundreds[h] + thousandyearsofdeath[tyod];
                                const vvv = k + 3;
                                name += "(e" + vvv + ")";
                                if (name !== "") suffixes.push(name);
                            }
                        }
                    }
                }
            }
            return suffixes;
        }

        function s(num) {
            const suffixes = generateBigSuffixes();
            if (num === 0) return "0";
            const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
            const maxTier = suffixes.length - 1;
            const safeTier = Math.min(tier, maxTier);
            const scaled = num / Math.pow(10, safeTier * 3);
            const suffix = tier < suffixes.length ? suffixes[safeTier] : `(e${tier * 3})`;
            return scaled.toFixed(3).replace(/\.000$/, "") + suffix;
        }

        function a(num) {
            return 10 ** num;
        }

        function rng(x) {
            return Math.floor(Math.random() * x + 1);
        }

        // ============== GAME STATE ==============
        let part = localStorage.getItem("part") ? parseInt(localStorage.getItem("part")) : 1;
        let lucks = localStorage.getItem("luck") ? JSON.parse(localStorage.getItem("luck")) : [5, 1];
        let luckperclick = localStorage.getItem("lpc") ? parseInt(localStorage.getItem("lpc")) : 1;
        let luck = lucks[0] * 10 ** lucks[1];
        if(isNaN(luck)) {
            luck = 1;
        }
        let zacodes;
        async function move() {
        if(window.codes) {
        zacodes = (localStorage.getItem("codes") !== undefined && localStorage.getItem("codes") !== null) ? JSON.parse(localStorage.getItem("codes")) : window.codes;};
    for(let i = 0; i < 5; i++) {
        zacodes[i].effect = window.codes[i].effect;
    }}
        move();
        let rarities = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [
    {name: "Common", chance: 2, owned: 0, part: 1},
    {name: "Unusual", chance: 5, owned: 0, part: 1},
    {name: "Rare", chance: 25, owned: 0, part: 1},
    {name: "Epic", chance: 125, owned: 0, part: 1},
    {name: "Legendary", chance: 625, owned: 0, part: 1},
    {name: "Mythical", chance: 3 * a(3), owned: 0, part: 1},
    {name: "Ultra", chance: 15 * a(3), owned: 0, part: 1},
    {name: "Super", chance: 75 * a(3), owned: 0, part: 1},
    {name: "Void", chance: 400 * a(3), owned: 0, part: 1},
    {name: "Infinitesimal", chance: 2 * a(6), owned: 0, part: 1},
    {name: "Atomic", chance: 10 * a(6), owned: 0, part: 1},
    {name: "Cellular", chance: 50 * a(6), owned: 0, part: 1},
    {name: "Microscopic", chance: 250 * a(6), owned: 0, part: 1},
    {name: "Miniature", chance: a(9), owned: 0, part: 1},
    {name: "Small", chance: 5 * a(9), owned: 0, part: 1},
    {name: "Medium", chance: 25 * a(9), owned: 0, part: 1},
    {name: "Large", chance: 125 * a(9), owned: 0, part: 1},
    {name: "Gigantic", chance: 625 * a(9), owned: 0, part: 1},
    {name: "Infinite", chance: 3 * a(12), owned: 0, part: 1},
    {name: "Planetary", chance: 15 * a(12), owned: 0, part: 1},
    {name: "Stellar", chance: 75 * a(12), owned: 0, part: 1},
    {name: "Interstellar", chance: 400 * a(12), owned: 0, part: 1},
    {name: "Galactic", chance: 2 * a(15), owned: 0, part: 1},
    {name: "Universal", chance: 10 * a(15), owned: 0, part: 1},
    {name: "Surreal", chance: 50 * a(15), owned: 0, part: 1},
    {name: "Ethereal", chance: 250 * a(15), owned: 0, part: 1},
    {name: "Real", chance: 1250 * a(15), owned: 0, part: 1},
    {name: "Fiery", chance: 6 * a(18), owned: 0, part: 2},
    {name: "Oceanic", chance: 30 * a(18), owned: 0, part: 2},
    {name: "Frozen", chance: 150 * a(18), owned: 0, part: 2},
    {name: "Dark", chance: 750 * a(18), owned: 0, part: 2},
    {name: "Shadow", chance: 4 * a(21), owned: 0, part: 2},
    {name: "Magma", chance: 20 * a(21), owned: 0, part: 2},
    {name: "Light", chance: 100 * a(21), owned: 0, part: 2},
    {name: "Electric", chance: 500 * a(21), owned: 0, part: 2},
    {name: "Portal", chance: 2.5 * a(24), owned: 0, part: 2},
    {name: "Windy", chance: 10 * a(24), owned: 0, part: 2},
    {name: "Soul", chance: 50 * a(24), owned: 0, part: 2},
    {name: "Sandy", chance: 250 * a(24), owned: 0, part: 2},
    {name: "Creation", chance: 1.25 * a(27), owned: 0, part: 2},
    {name: "Destruction", chance: 6 * a(27), owned: 0, part: 2},
    {name: "Stormy", chance: 30 * a(27), owned: 0, part: 2},
    {name: "Quantum", chance: 150 * a(27), owned: 0, part: 2},
    {name: "Fluidity", chance: 750 * a(27), owned: 0, part: 2},
    {name: "Earth", chance: 3.5 * a(30), owned: 0, part: 2},
    {name: "Transcendental", chance: 15 * a(30), owned: 0, part: 2},
    {name: "Omnipotent", chance: 75 * a(30), owned: 0, part: 2},
    {name: "Antimatter", chance: 400 * a(30), owned: 0, part: 2},
    {name: "Secret", chance: 2 * a(33), owned: 0, part: 2},
    {name: "Demonic", chance: 10 * a(33), owned: 0, part: 2},
    {name: "Angelic", chance: 50 * a(33), owned: 0, part: 2},
    {name: "Eternal", chance: 250 * a(33), owned: 0, part: 2},
    {name: "Zenith", chance: 1250 * a(33), owned: 0, part: 2},
    {name: "Illusional", chance: 6 * a(36), owned: 0, part: 2},
    {name: "Magical", chance: 30 * a(36), owned: 0, part: 2},
    {name: "Monazite", chance: 150 * a(36), owned: 0, part: 2},
    {name: "Coal", chance: 750 * a(36), owned: 0, part: 3},
    {name: "Iron", chance: 4 * a(39), owned: 0, part: 3},
    {name: "Common (Mini)", chance: 20 * a(39), owned: 0, part: 3},
    {name: "Copper", chance: 100 * a(39), owned: 0, part: 3},
    {name: "Bronze", chance: 500 * a(39), owned: 0, part: 3},
    {name: "Unusual (Mini)", chance: 2.5 * a(42), owned: 0, part: 3},
    {name: "Silver", chance: 12.5 * a(42), owned: 0, part: 3},
    {name: "Gold", chance: 60 * a(42), owned: 0, part: 3},
    {name: "Rare (Mini)", chance: 300 * a(42), owned: 0, part: 3},
    {name: "Platinum", chance: 1.5 * a(45), owned: 0, part: 3},
    {name: "Ruby", chance: 7.5 * a(45), owned: 0, part: 3},
    {name: "Epic (Mini)", chance: 35 * a(45), owned: 0, part: 3},
    {name: "Ember", chance: 200 * a(45), owned: 0, part: 3},
    {name: "Aquamarine", chance: 1 * a(48), owned: 0, part: 3},
    {name: "Legendary (Mini)", chance: 5 * a(48), owned: 0, part: 3},
    {name: "Sunstone", chance: 25 * a(48), owned: 0, part: 3},
    {name: "Amethyst", chance: 125 * a(48), owned: 0, part: 3},
    {name: "Mythical (Mini)", chance: 625 * a(48), owned: 0, part: 3},
    {name: "Diamond", chance: 3 * a(51), owned: 0, part: 3},
    {name: "Emerald", chance: 15 * a(51), owned: 0, part: 3},
    {name: "Ultra (Mini)", chance: 75 * a(51), owned: 0, part: 3},
    {name: "404", owned: 0, chance: 50000, part: 0,},
    {name: "🍩", owned: 0, chance: 5000000, part: 0},
    {name: "Dev Token", owned: 0, chance: 50000000000, part: 0},
    //{name: "Moonstone", chance}
];
        if(window.devsiderarities) {
        rarities = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : window.devsiderarities};
        async function check() { 
        if(window.devsiderarities) {
        if(rarities.length !== window.devsiderarities.length) {
            for(let i = 0; i < rarities.length; i++) {
                window.devsiderarities[i].owned = rarities[i].owned;
            }
        }}};
        check();
        // ============== GAME FUNCTIONS ==============
        function getluck() {
            luck += luckperclick;
            updateUI();
        }
        function updatestorage() {
            const paahrts = luck.toExponential().split('e');
            lucks = [Number(paahrts[0]) * 10 ** (paahrts[1] % 1 !== 0 ? 0 : 0), parseInt(paahrts[1])];
            let iop = JSON.stringify(lucks);
            if(!zacodes) {
                move();
            }
            check();
            localStorage.setItem("luck", iop);
            localStorage.setItem("lpc", luckperclick);
            localStorage.setItem("data", JSON.stringify(rarities));
            localStorage.setItem("part", part);
            if(zacodes !== undefined && zacodes !== null) {
            localStorage.setItem("codes", JSON.stringify(zacodes));}
        }
        function updateUI() {
            const ul = document.getElementById("ul");
            ul.innerHTML = "";
            rarities.forEach((rarity) => {
                if (rarity.part == part) {
                    const li = document.createElement("li");
                    li.textContent = `${rarity.name}: ${rarity.owned}`;
                    ul.appendChild(li);
                }
            });
            
            document.getElementById("luckdisplay").textContent = s(luck);
            document.getElementById("rollcost").textContent = s(findRollCost());
            updatestorage();
        }

        function sellall() {
            rarities.forEach((rarity) => {
                luck += Math.floor(rarity.owned * rarity.chance / 50);
                rarity.owned = 0;
            });
            updateUI();
        }

        function getBestOwnedRarity() {
            for (let i = rarities.length - 1; i >= 0; i--) {
                if (rarities[i].owned > 0) return i;
            }
            return 0;
        }

        function findRollCost() {
            const best = getBestOwnedRarity();
            return Math.max(1, Math.floor(rarities[best].chance / 1000));
        }

        function rollrarity() {
            const cost = findRollCost();
            if (luck < cost) {
                return;
            }
            if(part == 0) return;
            luck -= cost;
            for (let j = rarities.length - 1; j >= Math.max(0, rarities.length - 3); j--) {
                const rarity = rarities[j];
                if (rng(rarity.chance) == 1) {
                    rarity.owned++;
                    const rolldisplay = document.getElementById("rolldisplay");
                    rolldisplay.innerHTML = `<span id="rolldisplay" style="color: gold">${rarity.name}! Chance: 1 in ${s(rarity.chance)}</span>`;
                    updateUI();
                    return;
                }
            }
            for (let i = rarities.length - 4; i >= 0; i--) {
                const rarity = rarities[i];
                if (rng(luck) >= rng(rarity.chance)) {
                    if (rarity.part !== part) return;
                    rarity.owned++;
                    const rolldisplay = document.getElementById("rolldisplay");
                    if (luck < rarity.chance) {
                        rolldisplay.textContent = `${rarity.name}! Chance: ${s(luck)} in ${s(rarity.chance)}`;
                    } else {
                        rolldisplay.textContent = `${rarity.name}! Chance: 1 in 1`;
                    }
                    updateUI();
                    return;
                }
            }
        }
        // ============== PART FUNCTIONS ==============
        function p1() {
            part = 1;
            updateUI();
        }
        function p0() {
            part = 0;
            updateUI();
        }

        function p2() {
            if (document.getElementById("p2").classList.contains("locked")) {
                if (luck < 300 * a(12)) {
                    alert("300T(e12) Luck needed to enter part 2!");
                } else {
                    document.getElementById("p2").classList.remove("locked");
                    part = 2;
                    updateUI();
                }
            } else {
                part = 2;
                updateUI();
            }
        }

        function p3() {
            if (document.getElementById("p3").classList.contains("locked")) {
                if (luck < 300 * a(30)) {
                    alert("300No(e30) Luck needed to enter part 3!");
                } else {
                    document.getElementById("p3").classList.remove("locked");
                    part = 3;
                    updateUI();
                }
            } else {
                part = 3;
                updateUI();
            }
        }

        // ============== INITIALIZATION ==============
        function initializeParts() {
            for (let abcd = part; abcd >= 1; abcd--) {
                document.getElementById(`p${abcd}`).classList.remove("locked");
            }
        }

        function checkiffinish() {
            if (rarities[rarities.length - 1].owned >= 1) {
                return true;
            }
            return false;
        }

        // ============== EVENT LISTENERS ==============
        document.getElementById("p3").addEventListener("click", p3);
        document.getElementById("p2").addEventListener("click", p2);
        document.getElementById("p1").addEventListener("click", p1);
        document.getElementById("p0").addEventListener("click", p0);

        document.addEventListener("DOMContentLoaded", function() {
            initializeParts();
            updateUI();
        });
        const errorbox = document.getElementById("codeerror");

        function checkifcodecorrect(ching) {
            if (!zacodes) {
                errorbox.innerHTML = "Apologies. Codes are down for a moment. Please try again later.";
                return;
            }

            for (let code of zacodes) {
                if (code.name === ching) {
                    if (code.used == false && typeof code.effect === "function") {
                        code.effect();
                        code.used = true;
                        errorbox.textContent = "Success!";
                    } else if (code.used == true) {
                        errorbox.textContent = "Already Redeemed.";
                    } else {
                        errorbox.textContent = "Unknown Error.";
                    }
                    return; // Exit after finding the code
                }
            }

            // If no matching code was found
            errorbox.textContent = "Code does not exist.";
        }

        function submitCode() {
            const code = document.getElementById('codeinput').value;
            if (code.match(/^[A-Za-z0-9]{1,20}$/)) {
                checkifcodecorrect(code);
            } else {
                errorbox.textContent = "Invalid code. Use only letters and numbers (max 20 characters).";
            }
        }
        // ============== GAME LOOP ==============
        //const uiUpdateInterval = setInterval(updateUI, 500);
        
        let dainterval;
        function autoroll(i) {
            dainterval = setInterval(rollrarity, i);
        }

        let finishCheckCounter = 0;
        setInterval(() => {
            if (checkiffinish() && finishCheckCounter === 0) {
                alert(`It seems you're having a great time playing! However, the developer has not updated the game any further than your current progress. Hence, if you would like to stop playing now, it is completely fine, furthermore, you do not need to worry, for all your progress is saved. Isn't that great? Goodbye and please come again tomorrow (the developer will update the game very soon!)`);
                finishCheckCounter++;
            }
        }, 1000);
        updateUI();
    </script>
</body>
</html>
var codes = [
    {name: "e404", used: false, effect: () => {rarities[rarities.length - 3].owned++}},
    {name: "Wassup", used: false, effect: () => {luck *= 2}},
    {name: "Version 1!", used: false, effect: () => {autoroll(1000)}},
    {name: "ilovedonuts", used: false, effect: () => {rarities[rarities.length - 2].owned++}},
    {name: "@KeeganGaming23", used: false, effect: () => {rarities[rarities.length - 1].owned++}},
];
export default codes;
