import React from 'react';
import styles from './UserCard.module.css';

const UserCard = props => {
  const deleteCard = () => {
    props.deleteHandler(props.id);
  };

  return (
    <div className={styles['user-card']}>
      <p>
        <span>Name:</span> {props.name} & <span>Age:</span> {props.age}
      </p>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
};

export default UserCard;
