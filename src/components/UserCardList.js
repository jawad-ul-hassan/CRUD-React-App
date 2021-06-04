import React from 'react';
import UserCard from './UserCard';
import styles from './UserCardList.module.css';

const UserCardList = props => {
  const userCardList = props.userData.map((user, index) => {
    return (
      <UserCard
        key={index}
        name={user.name}
        age={user.age}
        deleteHandler={props.deleteHandler}
        id={index}
        setEdit={props.setEdit}
        userToBeUpdated={props.userToBeUpdated}
      />
    );
  });

  return (
    <div
      className={`${userCardList.length > 0 ? styles['user-card-list'] : null}`}
    >
      {userCardList}
    </div>
  );
};

export default UserCardList;
