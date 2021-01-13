
function postMadlib() {
    adjective = document.getElementById("adjective").value;
    noun = document.getElementById("noun").value;
    verb = document.getElementById("verb").value;
    console.log(adjective);
    var madlib = "I like to " + verb + " with my " + adjective + ", " + noun;

    document.getElementById("madlibDisplay").innerHTML = madlib;
}