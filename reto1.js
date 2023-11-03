
const countMap = {}

async function solveChallenge() {
  let finalString = ""
  const data = await fetch("https://codember.dev/data/message_01.txt");
  const dataString = await data.text();
  const wordsArray = dataString.toLowerCase().replace("\n", "").split(" ");
  for (i in wordsArray) {
    increaseListValue(wordsArray[i]);
  }
  Object.keys(countMap).forEach(element => {
    finalString += element + countMap[element]
  });
  console.log(finalString)
}

function increaseListValue(key) {
  countMap[key] = countMap[key] || 0
  countMap[key] = countMap[key] + 1;

}

solveChallenge();
