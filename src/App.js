import React, { useState } from 'react';
import UserForm from './components/UserForm';
import styles from './App.module.css';
import UserCardList from './components/UserCardList';
import ValidModal from './components/ValidModal';

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [userUpdate, setUserUpdate] = useState({});

  const newUserData = (name, age) => {
    const newUser = { name, age };
    setUserInfo([...userInfo, newUser]);
  };

  const userToBeUpdated = userId => {
    const updatedBnda = userInfo.find((user, index) => {
      if (index === userId) {
        const updUser = {
          name: user.name,
          age: user.age,
        };
        return updUser;
      }
      return null;
    });

    setUserUpdate(updatedBnda);
  };

  // const updateUser = userId => {
  //   const updatedList = userInfo.map((user, index) => {
  //     if (index === userId) {
  //       const updateUser = {
  //         name: 'Donald',
  //         age: 75,
  //       };
  //       return updateUser;
  //     }
  //     return user;
  //   });
  //   console.log(updatedList);
  //   return updatedList;
  // };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ageChecker, setAgeChecker] = useState(true);

  const modalOpen = isValid => {
    setModalIsOpen(isValid);
  };

  const theAgeChecker = check => {
    setAgeChecker(check);
  };

  const deleteHandler = index => {
    const updatedInfo = userInfo.filter((user, ind) => ind !== index);
    setUserInfo(updatedInfo);
  };

  return (
    <div className={styles.app}>
      <h1>Enter Your Name & Age</h1>
      <ValidModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        ageChecker={ageChecker}
      />

      <UserForm
        userInputInfo={newUserData}
        modalOpenHandler={modalOpen}
        ageChecker={theAgeChecker}
        isEdit={isEdit}
        setEdit={setEdit}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        userUpdate={userUpdate}
      />
      <UserCardList
        userData={userInfo}
        setUserInfo={setUserInfo}
        deleteHandler={deleteHandler}
        setEdit={setEdit}
        userToBeUpdated={userToBeUpdated}
      />
    </div>
  );
};

export default App;
