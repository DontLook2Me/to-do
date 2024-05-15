import React, { useMemo, useState } from 'react';
import Counter from './components/counter';
import './styles/App.css';
import Postitem from './components/Postitem';
import PostList from './components/PostList';

import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/Button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
      </div>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка по'
        options={[
          {
            value: 'title',
            name: 'По названию',
          },
          {
            value: 'body',
            name: 'По описанию',
          },
        ]}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPost} title='список постов js' />
    </div>
  );
}

export default App;
