import DefaultPage from '../../components/DefaultPage/DefaultPage';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import TechnologyCard, {
  TechnologyCardProps,
} from '../../components/TechnologyCard/TechnologyCard';
import {
  SiHaskell as HaskellIcon,
  SiNestjs as NestJSIcon,
  SiLinux as LinuxIcon,
  SiJest as JestIcon,
  SiPostgresql as PostgreSQLIcon,
  SiFlask as FlaskIcon,
  SiAmazonaws as AWSIcon,
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
import { AiFillGithub as GitHubIcon } from 'react-icons/ai';
import ProjectCard, {
  ProjectCardProps,
} from '../../components/ProjectCard/ProjectCard';
import clsx from 'clsx';

function Home() {
  const profilePicture = 'https://avatars.githubusercontent.com/u/52019009';

  const usedProgrammingLanguages: Array<TechnologyCardProps> = [
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
  ];

  const usedFrameworksAndTechnologies: Array<TechnologyCardProps> = [
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

  const projects: Array<ProjectCardProps> = [
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
      name: 'Palavrinha',
      description:
        'A fun word-guessing game inspired by Wordle, designed for Portuguese speakers.',
      githubRepoUrl: 'https://github.com/mateuseap/palavrinha/',
      deployedAppUrl: 'https://www.mateuseap.com/palavrinha/',
      technologiesUsed: ['JavaScript', 'React'],
      thumbnail:
        'https://raw.githubusercontent.com/mateuseap/palavrinha/main/public/favicon.png',
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
      name: 'Chess',
      description: 'The classic chess game.',
      githubRepoUrl: 'https://github.com/mateuseap/chess/',
      technologiesUsed: ['Python', 'Pygame'],
      thumbnail: 'https://i.imgur.com/dzr9Dlo.png',
    },
  ];

  return (
    <DefaultPage>
      <main className='flex flex-col mx-auto min-h-screen max-w-[720px] px-4 pt-20 gap-y-6'>
        <div className='h-full w-full flex justify-center sm:justify-start items-center text-3xl gap-x-4 font-medium'>
          <img
            src={profilePicture}
            alt='Foto de Mateus Elias'
            className='rounded-full shadow-md h-28 w-28 border-white border-2'
            draggable='false'
          />
          <div className='flex flex-col'>
            Mateus
            <br />
            Elias
            <br />
            <div className='text-sm pt-1'>@mateuseap</div>
          </div>
        </div>
        <div className='h-full w-full font-light mt-2'>
          Passionate about coding and committed to using technology to assist
          and empower others, I actively seek out opportunities to collaborate
          and innovate.
        </div>
        <div className='h-full w-full flex flex-col sm:flex-row gap-x-4 text-xs font-medium text-[#b0b0b0] border-[#909090] border-t border-b items-center justify-center pt-2 pb-2'>
          <div className='flex gap-x-1 items-center'>
            <BriefcaseIcon className='h-5 w-5' />
            <div>Software Engineer Trainee II @ Oncase</div>
          </div>
          <div className='flex gap-x-1 items-center'>
            <AcademicCapIcon className='h-5 w-5' />
            <div>B.Sc. Student of Computer Science @ CIn/UFPE</div>
          </div>
          <div className='flex gap-x-1 items-center'>
            <MapPinIcon className='h-5 w-5' />
            <div>Pernambuco - Brazil</div>
          </div>
        </div>
        <section className='mt-2'>
          <p className='text-xl font-medium'>My Skills</p>
          <div className='mt-4'>
            <p className='text-sm font-normal'>Programming Languages</p>
            <div className='mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5'>
              {usedProgrammingLanguages.map((tech: TechnologyCardProps) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <p className='text-sm font-normal'>Frameworks / Technologies</p>
            <div className='mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5'>
              {usedFrameworksAndTechnologies.map(
                (tech: TechnologyCardProps) => (
                  <TechnologyCard key={tech.name} {...tech} />
                ),
              )}
            </div>
          </div>
        </section>
        <section className='mt-2'>
          <p className='text-xl font-medium'>My Projects</p>
          <div className='mt-5 grid grid-cols-1 gap-2'>
            {projects.map(project => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
          <div className='mt-6 flex justify-center'>
            <p className='text-sm font-normal flex items-center gap-x-2'>
              See more of my projects at
              <a
                className={clsx(
                  'flex items-center gap-x-2 rounded-lg border-[1px] border-none bg-white/5 p-2',
                  'transition-all duration-500 ease-out',
                  'hover:bg-white/10',
                )}
                href='https://github.com/mateuseap'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon size={24} /> @mateuseap
              </a>
            </p>
          </div>
        </section>
        <div className='mt-5 border-[#909090] border-t'/>
        <div className='mt-5 mb-20 text-center'>
          Portfolio still under development...
        </div>
      </main>
    </DefaultPage>
  );
}

export default Home;
