interface LogoProps {
  size?: number;
  className?: string;
}

function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <svg
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='mateuseap'
      width={size}
      height={size}
      className={className}
    >
      <rect width='64' height='64' rx='15' fill='#0f7a63' />
      <path
        d='M15 47V19h6.5L32 34l10.5-15H49v28h-7.2V31.5L32 45l-9.8-13.5V47z'
        fill='#fff'
      />
    </svg>
  );
}

export default Logo;
