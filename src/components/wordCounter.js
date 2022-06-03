
import "./button.css";
import {useEffect} from "react";

function WordCounter(props) {
  
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
  useEffect(() => {
    if (props.count === 31) {
      setTimeout(3000);
    }
  }, [props.setText("Boşalmak")]);
  if (props.count <= numArry.length) {
    for (let i = 0; i < props.count; i++) {
      props.setText (numArry[i]);
    }
    return props.text;
  } 
}
export default WordCounter;
