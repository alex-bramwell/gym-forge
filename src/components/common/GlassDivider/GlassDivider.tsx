import styles from './GlassDivider.module.scss';

export interface GlassDividerProps {
  gradient?: boolean;
  glow?: boolean;
  className?: string;
}

const GlassDivider = ({
  gradient = true,
  glow = false,
  className = '',
}: GlassDividerProps) => {
  const classes = [
    styles.divider,
    gradient ? styles.gradient : '',
    glow ? styles.glow : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} />;
};

export default GlassDivider;
