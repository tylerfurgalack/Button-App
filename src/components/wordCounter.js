function WordCounter(props) {
  let text = "sıfır";
  const numArry = [
    "bir",
    "iki",
    "üç",
    "dört",
    "beş",
    "altı",
    "yedi",
    "sekiz",
    "dokuz",
    "on",
    "on bir",
    "on iki",
    "on üç",
    "on dört",
    "on beş",
    "on altı",
    "on yedi",
    "on sekiz",
    "on dokuz",
    "yirmi",
    "yirmi bir",
    "yirmi iki",
    "yirmi üç",
    "yirmi dört",
    "yirmi beş",
    "yirmi altı",
    "yirmi yedi",
    "yirmi sekiz",
    "yirmi dokuz",
    "otuz",
    "otuz bir",
  ];
  if (props.count <= numArry.length) {
  for (let i = 0; i < props.count; i++) {
    text = numArry[i];
  }
  return text;
} else if (props.count > numArry.length) {
  return text = 'Boşum';
}
}
export default WordCounter;
