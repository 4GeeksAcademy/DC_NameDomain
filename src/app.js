/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our"];

  var adj = ["great", "big"];

  var noun = ["jogger", "racoon", "dicom", "cyborg", "radio", "planet"];

  var ext = [".com", ".net", ".us", ".org", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < ext.length; e++) {
          // ------EXTENSION SIN PUNTO------

          let EditExt = ext[e].substring(1, ext[e].length);

          // ------NOUN RECORTADO--------

          let EditNoun = noun[n].substring(
            noun[n].length - ext[e].length + 1,
            noun[n].length
          );

          // -------CONDICIONAL----------

          if (EditExt === EditNoun) {
            console.log(
              "WHAAATT??!! --->  " +
                noun[n].substring(0, noun[n].length - ext[e].length + 1) +
                ext[e]
            );
          } else console.log(pronoun[p] + adj[a] + noun[n] + ext[e]);
        }
      }
    }
  }
};
