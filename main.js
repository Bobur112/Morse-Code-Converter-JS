let input = document.getElementById("morse");

var log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {

  log.textContent = Encode(e.target.value);
}

function Encode(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    const data = text.toLowerCase().split("");
    return data.map(m => morse[m] || "").join(" ");
}

/**
 * Decodes morse code
 * @param {string} text Morse code to decode
 */

function Decode(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    const data = text.split(" ");
    const table = Object.values(morse);
    const ids = [];

    data.forEach(txt => {
        const get = table.findIndex(x => x === txt);
        if (get !== -1) ids.push(get);
    });

    let str = "";
    ids.forEach(id => str += (Object.keys(morse)[id] || ""));

    return str;
}

/**
 * Creates audio stream of a morse code
 * @param {string} text Morse code
 */

function CreateAudio(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    
    try {
        const stream = audio(text);
        return stream;
    } catch(e) {
        return null;
    }
}

const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "!": "-.-.--",
    "@": ".--.-.",
    " ": "/",
    "Á": ".__._",
    "Ä": "._._",
    "É": ".._..",
    "Ñ": "__.__",
    "Ö": "___.",
    "Ü": "..__"
};
