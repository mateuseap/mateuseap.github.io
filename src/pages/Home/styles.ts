import styled from 'styled-components';

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
