import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: #050520;
`;

export const TopNavigation = styled.div`
  position: absolute;
  width: 1110px;
  height: 42px;
  left: 165px;
  top: 30px;
`;

export const Rectangle1 = styled.div`
  position: absolute;
  left: 0%;
  right: 97.3%;
  top: 14.29%;
  bottom: 14.29%;

  text-align: center;
  font-size: 20px;

  background: #ffffff;
  border-radius: 6px;
`;

export const HeaderTitle = styled.div`
  position: absolute;
  left: 3.51%;
  right: 90%;
  top: 14.29%;
  bottom: 11.9%;

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

export const HomeButton = styled(NavLink)`
  position: absolute;
  left: 50vw;
  top: 14.29%;
  bottom: 11.9%;

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;

  text-decoration: none;

  color: #ffffff;
`;

export const AboutButton = styled(NavLink)`
  position: absolute;
  left: 55vw;
  top: 14.29%;
  bottom: 11.9%;

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;

  text-decoration: none;

  color: #ffffff;
`;

export const ProjectsButton = styled(NavLink)`
  position: absolute;
  left: calc(60.85vw + 31.02px);
  top: 14.29%;
  bottom: 11.9%;

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;

  text-decoration: none;

  color: #ffffff;
`;

export const FrogNinja = styled.div`
  position: absolute;
  top: calc(50vh - 182.5px);
  left: calc(50vw - 67.5px);

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  display: block;
  align-items: center;

  text-decoration: none;

  color: #ffffff;
`;

export const FrogNinjaModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  border: 2px solid #000;
  boxshadow: 24;
  p: 4;
`;
