/* html

<ul id="myList"></ul>

*/

const items = ['Item 1', 'Item 2', 'Item 3'];

const list = document.getElementById('myList');

items.forEach((item) => {
  const li = document.createElement('li');
  li.innerText = item;
  list.appendChild(li);
});


/*
<table id="myTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
*/

const users = [
  { name: 'John', age: 30, email: 'john@example.com' },
  { name: 'Jane', age: 25, email: 'jane@example.com' },
  { name: 'Bob', age: 40, email: 'bob@example.com' }
];

const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');

users.forEach((user) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
  `;
  tbody.appendChild(tr);
});


/*


*/
