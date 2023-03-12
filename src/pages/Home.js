import styled from "@emotion/styled";
import ImageHome from "./img/rick-morty.png"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Img = styled("img")({
    height: "400px",
    width: "auto",
    objectFit: "cover",
    objectPosition: "center",
    margin: "30px",
});

const Home = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={6} textAlign="center">
                        <Img
                            src={ImageHome} 
                            alt="Rick and Morty"
                        />
                        <Button 
                            component={ Link }
                            to="/characters"
                            variant="outlined"
                            size="large"
                            color="secondary"
                            endIcon={<SendIcon />}>
                            View Characters
                        </Button>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                    </Grid>
                </Container>
        </>
    );
} 
export default Home; 