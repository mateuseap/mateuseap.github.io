import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: #050520;
`;

export const TopNavigation = styled.div`
  height: 70px;
  top: 5px;
  display: flex;
  width: 100%;
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
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  width: 100%;
  color: #ffffff;
  padding-left: 10px;
`;

export const HomeButton = styled(NavLink)`
  color: #ffffff;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
`;

export const AboutButton = styled(NavLink)`
  color: #ffffff;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
`;

export const ProjectsButton = styled(NavLink)`
  color: #ffffff;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
`;
