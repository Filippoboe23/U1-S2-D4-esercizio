/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("ESERCIZIO 1");
function area(l1, l2) {
  return l1 * l2;
}
area(23, 14);
const surface = area(23, 14);
console.log("l'area del rettangolo è: ", surface);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("ESERCIZIO 2");
function crazySum(num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
}
crazySum(4, 4);
const strangeSum = crazySum(4, 4);
console.log(strangeSum);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("ESERCIZIO 3");
function crazyDiff(num3) {
  if (num3 <= 19) {
    return Math.abs(num3 - 19);
  } else {
    return Math.abs((num3 - 19) * 3);
  }
}
console.log(crazyDiff(20));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("ESERCIZIO 3");
function boundary(n) {
  if (Math.abs(n) === true) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return n === true;
    } else {
      return n === false;
    }
  }
}
console.log(boundary(400));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("ESERCIZIO 5");
const sentence = "ci insegna a programmare";
const newSentence = sentence.split(" ");
console.log(newSentence);
if (newSentence[0] === "Epicode") {
  console.log(sentence);
} else {
  newSentence.splice(0, 0, "Epicode ");
  console.log(newSentence);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 6");
const check3and7 = function (param) {
  if (param > 0) {
    if (param % 3 === 0 || param % 7 === 0) {
      return console.log("il numero inserito è divisibile per tre oppure per nove");
    } else {
      return console.log("il numero inserito non è divisibile per tre oppure per nove");
    }
  } else {
    return console.log("il numero inserito non è positivo");
  }
};
console.log(check3and7(50));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("ESERCIZIO 7");
const string = "CIAO";
const newString = string.split("");
const reverseString = [newString.splice(0, 1, "O"), newString.splice(1, 1, "A"), newString.splice(2, 1, "I"), newString.splice(3, 1, "C")];

console.log(reverseString);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("ESERCIZIO 8");
const upperFirst = function (sentence) {
  return [sentence.charAt(0).toUpperCase(), sentence.charAt(3).toUpperCase(), sentence.charAt(11).toUpperCase(), sentence.charAt(13).toUpperCase()];
};
console.log(upperFirst(sentence));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
