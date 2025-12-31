import React, { useState } from 'react';
import { Modal, Button } from '../common';
import { AuthModal } from '../AuthModal';
import styles from './TrialModal.module.scss';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');

  const handleCreateAccount = () => {
    setAuthMode('signup');
    setStep(2);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const resetModal = () => {
    setStep(1);
    setAuthMode('signup');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const handleAuthSuccess = () => {
    resetModal();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {step === 1 ? (
        <div className={styles.content}>
          <div className={styles.stepIndicator}>
            <div className={`${styles.step} ${styles.active}`}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepLabel}>What's Included</span>
            </div>
            <div className={styles.stepDivider} />
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepLabel}>Create Account</span>
            </div>
          </div>

          <h2 className={styles.title}>Start Your Free Trial</h2>
          <p className={styles.subtitle}>
            Experience the CrossFit Comet difference with no commitment
          </p>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>
                  <span className={styles.icon}>✓</span>
                  Personal Consultation
                </h3>
                <p className={styles.benefitText}>
                  Meet with a coach to discuss your fitness goals and experience level
                </p>
              </div>
            </div>

            <div className={styles.benefit}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>
                  <span className={styles.icon}>✓</span>
                  Facility Tour
                </h3>
                <p className={styles.benefitText}>
                  Explore our gym and learn about our equipment and amenities
                </p>
              </div>
            </div>

            <div className={styles.benefit}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>
                  <span className={styles.icon}>✓</span>
                  No Obligations
                </h3>
                <p className={styles.benefitText}>
                  Try us out with absolutely no pressure to join or commitment required
                </p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="large"
              fullWidth
              onClick={handleCreateAccount}
            >
              Continue to Create Account
            </Button>
            <p className={styles.note}>
              Already have an account?{' '}
              <button onClick={handleSignIn} className={styles.link}>
                Sign in
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.stepIndicator}>
            <button className={`${styles.step} ${styles.clickable}`} onClick={handleBack}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepLabel}>What's Included</span>
            </button>
            <div className={styles.stepDivider} />
            <div className={`${styles.step} ${styles.active}`}>
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepLabel}>{authMode === 'signup' ? 'Create Account' : 'Sign In'}</span>
            </div>
          </div>

          <div className={styles.authContainer}>
            <AuthModal
              isOpen={true}
              onClose={handleAuthSuccess}
              initialMode={authMode}
              embedded={true}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default TrialModal;
