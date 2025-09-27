let users = [];
const user = getQueryParams();

loadUsers();
fillForm(user);

form.onsubmit = handleSubmit;

function loadUsers() {
  const json = localStorage.users;

  users = JSON.parse(json);
}

function handleSubmit() {
  const user = Object.fromEntries(new FormData(form));
  const accessGranted = check(user);

  if (!accessGranted) {
    alert('incorrect login or password');   
  }

  return accessGranted;
}

function check({ login, password }) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].login == login && users[i].password == password) {
      return true;
    }
  }
  return false;
}

function getQueryParams() {
  const params = location.search.slice(1).split('&');
  const obj = {};

  for (let i = 0; i < params.length; i++) {
    const [key, value] = params[i].split('=');
    obj[key] = value;
  }
  return obj;
}

function fillForm(data) {
  form.login.value = data.login ?? '';
  form.password.value = data.password ?? '';
}

