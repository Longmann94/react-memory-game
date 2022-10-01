import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

function App() {

const [characterArr, setCharacterArr] = useState([
"Feo",
"Thordan VII",
"Dulia Chai",
"Estinien",
"Gosetsu Everfall",
"Hien",
"Ilberd",
"Khloe Aliapoh",
"Tataru",
"Yotsuyu",
"Yugiri",
"Zhloe Aliapoh",
"Lyse",
"Thancred",
"Uriange",
]);
const [pickedCharacterArr, setPickedCharacterArr] = useState([]);
const [score, setScore] = useState('0');
const [bestScore, setBestScore] = useState('0');

const [character1, setCharacter1] = useState("Feo");
const [character2, setCharacter2] = useState("Thordan VII");
const [character3, setCharacter3] = useState("Dulia Chai");
const [character4, setCharacter4] = useState("Estinien");
const [character5, setCharacter5] = useState("Gosetsu Everfall");
const [character6, setCharacter6] = useState("Hien");
const [character7, setCharacter7] = useState("Ilberd");
const [character8, setCharacter8] = useState("Khloe Aliapoh");
const [character9, setCharacter9] = useState("Tataru");
const [character10, setCharacter10] = useState("Yotsuyu");
const [character11, setCharacter11] = useState("Yugiri");
const [character12, setCharacter12] = useState("Zhloe Aliapoh");
const [character13, setCharacter13] = useState("Lyse");
const [character14, setCharacter14] = useState("Thancred");
const [character15, setCharacter15] = useState("Uriange");




useEffect(() => {

  const changeCharOnClick = (e) => {
      if(pickedCharacterArr.find(item => item === e.target.id)){

        setPickedCharacterArr([]);
      }else{
        setPickedCharacterArr([...pickedCharacterArr, e.target.id]);
      }

    };

  const allCharCard = document.querySelectorAll('.character-card');
  allCharCard.forEach(card => card.addEventListener("click", changeCharOnClick));

  return () => {
  allCharCard.forEach(card => card.removeEventListener("click", changeCharOnClick));
};

}, [
     pickedCharacterArr
   ]);

useEffect(() => {
//shuffle characters card if pickedCharacterArr is updated.
  const unshuffledArr = [...characterArr];
  let tempCharacterArr = unshuffledArr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

    setCharacterArr([...tempCharacterArr]);

    setScore(pickedCharacterArr.length);

    if(score == 15){
      window.alert('you won! good job buddy.');
    }

    if(score > bestScore){
      setBestScore(score);
    }

    //set card to random charcters
     setCharacter1(characterArr[0]);
     setCharacter2(characterArr[1]);
     setCharacter3(characterArr[2]);
     setCharacter4(characterArr[3]);
     setCharacter5(characterArr[4]);
     setCharacter6(characterArr[5]);
     setCharacter7(characterArr[6]);
     setCharacter8(characterArr[7]);
     setCharacter9(characterArr[8]);
     setCharacter10(characterArr[9]);
     setCharacter11(characterArr[10]);
     setCharacter12(characterArr[11]);
     setCharacter13(characterArr[12]);
     setCharacter14(characterArr[13]);
     setCharacter15(characterArr[14]);
}, [pickedCharacterArr, score, bestScore]);

const resetPicked = () => {
  setPickedCharacterArr([]);
}




  return (
    <div className="red">
     <Header />
     <Scoreboard score={score} bestScore={bestScore}/>
     <div className="main-container">
     <CharacterCard characterName={character1}/>
     <CharacterCard characterName={character2}/>
     <CharacterCard characterName={character3}/>
     <CharacterCard characterName={character4}/>
     <CharacterCard characterName={character5}/>
     <CharacterCard characterName={character6}/>
     <CharacterCard characterName={character7}/>
     <CharacterCard characterName={character8}/>
     <CharacterCard characterName={character9}/>
     <CharacterCard characterName={character10}/>
     <CharacterCard characterName={character11}/>
     <CharacterCard characterName={character12}/>
     <CharacterCard characterName={character13}/>
     <CharacterCard characterName={character14}/>
     <CharacterCard characterName={character15}/>
     </div>
     <Footer />
    </div>
  );
}

export default App;
