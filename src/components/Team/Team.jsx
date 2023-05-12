import { React } from 'react';
import hexToRgba from 'hex-to-rgba';
import './Team.css';
import Collaborator from '../Collaborator/Collaborator';

const Team = (props) => {
  const { primaryColor, title, id } = props.team;
  const { collaborators, deleteCollaborator, changeColor, setFavorite } = props;
  const titleStyle = { borderColor: primaryColor };

  return (
    <>
      {collaborators?.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: hexToRgba(primaryColor, 0.6) }}
        >
          <input
            type="color"
            className="inputColor"
            value={primaryColor}
            onChange={(e) => changeColor(id, e.target.value)}
          />
          <h3 style={titleStyle}>{title}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, index) => {
              if (collaborator.team === title) {
                return (
                  <Collaborator
                    key={index}
                    collaborator={collaborator}
                    primaryColor={primaryColor}
                    deleteCollaborator={deleteCollaborator}
                    setFavorite={setFavorite}
                  />
                );
              }
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
