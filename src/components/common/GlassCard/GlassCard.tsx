import type { HTMLAttributes, ReactNode } from 'react';
import styles from './GlassCard.module.scss';

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  blur?: 'light' | 'medium' | 'heavy';
  tint?: 'neutral' | 'accent' | 'secondary';
  hoverable?: boolean;
  glow?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const GlassCard = ({
  children,
  blur = 'medium',
  tint = 'neutral',
  hoverable = false,
  glow = false,
  padding = 'medium',
  className = '',
  ...rest
}: GlassCardProps) => {
  const classes = [
    styles.glassCard,
    styles[`blur-${blur}`],
    styles[`tint-${tint}`],
    styles[`padding-${padding}`],
    hoverable ? styles.hoverable : '',
    glow ? styles.glow : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default GlassCard;
