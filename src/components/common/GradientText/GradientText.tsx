import type { ReactNode } from 'react';
import styles from './GradientText.module.scss';

export interface GradientTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  gradient?: 'accent' | 'secondary' | 'warm' | 'cool';
  className?: string;
}

const GradientText = ({
  children,
  as: Component = 'span',
  gradient = 'accent',
  className = '',
}: GradientTextProps) => {
  const classes = [styles.gradientText, styles[gradient], className]
    .filter(Boolean)
    .join(' ');

  return <Component className={classes}>{children}</Component>;
};

export default GradientText;
