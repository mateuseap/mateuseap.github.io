import clsx from 'clsx';
import React from 'react';
import type { LinkProps } from '../../types';

function Link({
  to,
  leftIcon,
  rightIcon,
  size = 'base',
  variant = 'primary',
  children,
  external,
  className,
  ...restProps
}: LinkProps) {
  const iconWithStyles = (
    icon: React.ReactElement,
    size: 'sm' | 'base' | 'lg' | 'xl',
  ) =>
    React.cloneElement(icon, {
      className: clsx(
        'bg-rose-100/30 p-1',
        'shadow-md rounded-md',
        'group-hover:scale-[1.2] group-hover:shadow-[#b0b0b0] group-active:translate-y-[2px]',
        'transition-all duration-300 ease-out',
      ),
      size: size === 'sm' ? 24 : 32,
      ...icon.props,
    });

  return (
    <a
      href={to}
      className={clsx(
        'group flex w-fit items-center gap-2',
        `text-${size}`,
        {
          'hover:underline': variant === 'link',
        },
        className,
      )}
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...restProps}
    >
      {leftIcon && iconWithStyles(leftIcon, size)}
      {children}
      {rightIcon && iconWithStyles(rightIcon, size)}
    </a>
  );
}

export default Link;
