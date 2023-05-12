import { useState } from 'react';
import TextField from '../TextField/TextField';
import OptionsList from '../OptionsList/OptionsList';
import Button from '../Button/Button';
import './Form.css';

const Form = (props) => {
  const { registerUser, teams, createTeam } = props;

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState('');
  const [team, setTeam] = useState('Seleccionar equipo');
  const [teamName, setTeamName] = useState('');
  const [teamColor, setTeamColor] = useState('');

  const cleanInputs = () => {
    setName('');
    setPosition('');
    setPhoto('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      name,
      position,
      photo,
      team,
    };
    registerUser(dataToSend);
    // cleanInputs();
  };

  const handleCreateTeams = (e) => {
    e.preventDefault();
    createTeam({ title: teamName, primaryColor: teamColor });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextField
          title="Nombre"
          placeholder="Ingresa nombre"
          required
          updateValue={setName}
          value={name}
        />
        <TextField
          title="Puesto"
          placeholder="Ingresa puesto"
          updateValue={setPosition}
          value={position}
        />
        <TextField
          title="Foto"
          placeholder="Ingresa enlace de foto"
          required
          updateValue={setPhoto}
          value={photo}
        />
        <OptionsList
          title="Equipo"
          required
          updateValue={setTeam}
          teams={teams}
          value={team}
        />
        <Button text="Crear" />
      </form>
      <form onSubmit={handleCreateTeams}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <TextField
          title="Equipo"
          placeholder="Ingresa nombre del equipo"
          required
          updateValue={setTeamName}
          value={teamName}
        />
        <TextField
          title="Color en formato hexadecimal"
          placeholder="ejemplo #F00FFF"
          updateValue={setTeamColor}
          value={teamColor}
          type="color"
        />
        <Button text="Crear equipo" />
      </form>
    </section>
  );
};
export default Form;
