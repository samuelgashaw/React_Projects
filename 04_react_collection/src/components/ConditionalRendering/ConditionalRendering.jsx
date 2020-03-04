import React from 'react';

export default function ConditionalRendering() {
  return (
    <div>
      <List list={users}></List>
    </div>
  );
}

const users = [
  { id: 1, firstName: 'Yonael', lastName: 'Samuel' },
  { id: 2, firstName: 'Netanya', lastName: 'Samuel' }
];
function List({ list }) {
  if (!list) {
    return null;
  } else {
    return (
      <div>
        {list.map(item => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    );
  }
}
function Item({ item }) {
  return (
    <div>
      <ul>
        <li>
          {item.firstName}
          {item.lastName}
        </li>
      </ul>
    </div>
  );
}
