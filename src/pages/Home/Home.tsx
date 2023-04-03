import fox from '../../assets/fox.png';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import GitHubLogo from '../../assets/github-logo.svg';
import LinkedInLogo from '../../assets/linkedin-logo.svg';
import InstagramLogo from '../../assets/instagram-logo.svg';

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

  return (
    <DefaultPage>
      <div className='h-screen flex flex-row justify-center items-center'>
        <div className='w-full flex flex-col gap-y-4'>
          <div className='text-5xl text-center hover:bg-[#dedede] hover:text-black'>
            Meu nome é{' '}
            <span className='text-black bg-[#dedede]'>Mateus Elias</span>, seja
            bem vindo ao meu website pessoal.
          </div>
          <div className='flex justify-center gap-x-6'>
            {medias.map(media => {
              return (
                <a
                  key={media.alt}
                  href={media.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='h-12 w-12 rounded-lg bg-[#dedede]'
                    src={media.svg}
                    alt={media.alt}
                    draggable='false'
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className='w-full'>
          <img
            src={fox}
            alt='Fox 🦊'
            style={{
              position: 'fixed',
              width: '50vw',
              height: 'auto',
              right: '0',
              bottom: '0',
            }}
          />
        </div>
      </div>
    </DefaultPage>
  );
}

export default Home;
