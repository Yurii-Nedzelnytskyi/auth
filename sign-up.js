let users = [];

loadUsers();

form.onsubmit = handleSubmit;

function loadUsers() {
  const json = localStorage.users;

  users = JSON.parse(json);
}

function handleSubmit() {
  const user = Object.fromEntries(new FormData(form));

  if (user.password != user.password2) {
    alert('Passwords do not match');
    return false;
  }

  register(user);
  saveUsers();
}

function register(user) {
  users.push(user);
}

function saveUsers() {
  const json = JSON.stringify(users);
  localStorage.users = json;
}