const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const query = `
    mutation {
      login(email: "${email}", password: "${password}") {
        name
        email
        company
      }
    }
  `;

  try {
    const response = await fetch('http://localhost:3000/local/desafio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    if (result.data.login) {
      window.location.href = 'welcome.html';
    } else {
      message.textContent = 'Credenciais inválidas!';
    }
  } catch (error) {
    message.textContent = 'Erro ao tentar fazer login.';
  }
});
