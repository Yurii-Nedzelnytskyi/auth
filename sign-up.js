let users = [];

loadUsers();

form.onsubmit = handleSubmit;

function loadUsers() {
  const json = localStorage.users;

  users = JSON.parse(json);
}

function handleSubmit() {
  const user = Object.fromEntries(new FormData(form));

  if (isOccupied(user.login)) {
    alert('This login is already taken');
    return false;
  }

  if (user.password != user.password2) {
    alert('Passwords do not match');
    return false;
  }

  register(user);
  saveUsers();
}

function isOccupied(login) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].login === login) {
      return true;
    }
  } 
  return false;
}

function register(user) {
  users.push(user);
}

function saveUsers() {
  const json = JSON.stringify(users);
  localStorage.users = json;
}