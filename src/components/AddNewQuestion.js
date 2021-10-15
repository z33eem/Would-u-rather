import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveQuestion } from './../redux/shared';
const AddNewQuestion = () => {
  const [optionOneText, setOption1] = useState('');
  const [optionTwoText, setOption2] = useState('');
  const author = useSelector((state) => {
    return state.isAuthorised;
  });
  const dispatch = useDispatch();
  let history = useHistory();
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(saveQuestion({ author, optionOneText, optionTwoText }));
    history.push('/');
  };
  return (
    <section className='add-q fade-in-element'>
      <div className='container'>
        <h2>Add new Questuin</h2>
        <form className='form flex' onSubmit={handleForm}>
          <div>
            <h3>Would you rather...</h3>
            <input
              type='text'
              className='input'
              placeholder='First Choice'
              value={optionOneText}
              onChange={(e) => {
                setOption1(e.target.value);
              }}
            />
            <input
              type='text'
              className='input'
              placeholder='Second Choice'
              value={optionTwoText}
              onChange={(e) => {
                setOption2(e.target.value);
              }}
            />
            <button className='submit-btn'>Add</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewQuestion;
