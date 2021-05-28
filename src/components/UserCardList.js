import React from 'react';
import UserCard from './UserCard';
import styles from './UserCardList.module.css';

const UserCardList = props => {
  const userCardList = props.userData.map((user, index, userInfo) => {
    return (
      <UserCard
        key={index}
        name={user.name}
        age={user.age}
        userInfo={userInfo}
        setUserInfo={props.setUserInfo}
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
