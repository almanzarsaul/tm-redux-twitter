import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSaveTweet } from '../actions/tweets';
import { withRouter } from 'react-router-dom';

const NewTweet = ({
  heading,
  placeholder = "What's happening?",
  replyingTo = null,
  history
}) => {
  const [input, setInput] = useState('');
  const authedUser = useSelector(({ authedUser }) => authedUser);
  const dispatch = useDispatch();

  const submit = e => {
    dispatch(handleSaveTweet(input, authedUser, replyingTo));

    // if replyingTo is null redirect to homescreen if not then stay on same page?
    history.push(replyingTo ? `/tweet/${replyingTo}` : '/');
  };

  return (
    <React.Fragment>
      <h3 className='center'>{heading}</h3>
      <form className='new-tweet' onSubmit={e => e.preventDefault()}>
        <textarea
          className='textarea'
          placeholder={placeholder}
          cols='30'
          rows='10'
          maxLength='240'
          onChange={e => setInput(e.target.value)}
        ></textarea>
        <button
          className='btn'
          type='submit'
          onClick={e => {
            e.preventDefault();
            submit();
          }}
          disabled={input.length === 0}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default withRouter(NewTweet);
