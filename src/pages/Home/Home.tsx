import { AiFillGithub as GitHubIcon } from 'react-icons/ai';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import {
  PROFILE_PICTURE_URL,
  PROGRAMMING_LANGUAGES,
  FRAMEWORKS_AND_TECHNOLOGIES,
  PROJECTS,
  SOCIAL_MEDIAS,
} from '../../constants';
import type { TechnologyCardProps } from '../../types';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Link from '../../components/Link/Link';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <DefaultPage>
      <main className='flex flex-col mx-auto min-h-screen max-w-[720px] px-4 pt-20 gap-y-6'>
        <div className='w-full flex items-center sm:justify-end gap-x-2'>
          {SOCIAL_MEDIAS.map(({ url, Icon }) => (
            <Link
              to={url}
              external
              rightIcon={<Icon size={34} />}
              size='lg'
              className='w-fit font-semibold'
            />
          ))}
          <a
            href='https://mateuseap.blog/'
            className='font-semibold text-lg'
            target='_blank'
            rel='noopener noreferrer'
          >
            Blog
          </a>
        </div>
        <div className='h-full w-full flex justify-center sm:justify-start items-center text-3xl gap-x-4 font-medium'>
          <img
            src={PROFILE_PICTURE_URL}
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
            <div>Junior Full Stack Software Engineer @ FestaLab</div>
          </div>
          <div className='flex gap-x-1 items-center'>
            <AcademicCapIcon className='h-5 w-5' />
            <div>B.Sc. Student of Computer Science @ CIn/UFPE</div>
          </div>
          <div className='flex gap-x-1 items-center'>
            <MapPinIcon className='h-5 w-5' />
            <div>PE - Brazil</div>
          </div>
        </div>
        <section className='mt-2'>
          <p className='text-xl font-medium'>My Skills</p>
          <div className='mt-4'>
            <p className='text-sm font-normal'>Programming Languages</p>
            <div className='mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5'>
              {PROGRAMMING_LANGUAGES.map((tech: TechnologyCardProps) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <p className='text-sm font-normal'>Frameworks / Technologies</p>
            <div className='mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5'>
              {FRAMEWORKS_AND_TECHNOLOGIES.map((tech: TechnologyCardProps) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </section>
        <section className='mt-2'>
          <p className='text-xl font-medium'>My Projects</p>
          <div className='mt-5 grid grid-cols-1 gap-2'>
            {PROJECTS.map(project => (
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
        <Footer />
      </main>
    </DefaultPage>
  );
}

export default Home;
