import React from 'react';

const CharacterCard = (props) => {

const imgLink = './img/' + props.characterName.replace(/ /g, '') + '.webp';
const idName = props.characterName.replace(/ /g, '');

const charImage = {
  backgroundImage: `url(${imgLink})`,
  backgroundSize: 'cover',
  backgroundColor: 'white',
}

  return (
    <div className="character-card noselect" style={charImage} id={idName}>
      {props.characterName}
    </div>
  );
}

export default CharacterCard;
