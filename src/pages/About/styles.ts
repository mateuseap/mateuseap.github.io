import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
