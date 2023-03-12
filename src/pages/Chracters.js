import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions, Container, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';

const Chracters = () => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
      const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const characterApi = await api.json();
        setCharacters(characterApi.results);
      };
      reqApi();
    }, []);
  
    return (
      
      characters && (
          <Container sx={{mt: 10}}>
            <Grid container spacing={2}>
                {characters.map((characterApi, index) => (
                    <Grid item xs={3} textAlign="center" key={characterApi.id}>
                <Card sx={{ maxWidth: 345, minHeight: 400 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={characterApi.image}
                    title={characterApi.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {characterApi.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {characterApi.status === 'Alive' ? (
                            <>
                                <span className="alive" />
                                <span className="alive-item">Alive</span>
                            </>
                            ) : (
                            <>
                                <span className="dead" />
                                <span className="dead-item">Dead</span>
                            </>
                            )}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container spacing={2}>
                                <Grid item xs={6} textAlign="center">
                                    <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                        </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} textAlign="center">
                                <Button
                                    component={Link}
                                    to={`/character/${characterApi.id}`}
                                    color="inherit"
                                    size="small"
                                    >
                                    View More
                                </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                  </Grid>
              ))}
                </Grid>
        </Container>
      )
    );
} 
export default Chracters; 