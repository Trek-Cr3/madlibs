"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
var submit = document.getElementById("submit");
const processEntries = () => {
    //const pluralNoun = get("#pluralNoun").value;
    //const noun1 = get("#noun1").value;
    //const noun2 = get("#noun2").value;
    //const verb = get("#verb").value;
    //const song = get("#song").value;
   //const pluralNoun = document.getElementById("pluralNoun").value;
   //const noun1 = document.getElementById("noun1").value;
    //const noun2 = document.getElementById("noun2").value;
   //const verb = document.getElementById("verb").value;
    //const song = document.getElementById("song").value;
   var madlib = document.getElementById("story");
   var pluralNoun = document.getElementById("pluralNoun").value.toUpperCase();
    var noun1 = document.getElementById("noun1").value.toUpperCase(); 
    var noun2 = document.getElementById("noun2").value.toUpperCase();
    var verb = document.getElementById("verb").value.toUpperCase();
    var song = document.getElementById("song").value.toUpperCase();
    madlib.innerHTML= "I love to be " + verb + " with a " + noun1 + " when I'm listening to " + song + ". I also love to be " + verb + " with the " + noun2 + " while listening to " + song + ". It makes it easier to handle " + pluralNoun + "!";
   
    if (noun1 == "" || verb == "" || noun2 == "" || song == "" || pluralNoun == "") {
        alert("Please fill in alllll fields.");
        focusAndSelect("#pluralNoun");
        return clear();
        
        
    }
    /*
    else {
        //createMadlib(verb, noun1, noun2, song, pluralNoun);
           alert(madlib);
           return;
    }*/
};
function reset() {
    var x = document.querySelector("#reset");
    x.style.display='inline-block';
};
function clear(){
    var madlib = document.getElementById("story");
    madlib.innerHTML = "";
    var pluralNoun = document.getElementById("pluralNoun").value = "";
    var noun1 = document.getElementById("noun1").value = "";
    var noun2 = document.getElementById("noun2").value = "";
    var verb = document.getElementById("verb").value = "";
    var song = document.getElementById("song").value = "";
    var x = document.querySelector("#reset");
    x.style.display='none';
};
  //processEntries();
   // const madlib = `I love to ${verb} with my ${noun1} while listening to ${song}. I also love to ${verb} with my ${noun2} while listening to ${song}. I love ${pluralNoun}!`;
   // get("#result").textContent = madlib;
    document.addEventListener("DOMContentLoaded", () => {
        $("#submit").addEventListener("click", processEntries, reset);
        $("#reset").addEventListener("click", clear);
       $("#pluralNoun").focus();
});
