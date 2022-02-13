<template>
  <div class="container">
    <h2>Cadastro</h2>
    <form action="index.html" method="post">
      <input-field
        label="Nome:"
        type="text"
        id="nome"
        placeholder="Escreva o seu nome"
        name="nome"
      />
      <input-field
        label="E-mail:"
        type="email"
        id="email"
        placeholder="Digite seu Email"
        name="email"
      />
      <input-field
        label="Senha:"
        type="password"
        id="senha"
        placeholder="Digite sua senha"
        name="senha"
      />
      <input-field
        label="Confirme sua senha:"
        type="password"
        id="confirme-sua-senha"
        placeholder="Confirme sua senha"
        name="confirme-sua-senha"
      />
      <div class="center">
        <button>Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";
export default {
  name: "Cadastro3",
  components: {
    InputField,
  },
};
</script>

<style scoped>
h2 {
  font-size: 25px;
  color: white;
  text-align: center;
  margin: 20px;
}
.container {
  background-color: rgba(0, 0, 0, 0.528);
  border-radius: 20% 0;
  width: 350px;
  box-shadow: 1pc 2px 10px black, 3px 6px 20px black;
  padding: 50px 20px;
}

button {
  padding: 15px 50px;
  margin: 20px;
  background: transparent;
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  border-radius: 20% 0;
  cursor: pointer;
}
.center {
  text-align: center;
}
button:hover {
  background: rgba(18, 17, 49, 0.246);
  transition: 0.25s ease-in-out;
}
a {
  text-decoration: none;
  color: white;
  transition: 0.25s ease-in-out;
}
a:hover {
  color: black;
}
</style>