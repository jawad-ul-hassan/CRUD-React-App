import React, { useState } from 'react';
import UserForm from './components/UserForm';
import styles from './App.module.css';
import UserCardList from './components/UserCardList';
import ValidModal from './components/ValidModal';

const App = () => {
  const [userInfo, setUserInfo] = useState([]);

  const newUserData = (name, age) => {
    const newUser = { name, age };
    setUserInfo([...userInfo, newUser]);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ageChecker, setAgeChecker] = useState(true);

  const modalOpen = isValid => {
    setModalIsOpen(isValid);
  };

  const theAgeChecker = check => {
    setAgeChecker(check);
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
      />
      <UserCardList userData={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
};

export default App;
