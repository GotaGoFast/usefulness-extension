document.getElementById("generateANum").addEventListener("click", function generateNum() {
    let randomNumInput = 0
    randomNumInput = document.getElementById("randomNumInput").value
    document.getElementById("generatedNum").innerHTML = Math.round(Math.random() * randomNumInput);
}) // number generator
function QuoteGenerator() {
    let quote = ""
    const howManyQuoteTypes = 5
    let mainQuoteType = 0
    let quoteCycler = 0
    //main quote vars
    let makeQuoteType = 0
    const makeQuoteTypes = [" makes ", " doesn't make "]
    const makesStart = ["happiness", "love", "a good person", "a good time", "a person", "ham", "friendship"]
    const makesEnd = ["the world go round.", "everyone happy.", "your life easier.", "a sandwich...", "everything fun!", "nothing good", "only bad stuff"]
    let makesStartVar = 0
    let makesEndVar = 0
    //"make" quote generating variables
    const shortQuoteParts = ["win. ", "survive. ", "die. ", "repeat. ", "continue. ", "live. ", "make a ham sandwich. ", "train. ", "drink. ", "eat. ", "slap the person sitting next to you. ", "breathe. "]
    //short quote vars
    const dontStopStart = ["don't stop ", "stop ", "die "]
    const dontStopMiddle = ["unless ", "otherwise ", "or ", "until "]
    const dontStopEnd = ["you die ", "I'll slap you ", "you live ", "your mother calls you in for dinner", "those british people come ", "those mexicans come "]
    //don't stop vars
    const ifAtFirstStart = ["if this quote doesn't inspire you, ", "If at first you don't succeed, ", "if you die, ", "", "when you die in minecraft, "]
    const ifAtFirstEnd = ["try, try again.", "try, try, try try, try, try try, try, try try, try, try try, try, try again.", "live.", "just respawn, idiot.", "click the button above."]
    //if at first
    const withoutNoun = ["music, ", "life, ", "death, ", "ham, ", "this quote, ", "t-series, ", "those british, "]
    const withoutEnd = ["life would be a joke.", "you'll never die.", "I wouldn't have so much popularity.", "I would commit die.", "life would cease to exist."]
    //without
    const people = [" - Ghandi", " - Albert Einstein", " - Pewdiepie", " - Thomas Edison", " - Donald Trump", " - Mr Bean", " - fat guy", " - hitler"]
    mainQuoteType = Math.floor(Math.random() * howManyQuoteTypes)
    if (mainQuoteType === 0) {
        makeQuoteType = Math.floor(Math.random() * makeQuoteTypes.length)
        makesStartVar = Math.floor(Math.random() * makesStart.length)
        makesEndVar = Math.floor(Math.random() * makesEnd.length)
        quote = makesStart[makesStartVar] + makeQuoteTypes[makeQuoteType] + makesEnd[makesEndVar]
    } else if (mainQuoteType === 1) {
        while (quoteCycler < 4) {
            quote += shortQuoteParts[Math.floor(Math.random() * shortQuoteParts.length)]
            quoteCycler++
        }
        quoteCycler = 0
    } else if (mainQuoteType === 2) {
        quote += dontStopStart[Math.floor(Math.random () * dontStopStart.length)]
        quote += dontStopMiddle[Math.floor(Math.random() * dontStopMiddle.length)]
        quote += dontStopEnd[Math.floor(Math.random() * dontStopEnd.length)]
    } else if (mainQuoteType === 3) {
        quote += ifAtFirstStart[Math.floor(Math.random() * ifAtFirstStart.length)]
        quote += ifAtFirstEnd[Math.floor(Math.random() * ifAtFirstEnd.length)]
    } else if (mainQuoteType === 4) {
        quote += "without "
        quote += withoutNoun[Math.floor(Math.random() * withoutNoun.length)]
        quote += withoutEnd[Math.floor(Math.random() * withoutEnd.length)]
    }
    quote += people[Math.floor(Math.random() * people.length)]
    document.getElementById("generatedQuote").innerHTML = quote
    quote = ""
} // quote generator function
document.getElementById("generateAQuote").addEventListener("click", function afterQuoteButton() {
    QuoteGenerator()
}) // quote generator
const airhorn = new Audio(chrome.runtime.getURL("airhorn.mp3"))
document.getElementById("airhorn").addEventListener("click", function playAirhorn() {
    airhorn.currentTime = 0
    airhorn.play()
}) // airhorn
const annoyingSound = new Audio(chrome.runtime.getURL("14khzSound.mp3"))
document.getElementById("14khzSound").addEventListener("mousedown", function play14khzSound() {
    annoyingSound.loop = true
    annoyingSound.play()
    document.getElementById("14khzSound").addEventListener("mouseup", function stop14khzSound() {
        annoyingSound.pause()
    })
})//annoying sound
const yee = new Audio(chrome.runtime.getURL("yee.mp3"))
document.getElementById("yee").addEventListener("click", function playYee() {
    yee.play()
})