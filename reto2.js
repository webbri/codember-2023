// Reto 2
/*
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/
async function solveChallenge() {
  let finalString = "";
  const data = await fetch("https://codember.dev/data/message_02.txt");
  const dataString = await data.text();
  console.log(dataString);
  console.log(dataString.length);
  let total = 0;
  for (let i = 0; i < dataString.length; i++) {
    console.log(i, dataString[i]);
    let currentChar = dataString[i];
    if (currentChar === "#") {
      total++;
    } else if (currentChar === "@") {
      total--;
    } else if (currentChar === "*") {
      total = total * total;
    } else if (currentChar === "&") {
      finalString += total;
    }
  }
  console.log(finalString);
}

solveChallenge();
