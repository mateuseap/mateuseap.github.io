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
  .openNav {
    display: flex;
  }
  .openBurger {
    div {
      background: #000000;
    }
    .line1 {
      transform: rotateZ(45deg) translateY(490%);
    }

    .line2 {
      display: none;
    }

    .line3 {
      transform: rotateZ(-45deg) translateY(-490%);
    }
  }
  @media (max-width: 1300px) {
    width: 90vw;
    left: 0;
    margin: 0 5vw;
  }
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

/*export const HomeButton = styled(NavLink)`
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
`;*/

export const BurgerMenu = styled.div`
  position: absolute;
  right: 0%;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 40px;
  z-index: 15;
  div {
    width: 40px;
    height: 5px;
    background: #ffffff;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuItems = styled.div`
  position: absolute;
  right: 0%;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  a {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-decoration: none;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 0px;
    width: 200px;
    height: 130px;
    padding: 30px 0;
    padding-top: 70px;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    a {
      margin: 15px 0;
      color: #000000;
    }
    transform: translateY(-5%) translateX(5%);
    background: #ffffff;
    display: none;
  }
`;

export const MainText = styled.div`
  position: absolute;
  height: 249px;
  left: 11.46%;
  right: 53.82%;
  top: calc(55% - 249px / 2 - 95.5px);

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
  position: absolute;
  height: 249px;
  left: 11.46%;
  right: 53.82%;
  top: calc(55% - 63px / 2 + 80.5px);

  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 21px;

  color: rgba(210, 215, 211);
`;
