import React, { useState } from 'react';
import styles from '../components/UserForm.module.css';

const UserForm = props => {
  const [name, setname] = useState('');
  const [age, setAge] = useState('');

  const userDataHandler = e => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      props.modalOpenHandler(true);
    } else if (age <= 0) {
      props.modalOpenHandler(true);
      props.ageChecker(false);
    } else {
      props.modalOpenHandler(false);
      props.userInputInfo(name, Number(age));
    }

    setname('');
    setAge('');
  };

  const nameInputHandler = e => {
    setname(e.target.value);
  };

  const ageInputHandler = e => {
    setAge(e.target.value);
  };

  const formComponent = (
    <form onSubmit={userDataHandler} className={styles['user-form']}>
      <div className={styles['form-control']}>
        <label>Name</label>
        <input type="text" value={name} onChange={nameInputHandler} />
      </div>
      <div className={styles['form-control']}>
        <label>Age</label>
        <input type="number" value={age} onChange={ageInputHandler} />
      </div>
      <div className={styles['form-control']}>
        <button className={styles['user-btn']}>Add User</button>
      </div>
    </form>
  );

  return <div>{formComponent}</div>;
};

export default UserForm;
