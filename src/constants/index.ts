import {
  SiHaskell as HaskellIcon,
  SiNestjs as NestJSIcon,
  SiLinux as LinuxIcon,
  SiJest as JestIcon,
  SiPostgresql as PostgreSQLIcon,
  SiFlask as FlaskIcon,
  SiAmazonaws as AWSIcon,
  SiRubyonrails as RubyOnRailsIcon,
  SiRedis as RedisIcon,
  SiNodedotjs as NodeIcon,
  SiKubernetes as KubernetesIcon,
  SiArgo as ArgoIcon,
  SiPrometheus as PrometheusIcon,
  SiGrafana as GrafanaIcon,
  SiTraefikproxy as TraefikIcon,
  SiTerraform as TerraformIcon,
  SiGithubactions as GitHubActionsIcon,
  SiStreamlit as StreamlitIcon,
  SiFastapi as FastAPIIcon,
  SiSpringboot as SpringBootIcon,
  SiApacheairflow as AirflowIcon,
  SiAmazondynamodb as DynamoDBIcon,
  SiCredly as CredlyIcon,
  SiLeetcode as LeetCodeIcon,
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
  TbCertificate as CertManagerIcon,
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
import avatar from '../assets/avatar.jpg';
import homelabIcon from '../assets/homelab-icon.svg';
import chesskernelIcon from '../assets/chesskernel-icon.svg';
import pixelhubIcon from '../assets/pixelhub-icon.svg';
import mixtapeIcon from '../assets/mixtape-icon.svg';
import type { TechnologyCardProps, ProjectCardProps } from '../types';

export const PROFILE_PICTURE_URL = avatar;

export const BLOG_URL = 'https://blog.mateuseap.com';

export const CV_URL =
  'https://drive.google.com/file/d/1O1jegVA_yXVj4QBg2jkAnX64loNN9v0e/view?usp=sharing';

export const CONTACT_EMAIL = 'mateuseap@mateuseap.com';

export const PROGRAMMING_LANGUAGES: Array<TechnologyCardProps> = [
  { name: 'Python', Icon: PythonIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'JavaScript', Icon: JavascriptIcon },
  { name: 'Java', Icon: JavaIcon },
  { name: 'Ruby', Icon: RubyIcon },
  { name: 'C' },
  { name: 'C++' },
  { name: 'Haskell', Icon: HaskellIcon },
];

export const FRAMEWORKS_AND_TECHNOLOGIES: Array<TechnologyCardProps> = [
  { name: 'FastAPI', Icon: FastAPIIcon },
  { name: 'Streamlit', Icon: StreamlitIcon },
  { name: 'Django', Icon: DjangoIcon },
  { name: 'Flask', Icon: FlaskIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'NestJS', Icon: NestJSIcon },
  { name: 'Spring Boot', Icon: SpringBootIcon },
  { name: 'Ruby on Rails', Icon: RubyOnRailsIcon },
  { name: 'TypeORM' },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon },
  { name: 'DynamoDB', Icon: DynamoDBIcon },
  { name: 'Redis', Icon: RedisIcon },
  { name: 'Keycloak' },
  { name: 'Jest', Icon: JestIcon },
  { name: 'HTML5', Icon: Html5Icon },
  { name: 'CSS3', Icon: Css3Icon },
  { name: 'Git', Icon: GitIcon },
];

export const PLATFORM_AND_DEVOPS: Array<TechnologyCardProps> = [
  { name: 'Docker', Icon: DockerIcon },
  { name: 'AWS', Icon: AWSIcon },
  { name: 'Kubernetes (k3s)', Icon: KubernetesIcon },
  { name: 'IaC', Icon: TerraformIcon },
  { name: 'Apache Airflow', Icon: AirflowIcon },
  { name: 'GCP', Icon: GoogleCloudIcon },
  { name: 'Grafana', Icon: GrafanaIcon },
  { name: 'Prometheus', Icon: PrometheusIcon },
  { name: 'GitHub Actions', Icon: GitHubActionsIcon },
  { name: 'ArgoCD', Icon: ArgoIcon },
  { name: 'Traefik', Icon: TraefikIcon },
  { name: 'cert-manager', Icon: CertManagerIcon },
  { name: 'Linux', Icon: LinuxIcon },
];

export const PROJECTS: Array<ProjectCardProps> = [
  {
    id: 'homelab',
    name: 'HomeLab',
    githubRepoUrl: 'https://github.com/mateuseap/homelab',
    deployedAppUrl: 'https://homelab.mateuseap.com',
    technologiesUsed: [
      'k3s',
      'ArgoCD',
      'Prometheus',
      'Grafana',
      'cert-manager',
      'Traefik',
    ],
    thumbnail: homelabIcon,
  },
  {
    id: 'chesskernel',
    name: 'ChessKernel',
    githubRepoUrl: 'https://github.com/mateuseap/chesskernel',
    deployedAppUrl: 'https://chesskernel.com',
    technologiesUsed: [
      'NestJS',
      'React',
      'Socket.IO',
      'PostgreSQL',
      'Redis',
      'Stockfish',
    ],
    thumbnail: chesskernelIcon,
  },
  {
    id: 'pixelhub',
    name: 'PixelHub',
    githubRepoUrl: 'https://github.com/mateuseap/pixelhub',
    deployedAppUrl: 'https://pixelhub.lab.mateuseap.com',
    technologiesUsed: ['Phaser', 'Colyseus', 'LiveKit'],
    thumbnail: pixelhubIcon,
  },
  {
    id: 'mixtape',
    name: 'Mixtape',
    githubRepoUrl: 'https://github.com/mateuseap/mixtape',
    deployedAppUrl: 'https://mixtape.lab.mateuseap.com',
    technologiesUsed: ['Node.js', 'Express', 'Three.js', 'SQLite'],
    thumbnail: mixtapeIcon,
  },
  {
    id: 'oncase',
    name: 'Oncase Full Stack Challenge',
    githubRepoUrl: 'https://github.com/mateuseap/oncase-challenge/',
    technologiesUsed: [
      'TypeScript',
      'React',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'Docker',
      'Jest',
    ],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/Oncase-Challenge/main/front-end/public/logo-icon.png',
  },
  {
    id: 'domino',
    name: 'Domino',
    githubRepoUrl: 'https://github.com/mateuseap/domino/',
    deployedAppUrl: 'https://domino-lovat.vercel.app/',
    technologiesUsed: ['React', 'Python', 'Flask', 'Flask-SocketIO'],
    thumbnail: 'https://i.imgur.com/wEZh4Qf.png',
  },
  {
    id: 'festalab',
    name: 'FestaLab Challenge',
    githubRepoUrl: 'https://github.com/mateuseap/festalab-challenge',
    technologiesUsed: ['Ruby on Rails', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/festalab-challenge/main/public/favicon.ico',
  },
  {
    id: 'palavrinha',
    name: 'Palavrinha',
    githubRepoUrl: 'https://github.com/mateuseap/palavrinha/',
    deployedAppUrl: 'https://www.mateuseap.com/palavrinha/',
    technologiesUsed: ['JavaScript', 'React'],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/palavrinha/main/public/favicon.png',
  },
  {
    id: '2048',
    name: '2048',
    githubRepoUrl: 'https://github.com/mateuseap/2048/',
    deployedAppUrl: 'https://www.mateuseap.com/2048/',
    technologiesUsed: ['JavaScript'],
    thumbnail:
      'https://raw.githubusercontent.com/mateuseap/2048/28222bcbf6ca60b7ac9ba8536b79ad211439210e/logo.svg',
  },
  {
    id: 'frogNinja',
    name: 'Frog Ninja',
    deployedAppUrl: 'https://simmer.io/@Meap018/frog-ninja',
    technologiesUsed: ['C#', 'Unity Engine'],
    thumbnail: 'https://i.imgur.com/4tqICzf.png',
  },
  {
    id: 'chess',
    name: 'Chess',
    githubRepoUrl: 'https://github.com/mateuseap/chess/',
    technologiesUsed: ['Python', 'Pygame'],
    thumbnail: 'https://i.imgur.com/dzr9Dlo.png',
  },
];

export const SOCIAL_MEDIAS = [
  {
    url: 'https://www.linkedin.com/in/mateuseliasdeandradepereira/',
    Icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {
    url: 'https://github.com/mateuseap',
    Icon: GitHubIcon,
    label: 'GitHub',
  },
  {
    url: 'https://www.credly.com/users/mateuseap/badges/credly',
    Icon: CredlyIcon,
    label: 'Credly',
  },
  {
    url: 'https://leetcode.com/u/meap/',
    Icon: LeetCodeIcon,
    label: 'LeetCode',
  },
  {
    url: 'https://medium.com/@mateuselias',
    Icon: MediumIcon,
    label: 'Medium',
  },
];
