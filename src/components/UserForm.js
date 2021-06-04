import React, { useState, useEffect } from 'react';
import styles from '../components/UserForm.module.css';

const UserForm = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (props.isEdit) {
      setName(props.userUpdate.name);
      setAge(props.userUpdate.age);
    } else {
      setName('');
      setAge('');
    }
  }, [
    setName,
    setAge,
    props.userUpdate.name,
    props.userUpdate.age,
    props.isEdit,
  ]);

  const userDataHandler = e => {
    e.preventDefault();

    if (name.trim().length === 0 || age === 0) {
      props.modalOpenHandler(true);
    } else if (age <= 0) {
      props.modalOpenHandler(true);
      props.ageChecker(false);
    } else {
      props.modalOpenHandler(false);
      props.userInputInfo(name, Number(age));
      setName('');
      setAge('');
    }
  };

  const updateUser = e => {
    e.preventDefault();
    console.log(typeof age);
    if (name.trim().length === 0 || age === 0) {
      props.modalOpenHandler(true);
    } else if (age <= 0) {
      props.modalOpenHandler(true);
      props.ageChecker(false);
    } else {
      props.modalOpenHandler(false);

      const updatedList = props.userInfo.map(user => {
        if (
          user.name === props.userUpdate.name &&
          user.age === props.userUpdate.age
        ) {
          const userToBeUpdate = {
            name: name,
            age: age,
          };
          return userToBeUpdate;
        }

        return user;
      });

      props.setUserInfo(updatedList);
      props.setEdit(false);
      setName('');
      setAge('');
    }
  };

  const nameInputHandler = e => {
    setName(e.target.value);
  };

  const ageInputHandler = e => {
    setAge(e.target.value);
  };

  const formComponent = (
    <form className={styles['user-form']}>
      <div className={styles['form-control']}>
        <label>Name</label>
        <input type="text" value={name} onChange={nameInputHandler} />
      </div>
      <div className={styles['form-control']}>
        <label>Age</label>
        <input type="number" value={age} onChange={ageInputHandler} />
      </div>
      <div className={styles['form-control-btn']}>
        <button
          className={styles['user-btn']}
          onClick={userDataHandler}
          disabled={props.isEdit}
        >
          Add User
        </button>
        <button
          className={styles['update-btn']}
          disabled={!props.isEdit}
          onClick={updateUser}
        >
          Update User
        </button>
      </div>
    </form>
  );

  return <div>{formComponent}</div>;
};

export default UserForm;
