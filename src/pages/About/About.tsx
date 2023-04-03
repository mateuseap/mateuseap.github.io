import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BookIcon from '@mui/icons-material/Book';
import { Typography } from '@mui/material';
import DefaultPage from '../../components/DefaultPage/DefaultPage';

function About() {
  return (
    <DefaultPage>
      <Timeline
        position='alternate'
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant='body2'
            color='white'
            fontSize='12px'
          >
            Bacharelado em Engenharia da Computação
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='success'>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography
              variant='h6'
              component='span'
              style={{ color: 'white', fontSize: '18px' }}
            >
              Universidade Federal de Pernambuco
            </Typography>
            <Typography style={{ color: 'white', fontSize: '15px' }}>
              2019 - 20??
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'
            color='white'
            fontSize='12px'
          >
            Técnico em Informática Integrado ao Ensino Médio
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary'>
              <BookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography
              variant='h6'
              component='span'
              style={{ color: 'white', fontSize: '18px' }}
            >
              ETE José Humberto de Moura Cavalcanti
            </Typography>
            <Typography style={{ color: 'white', fontSize: '15px' }}>
              2016 - 2018
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </DefaultPage>
  );
}

export default About;
