import React from 'react';
import Modal from 'react-modal';
import styles from './ValidModal.module.css';

Modal.setAppElement('#root');
const ValidModal = props => {
  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setModalIsOpen(false)}
        className={styles.Modal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          content: {
            borderRadius: '10px',
          },
        }}
      >
        <div className={styles['modal-header']}>
          {!props.ageChecker ? <h3>Invalid Age</h3> : <h3>Invalid Input</h3>}
        </div>
        <div className={styles['modal-body']}>
          {!props.ageChecker ? (
            <p>Please enter a valid age (&gt; 0)</p>
          ) : (
            <p>Please enter a valid name and age (non-empty values)</p>
          )}

          <button onClick={() => props.setModalIsOpen(false)}>Okay</button>
        </div>
      </Modal>
    </>
  );
};

export default ValidModal;
