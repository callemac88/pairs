const data = "app 1,9,5,0,20,-4,12,16,7 12";

const pairsFn = (dataStr) => {
  const info = dataStr.split(" ");
  try {
    if(info[0] !== "app") { throw "the comman word does not exist try start with the word app"; }
  } catch(err) {
    console.log(err);
  }
  
  const arrayInfo = info[1].split(",");
  const NUM = parseInt(info[2]);
  const arrL = arrayInfo.length;

  for (let i = 0; i < arrL; i++) {
    for (let j = (i + 1); j < arrL; j++) {
      const sum = parseInt(arrayInfo[i]) + parseInt(arrayInfo[j]);
      if (sum === NUM) console.log(`+ ${arrayInfo[i]},${arrayInfo[j]}`);
    }
  }
}

pairsFn(data);