import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/Button/MyButton';

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' });

  const AddNewPost = (e) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <from>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='название поста'
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='название поста'
      />
      <MyButton onClick={AddNewPost}>создать пост</MyButton>
    </from>
  );
}
