import React from 'react';

export default function AboutKey() {
  return (
    <div>
      <h2>React Collections (Keys and List)</h2>
      <List></List>
      <h2>Id and Title</h2>
      <IdTitle></IdTitle>
      <h2>Title and Content</h2>
      <TitleContent></TitleContent>
    </div>
  );
}

const nameList = ['Java', 'Javascript', 'JavaEE', 'ES6', 'Java'];
const List = () => {
  return nameList.map((name, index) => <li key={index}>{name}</li>);
};

const data = [
  { id: 1, title: 'First Data', content: 'News' },
  { id: 2, title: 'Second Data', content: 'RSS Feed' },
  { id: 3, title: 'Third Data', content: 'Blog' },
  { id: 4, title: 'Fourth Data', content: 'Live' }
];

const IdTitle = () => {
  return data.map((item, index) => {
    return (
      <div key={index}>
        <li>
          {item.id} {item.title}
        </li>
      </div>
    );
  });
};

const TitleContent = () => {
  return data.map((item, index) => {
    return (
      <div key={index}>
        <li>
          {item.title} {item.content}
        </li>
      </div>
    );
  });
};
