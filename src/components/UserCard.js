import React from 'react';
import styles from './UserCard.module.css';

const UserCard = props => {
  const deleteCard = () => {
    props.deleteHandler(props.id);
  };

  return (
    <div className={styles['user-card']}>
      <p>
        <span>Name:</span> {props.name}{' '}
        <span style={{ color: '#777', padding: '0px 2px' }}>&</span>{' '}
        <span>Age:</span> {props.age}
      </p>
      <div>
        <button className={styles['edit-btn']}>Edit</button>
        <button className={styles['delete-btn']} onClick={deleteCard}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
