import { news } from '../mocks/news-data.js'
import { users } from '../mocks/users-data.js'
import { projects } from '../mocks/projects-data.js'
import { formatDate } from '../utils/common.js'

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
  if (criteria.length > 0) {
    const filteredUsers = users.filter((user) =>
      user.id.toString().toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.phone.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.email.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.role.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
    );
    loadContent(filteredUsers, projects, news);
  } else {
    loadContent(users, projects, news);
  }
});

projectSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  if (criteria.length > 0) {
    const filteredProjects = projects.filter((project) =>
      project.id.toString().toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || project.title.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || project.description.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
    );
    loadContent(users, filteredProjects, news);
  } else {
    loadContent(users, projects, news);
  }
});

newsSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  if (criteria.length > 0) {
    const filteredNews = news.filter((n) =>
      n.id.toString().toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || n.title.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || n.description.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || n.author.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
    );
    loadContent(users, projects, filteredNews);
  } else {
    loadContent(users, projects, news);
  }
});
