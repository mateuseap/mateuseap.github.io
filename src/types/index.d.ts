import React from 'react';
import { type IconType } from 'react-icons';

export interface DefaultPageProps {
  className?: string;
  childrenClassName?: string;
  children?: React.ReactNode;
  HtmlTag?: keyof JSX.IntrinsicElements;
  starfield?: boolean;
}

export interface LinkProps {
  to: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'primary' | 'link' | 'icon-button';
  children?: React.ReactNode;
  external?: boolean;
  className?: string;
}

export interface ProjectCardProps {
  name: string;
  description: string;
  githubRepoUrl?: string;
  deployedAppUrl?: string;
  technologiesUsed: Array<string>;
  thumbnail: string;
}

export interface StarfieldProps {
  speed?: number;
  className?: string;
}

export interface TechnologyCardProps {
  name: string;
  Icon?: IconType | undefined;
}
