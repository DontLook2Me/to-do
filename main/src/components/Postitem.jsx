import React from 'react';
import MyButton from './UI/Button/MyButton';

const Postitem = (props) => {
  return (
    <div className='post'>
      <div className='post__counter'>
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => props.remove(props.post)}>удалить</MyButton>
      </div>
    </div>
  );
};
export default Postitem;
