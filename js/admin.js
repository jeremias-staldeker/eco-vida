import { news } from '../mocks/news-data.js'
import { users } from '../mocks/users-data.js'
import { projects } from '../mocks/projects-data.js'
import { filterObjects, formatDate } from '../utils/common.js'

const usersTbody = document.getElementById('users-tbody');
const newsTbody = document.getElementById('news-tbody');
const projectsTbody = document.getElementById('projects-tbody');
const usersSearch = document.getElementById('user-search');
const projectSearch = document.getElementById('project-search');
const newsSearch = document.getElementById('news-search');

const loadContent = (userList = [], projectList = [], newsList = []) => {
  const tbodyU = userList.map((user) => {
    const tr = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${formatDate(new Date(user.creationDate))}</td>
        <td>${user.role.name}</td>
      </tr>
    `;
    return tr;
  });
  usersTbody.innerHTML = tbodyU.join('');

  const tbodyP = projectList.map((project) => {
    const tr = `
      <tr>
        <td>${project.id}</td>
        <td>${project.title}</td>
        <td>${project.description}</td>
        <td>${formatDate(new Date(project.startDate))}</td>
        <td>${formatDate(new Date(project.endDate))}</td>
      </tr>
    `;
    return tr;
  });
  projectsTbody.innerHTML = tbodyP.join('');

  const tbodyN = newsList.map((n) => {
    const tr = `
      <tr>
        <td>${n.id}</td>
        <td>${n.title}</td>
        <td>${n.description}</td>
        <td>${formatDate(new Date(n.publicationDate))}</td>
        <td>${n.author}</td>
      </tr>
    `;
    return tr;
  });
  newsTbody.innerHTML = tbodyN.join('');
}

loadContent(users, projects, news);

usersSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  const filteredUsers = filterObjects(users, criteria, ['id', 'name', 'phone', 'email', 'role.name']);
  loadContent(filteredUsers, projects, news);
});

projectSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  const filteredProjects = filterObjects(projects, criteria, ['id', 'title', 'description']);
  loadContent(users, filteredProjects, news);
});

newsSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  const filteredNews = filterObjects(news, criteria, ['id', 'title', 'description', 'author']);
  loadContent(users, projects, filteredNews);
});
