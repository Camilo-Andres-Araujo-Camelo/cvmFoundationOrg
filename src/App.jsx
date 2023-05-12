import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import './App.css';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  // useState
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const [teams, setTeams] = useState([
    {
      title: 'Programación',
      primaryColor: '#57C278',
      id: uuidv4(),
    },
    {
      title: 'Front-End',
      primaryColor: '#82CFFA',
      id: uuidv4(),
    },
    {
      title: 'Data Science',
      primaryColor: '#A6D157',
      id: uuidv4(),
    },
    {
      title: 'Devops',
      primaryColor: '#E06B69',
      id: uuidv4(),
    },
    {
      title: 'UX y Diseño',
      primaryColor: '#DB6EBF',
      id: uuidv4(),
    },
    {
      title: 'Móvil',
      primaryColor: '#FFBA05',
      id: uuidv4(),
    },
    {
      title: 'Innovación y Gestión',
      primaryColor: '#FF8A29',
      id: uuidv4(),
    },
  ]);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      name: 'Camilo',
      position: 'Gerente TI',
      photo: 'https://github.com/Camilo-Andres-Araujo-Camelo.png',
      team: 'Programación',
      fav: true,
    },
    {
      id: uuidv4(),
      name: 'Harland',
      position: 'Instructor',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Front-End',
      fav: true,
    },
    {
      id: uuidv4(),
      name: 'Jeanmarie Quijada',
      position: 'Instructora en Alura Latam',
      photo: 'https://github.com/JeanmarieAluraLatam.png',
      team: 'UX y Diseño',
      fav: true,
    },
    {
      id: uuidv4(),
      name: 'Christian Velasco',
      position: 'Head de Alura e Instructor',
      photo: 'https://github.com/christianpva.png',
      team: 'Programación',
      fav: true,
    },
    {
      id: uuidv4(),
      name: 'Jose Gonzalez',
      position: 'Dev FullStack',
      photo: 'https://github.com/JoseDarioGonzalezCha.png',
      team: 'Innovación y Gestión',
      fav: true,
    },
  ]);

  // Crear equipo
  const createTeam = (team) => {
    const newTeam = { ...team, id: uuidv4() };
    setTeams([...teams, newTeam]);
  };

  // Registar colaborador
  const registerCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };
  // Elimiminar colaborador
  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(newCollaborators);
  };

  //Setear favoritos
  const handleLike = (id) => {
    const newCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });
    setCollaborators(newCollaborators);
  };
  // Cambiar color
  const changeColor = (id, color) => {
    const teamsModifiedColors = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(teamsModifiedColors);
  };

  return (
    <>
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          registerUser={registerCollaborator}
          createTeam={createTeam}
        />
      )}
      <MyOrg handleShowForm={handleShowForm} />
      {teams.map((team, index) => (
        <Team
          key={team.title}
          team={team}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.title
          )}
          deleteCollaborator={deleteCollaborator}
          changeColor={changeColor}
          setFavorite={handleLike}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
