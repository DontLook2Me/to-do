import React from 'react';

export default function PostFilter(filter, setFilter) {
  return (
    <div>
      <MyInput
        value={filter}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск...'
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
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
    </div>
  );
}
