import styled from 'styled-components';

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
