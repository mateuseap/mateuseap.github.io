import {
  SiKubernetes as KubernetesIcon,
  SiArgo as ArgoIcon,
  SiDocker as DockerIcon,
  SiPrometheus as PrometheusIcon,
  SiGrafana as GrafanaIcon,
  SiTraefikproxy as TraefikIcon,
  SiTerraform as TerraformIcon,
  SiTypescript as TypeScriptIcon,
  SiReact as ReactIcon,
  SiNodedotjs as NodeIcon,
  SiNestjs as NestJSIcon,
  SiPostgresql as PostgreSQLIcon,
  SiRedis as RedisIcon,
  SiGithubactions as GitHubActionsIcon,
} from 'react-icons/si';
import { TbCertificate as CertManagerIcon } from 'react-icons/tb';
import {
  AiFillGithub as GitHubIcon,
  AiFillLinkedin as LinkedInIcon,
  AiFillMediumSquare as MediumIcon,
} from 'react-icons/ai';
import avatar from '../assets/avatar.jpg';
import type { TechnologyCardProps, ProjectCardProps } from '../types';

export const PROFILE_PICTURE_URL = avatar;

export const BLOG_URL = 'https://blog.mateuseap.com';

export const CV_URL =
  'https://drive.google.com/file/d/1a-OEa96xpDg5mu_JnUL2n8VsAO3yI0x6/view?usp=sharing';

export const CONTACT_EMAIL = 'mateuseap@mateuseap.com';

export const CORE_DEVELOPMENT: Array<TechnologyCardProps> = [
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'NestJS', Icon: NestJSIcon },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon },
  { name: 'Redis', Icon: RedisIcon },
  { name: 'GitHub Actions', Icon: GitHubActionsIcon },
];

export const PLATFORM_DEVOPS: Array<TechnologyCardProps> = [
  { name: 'Kubernetes (k3s)', Icon: KubernetesIcon },
  { name: 'ArgoCD', Icon: ArgoIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'Prometheus', Icon: PrometheusIcon },
  { name: 'Grafana', Icon: GrafanaIcon },
  { name: 'cert-manager', Icon: CertManagerIcon },
  { name: 'Traefik', Icon: TraefikIcon },
  { name: 'IaC', Icon: TerraformIcon },
];

export const PROJECTS: Array<ProjectCardProps> = [
  {
    id: 'homelab',
    name: 'Homelab',
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
  },
  {
    id: 'pixelhub',
    name: 'PixelHub',
    githubRepoUrl: 'https://github.com/mateuseap/pixelhub',
    deployedAppUrl: 'https://pixelhub.lab.mateuseap.com',
    technologiesUsed: ['Phaser', 'Colyseus', 'LiveKit'],
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
    url: 'https://medium.com/@mateuselias',
    Icon: MediumIcon,
    label: 'Medium',
  },
];
