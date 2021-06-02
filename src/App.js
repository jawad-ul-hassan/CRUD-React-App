import React, { useState } from 'react';
import UserForm from './components/UserForm';
import styles from './App.module.css';
import UserCardList from './components/UserCardList';
import ValidModal from './components/ValidModal';

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isEdit, setEdit] = useState(false);

  const newUserData = (name, age) => {
    const newUser = { name, age };
    setUserInfo([...userInfo, newUser]);
  };

  const updateUser = userId => {
    const updatedList = userInfo.map((user, index) => {
      if (index === userId) {
        const updateUser = {
          name: 'Donald',
          age: 75,
        };
        return updateUser;
      }
      return user;
    });
    console.log(updatedList);
    return updatedList;
  };

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
      />
      <UserCardList
        userData={userInfo}
        setUserInfo={setUserInfo}
        deleteHandler={deleteHandler}
        setEdit={setEdit}
        updateUser={updateUser}
      />
    </div>
  );
};

export default App;
