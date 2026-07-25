import { useTranslation } from 'react-i18next';
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
  PLATFORM_AND_DEVOPS,
  PROJECTS,
} from '../../constants';
import type { TechnologyCardProps } from '../../types';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import Header from '../../components/Header/Header';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';

function Home() {
  const { t } = useTranslation();

  return (
    <DefaultPage>
      <Header />
      <main
        id='top'
        className='flex flex-col mx-auto w-full min-h-screen max-w-[720px] scroll-mt-24 px-4 pt-10 gap-y-6 text-ink dark:text-ink-dark'
      >
        <div className='w-full flex justify-center sm:justify-start items-center text-3xl gap-x-4 font-medium'>
          <img
            src={PROFILE_PICTURE_URL}
            alt='Mateus Elias'
            className='rounded-full shadow-md h-28 w-28 border-2 border-accent dark:border-accent-dark'
            draggable='false'
            width='112'
            height='112'
          />
          <div className='flex flex-col'>
            Mateus
            <br />
            Elias
            <span className='text-sm pt-1 font-mono text-muted dark:text-muted-dark'>
              @mateuseap
            </span>
          </div>
        </div>

        <p className='w-full font-light'>{t('hero.bio')}</p>

        <div className='w-full flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 text-xs font-medium text-muted dark:text-muted-dark border-line dark:border-line-dark border-t border-b items-center justify-center py-2'>
          <div className='flex gap-x-1 items-center'>
            <BriefcaseIcon className='h-5 w-5' />
            <span>{t('hero.role')}</span>
          </div>
          <div className='flex gap-x-1 items-center'>
            <AcademicCapIcon className='h-5 w-5' />
            <span>{t('hero.education')}</span>
          </div>
          <div className='flex gap-x-1 items-center'>
            <MapPinIcon className='h-5 w-5' />
            <span>{t('hero.location')}</span>
          </div>
        </div>

        <section className='mt-2'>
          <h2 className='text-xl font-semibold'>{t('skills.title')}</h2>
          <div className='mt-4'>
            <p className='text-sm font-medium text-muted dark:text-muted-dark'>
              {t('skills.languages')}
            </p>
            <div className='mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4'>
              {PROGRAMMING_LANGUAGES.map((tech: TechnologyCardProps) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <p className='text-sm font-medium text-muted dark:text-muted-dark'>
              {t('skills.frameworks')}
            </p>
            <div className='mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4'>
              {FRAMEWORKS_AND_TECHNOLOGIES.map((tech: TechnologyCardProps) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <p className='text-sm font-medium text-muted dark:text-muted-dark'>
              {t('skills.platform')}
            </p>
            <div className='mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4'>
              {PLATFORM_AND_DEVOPS.map((tech: TechnologyCardProps) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </section>

        <section className='mt-2'>
          <h2 className='text-xl font-semibold'>{t('projects.title')}</h2>
          <div className='mt-5 grid grid-cols-1 gap-3'>
            {PROJECTS.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
                description={t(`projects.items.${project.id}`, {
                  defaultValue: project.description,
                })}
              />
            ))}
          </div>
          <div className='mt-6 flex justify-center'>
            <p className='text-sm flex items-center gap-x-2 text-muted dark:text-muted-dark'>
              {t('projects.seeMore')}
              <a
                className={clsx(
                  'flex items-center gap-x-2 rounded-lg border border-line dark:border-line-dark px-2 py-1 font-medium text-ink dark:text-ink-dark',
                  'transition-colors duration-300 ease-out',
                  'hover:text-accent dark:hover:text-accent-dark',
                )}
                href='https://github.com/mateuseap'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon size={20} /> @mateuseap
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
