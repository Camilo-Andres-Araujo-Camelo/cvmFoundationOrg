import './Collaborator.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import React, { useState } from 'react';

const Collaborator = (props) => {
  const { name, photo, position, id, fav } = props.collaborator;
  const { primaryColor, deleteCollaborator, setFavorite } = props;

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="deleteBtn"
        onClick={() => deleteCollaborator(id)}
      />

      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={photo} alt="photo-collaborator" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{position}</h5>
        {fav ? (
          <AiFillHeart
            size="1.5em"
            color="ff0000"
            onClick={() => setFavorite(id)}
          />
        ) : (
          <AiOutlineHeart size="1.5em" onClick={() => setFavorite(id)} />
        )}
      </div>
    </div>
  );
};

export default Collaborator;
