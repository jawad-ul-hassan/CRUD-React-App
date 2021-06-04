import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './UserCard.module.css';

const UserCard = props => {
  const deleteCard = () => {
    props.deleteHandler(props.id);
  };

  const editCard = () => {
    props.setEdit(true);
    props.userToBeUpdated(props.id);
  };

  return (
    <div className={styles['user-card']}>
      <p>
        <span>Name:</span> {props.name}{' '}
        <span style={{ color: '#777', padding: '0px 2px' }}>&</span>{' '}
        <span>Age:</span> {props.age}
      </p>
      <div>
        <button className={styles['edit-btn']} onClick={editCard}>
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </button>
        <button className={styles['delete-btn']} onClick={deleteCard}>
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
