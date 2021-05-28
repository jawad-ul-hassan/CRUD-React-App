import React from 'react';
import styles from './UserCard.module.css';

const UserCard = props => {
  return (
    <div className={styles['user-card']}>
      <p>
        <span>Name:</span> {props.name} & <span>Age:</span> {props.age}
      </p>
    </div>
  );
};

export default UserCard;
