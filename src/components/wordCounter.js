import "./button.css";
//import {useEffect} from "react";

function WordCounter(props) {
  const numArry = [
    "sıfır",
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
  if (props.showBosalmak) {
    return <p>Boşalmak</p>;
  } else {
    return <p>{numArry[props.numCount]}</p>;
  }
}
export default WordCounter;
