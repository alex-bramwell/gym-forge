import { useRef, useEffect, useState, type ReactNode, type HTMLAttributes } from 'react';
import styles from './AnimatedSection.module.scss';

export interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInScale' | 'slideInRight' | 'none';
  delay?: number;
  stagger?: boolean;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  stagger = false,
  threshold = 0.15,
  className = '',
  style,
  ...rest
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animation === 'none') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, threshold]);

  const classes = [
    styles.animated,
    animation !== 'none' ? styles[animation] : '',
    isVisible ? styles.visible : '',
    stagger ? styles.stagger : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={classes}
      style={{ ...style, '--animation-delay': `${delay}ms` } as React.CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
