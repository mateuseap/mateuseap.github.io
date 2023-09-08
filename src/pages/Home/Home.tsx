import DefaultPage from '../../components/DefaultPage/DefaultPage';
import GitHubLogo from '../../assets/github-logo.svg';
import LinkedInLogo from '../../assets/linkedin-logo.svg';
import InstagramLogo from '../../assets/instagram-logo.svg';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

function Home() {
  const medias = [
    {
      svg: LinkedInLogo,
      url: 'https://www.linkedin.com/in/mateuseliasdeandradepereira/',
      alt: 'Logo do LinkedIn',
    },
    {
      svg: GitHubLogo,
      url: 'https://github.com/mateuseap',
      alt: 'Logo do GitHub',
    },
    {
      svg: InstagramLogo,
      url: 'https://www.instagram.com/mateuseap/',
      alt: 'Logo do Instagram',
    },
  ];

  const profilePicture = 'https://avatars.githubusercontent.com/u/52019009';

  return (
    <DefaultPage sidebar={false}>
      <main className='flex flex-col mx-auto min-h-screen max-w-[720px] px-4 pt-40 gap-y-6'>
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
        <div className='h-full w-full font-light'>
          Passionate about coding and committed to using technology to assist
          and empower others, I actively seek out opportunities to collaborate
          and innovate.
        </div>
        <div className='h-full w-full flex flex-col sm:flex-row gap-x-4 text-xs font-medium text-[#b0b0b0] border-[#909090] border-t border-b items-center justify-center pt-2 pb-2'>
          <div className='flex gap-x-1 items-center'>
            <BriefcaseIcon className='h-5 w-5' />
            <div>Full Stack Developer @ Oncase</div>
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
      </main>
    </DefaultPage>
  );
}

export default Home;
