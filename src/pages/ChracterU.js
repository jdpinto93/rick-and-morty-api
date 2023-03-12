import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

const ChracterU = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState(null);    

    useEffect(() => {
        const reqApi = async () => {
          const api = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          const characterApi = await api.json();
          setCharacters(characterApi);
        };
        reqApi();
    }, []);

  return (
    characters && (
        <Container>
        <h1>{characters.name}</h1>
        <img src={characters.image} alt={characters.name} />
        <p>{characters.status}</p>
        <p>{characters.species}</p>
        <p>{characters.gender}</p>
        <Button 
            component={ Link }
            to="/characters"
            variant="outlined"
            size="large"
            color="secondary"
            endIcon={<SendIcon />}>
            Back Characters
        </Button>
        </Container>
  ));
};

export default ChracterU;
