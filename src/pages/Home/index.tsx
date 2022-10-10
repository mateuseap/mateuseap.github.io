import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import {
  Background,
  TopNavigation,
  Rectangle1,
  HeaderTitle,
  HomeButton,
  AboutButton,
  ProjectsButton,
  MainText,
  SecondaryText,
} from './styles';
import fox from '../../assets/fox.png';
import { Links } from '../../types/enums';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    // <Background>
    //   <TopNavigation>
    //     <Rectangle1>😀</Rectangle1>
    //     <HeaderTitle> mateuseap </HeaderTitle>
    //     <span style={{ whiteSpace: 'nowrap' }}>
    //       <HomeButton to={Links.HOME}>Home</HomeButton>
    //       <AboutButton to={Links.ABOUT}>Sobre mim</AboutButton>
    //       <ProjectsButton to={Links.PROJECTS}>Projetos</ProjectsButton>
    //     </span>
    //   </TopNavigation>
    //   <div
    //     style={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <div>
    //       <MainText>
    //         Meu nome é Mateus Elias, seja bem vindo ao meu website pessoal.
    //       </MainText>
    //       <SecondaryText>
    //         Ainda estamos em fase de construção, em breve o website estará
    //         recheado 😎
    //       </SecondaryText>
    //     </div>
    //     <div>
    //       <img
    //         src={fox}
    //         alt='Fox 🦊'
    //         style={{
    //           // position: 'absolute',
    //           width: '45vw',
    //           height: '90vh',
    //           // left: '50vw',
    //           // top: '10vh',
    //         }}
    //       />
    //     </div>
    //   </div>
    // </Background>
    <Background>
      <TopNavigation>
        <HeaderTitle>😀 mateuseap </HeaderTitle>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <HomeButton to={Links.HOME}>Home</HomeButton>
          <AboutButton to={Links.ABOUT}>Sobre mim</AboutButton>
          <ProjectsButton to={Links.PROJECTS}>Projetos</ProjectsButton>
        </div>
      </TopNavigation>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item md={6}>
            <Item>
              <MainText>
                Meu nome é Mateus Elias, seja bem vindo ao meu website pessoal.
              </MainText>
              <SecondaryText>
                Ainda estamos em fase de construção, em breve o website estará
                recheado 😎
              </SecondaryText>
            </Item>
          </Grid>
          <Grid item md={6}>
            <Item>
              <img
                src={fox}
                alt='Fox 🦊'
                style={{
                  width: '100%',
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Background>
  );
}

export default Home;
