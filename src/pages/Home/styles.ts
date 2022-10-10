import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
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

export const MainText = styled.div`
  // position: absolute;
  // height: 249px;
  // left: 11.46%;
  // right: 53.82%;
  // top: calc(55% - 249px / 2 - 95.5px);
  padding: 50px;

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  display: flex;
  align-items: flex-end;

  color: #ffffff;
`;

export const SecondaryText = styled.div`
  // position: absolute;
  // height: 249px;
  // left: 11.46%;
  // right: 53.82%;
  // top: calc(55% - 63px / 2 + 80.5px);
  padding-left: 50px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 21px;

  color: rgba(210, 215, 211);
`;
