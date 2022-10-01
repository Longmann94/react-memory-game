import React from 'react';

const CharacterCard = (props) => {

const imgLink = './img/' + props.characterName.replace(/ /g, '') + '.webp';

const charImage = {
  backgroundImage: `url(${imgLink})`,
  backgroundSize: 'cover',
  backgroundColor: 'white',
}

  return (
    <div className="character-card noselect" style={charImage} id={props.characterName}>
      {props.characterName}
    </div>
  );
}

export default CharacterCard;
