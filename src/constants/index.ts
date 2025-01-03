import {
  SiHaskell as HaskellIcon,
  SiNestjs as NestJSIcon,
  SiLinux as LinuxIcon,
  SiJest as JestIcon,
  SiPostgresql as PostgreSQLIcon,
  SiFlask as FlaskIcon,
  SiAmazonaws as AWSIcon,
  SiRubyonrails as RubyOnRailsIcon,
} from 'react-icons/si';
import {
  TbBrandTypescript as TypeScriptIcon,
  TbBrandJavascript as JavascriptIcon,
  TbBrandPython as PythonIcon,
  TbBrandHtml5 as Html5Icon,
  TbBrandCss3 as Css3Icon,
  TbBrandReact as ReactIcon,
  TbBrandGit as GitIcon,
  TbBrandDocker as DockerIcon,
  TbBrandDjango as DjangoIcon,
} from 'react-icons/tb';
import {
  BiLogoJava as JavaIcon,
  BiLogoGoogleCloud as GoogleCloudIcon,
} from 'react-icons/bi';
import {
  AiFillGithub as GitHubIcon,
  AiFillLinkedin as LinkedInIcon,
  AiFillMediumSquare as MediumIcon,
} from 'react-icons/ai';
import { DiRuby as RubyIcon } from 'react-icons/di';
import type { TechnologyCardProps, ProjectCardProps } from '../types';

export const PROFILE_PICTURE_URL =
  'https://avatars.githubusercontent.com/u/52019009';

export const PROGRAMMING_LANGUAGES: Array<TechnologyCardProps> = [
  {
    name: 'C',
  },
  {
    name: 'C++',
  },
  {
    name: 'JavaScript',
    Icon: JavascriptIcon,
  },
  {
    name: 'TypeScript',
    Icon: TypeScriptIcon,
  },
  {
    name: 'Python',
    Icon: PythonIcon,
  },
  {
    name: 'Java',
    Icon: JavaIcon,
  },
  {
    name: 'Haskell',
    Icon: HaskellIcon,
  },
  {
    name: 'Ruby',
    Icon: RubyIcon,
  },
];

export const FRAMEWORKS_AND_TECHNOLOGIES: Array<TechnologyCardProps> = [
  {
    name: 'HTML5',
    Icon: Html5Icon,
  },
  {
    name: 'CSS3',
    Icon: Css3Icon,
  },
  {
    name: 'React',
    Icon: ReactIcon,
  },
  {
    name: 'Ruby on Rails',
    Icon: RubyOnRailsIcon,
  },
  {
    name: 'NestJS',
    Icon: NestJSIcon,
  },
  {
    name: 'TypeORM',
  },
  {
    name: 'Linux',
    Icon: LinuxIcon,
  },
  {
    name: 'Git',
    Icon: GitIcon,
  },
  {
    name: 'Docker',
    Icon: DockerIcon,
  },
  {
    name: 'Keycloak',
  },
  {
    name: 'Jest',
    Icon: JestIcon,
  },
  {
    name: 'PostgreSQL',
    Icon: PostgreSQLIcon,
  },
  {
    name: 'Flask',
    Icon: FlaskIcon,
  },
  {
    name: 'Django',
    Icon: DjangoIcon,
  },
  {
    name: 'AWS',
    Icon: AWSIcon,
  },
  {
    name: 'GCP',
    Icon: GoogleCloudIcon,
  },
];

export const PROJECTS: Array<ProjectCardProps> = [
  {
    name: '2048',
    description:
      'My rendition of the classic single-player sliding tile puzzle game.',
    githubRepoUrl: 'https://github.com/mateuseap/2048/',
    deployedAppUrl: 'https://www.mateuseap.com/2048/',
    technologiesUsed: ['JavaScript'],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/2048/28222bcbf6ca60b7ac9ba8536b79ad211439210e/logo.svg',
  },
  {
    name: 'Chess',
    description: 'The classic chess game.',
    githubRepoUrl: 'https://github.com/mateuseap/chess/',
    technologiesUsed: ['Python', 'Pygame'],
    thumbnail: 'https://i.imgur.com/dzr9Dlo.png',
  },
  {
    name: 'FestaLab Challenge',
    description:
      'A user management dashboard with registration, editing, deletion, listing, pagination, and search functionalities.',
    githubRepoUrl: 'https://github.com/mateuseap/festalab-challenge',
    technologiesUsed: ['Ruby on Rails', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/festalab-challenge/main/public/favicon.ico',
  },
  {
    name: 'Frog Ninja',
    description:
      'An engaging 2D platformer featuring a frog, packed with jumps, obstacles, and surprises.',
    deployedAppUrl: 'https://simmer.io/@Meap018/frog-ninja',
    technologiesUsed: ['C#', 'Unity Engine'],
    thumbnail: 'https://i.imgur.com/4tqICzf.png',
  },
  {
    name: 'Oncase Full Stack Challenge',
    description:
      ' A simple web application for managing user data and presenting it through an interactive dashboard.',
    githubRepoUrl: 'https://github.com/mateuseap/oncase-challenge/',
    technologiesUsed: [
      'TypeScript',
      'React',
      'MUI',
      'Styled-Components',
      'ApexCharts',
      'React-Toastify',
      'Axios',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'Swagger',
      'Jest',
      'Docker',
    ],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/Oncase-Challenge/main/front-end/public/logo-icon.png',
  },
  {
    name: 'Palavrinha',
    description:
      'A fun word-guessing game inspired by Wordle, designed for Portuguese speakers.',
    githubRepoUrl: 'https://github.com/mateuseap/palavrinha/',
    deployedAppUrl: 'https://www.mateuseap.com/palavrinha/',
    technologiesUsed: ['JavaScript', 'React'],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/palavrinha/main/public/favicon.png',
  },
];

export const SOCIAL_MEDIAS = [
  {
    url: 'https://www.linkedin.com/in/mateuseliasdeandradepereira/',
    Icon: LinkedInIcon,
  },
  {
    url: 'https://github.com/mateuseap',
    Icon: GitHubIcon,
  },
  {
    url: 'https://medium.com/@mateuselias',
    Icon: MediumIcon,
  },
];
