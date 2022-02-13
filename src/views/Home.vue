<template>
  <div class="container">
    <h2>Login</h2>
    <form>
      <input-field
        type="text"
        id="nome"
        placeholder="Escreva o seu nome"
        label="Nome:"
        v-model="username"
      />
      <input-field
        type="password"
        id="senha"
        placeholder="Digite sua senha"
        label="Senha:"
        v-model="password"
      />

      <div class="center">
        <button @click="onClickEnviar($event)">Entrar</button>
      </div>
    </form>

    <div class="Links">
      <router-link to="/senha"><p>Esqueceu a sua senha?</p></router-link>
      <router-link to="/cadastro"><p>Ainda não é cadastrado?</p></router-link>
    </div>
  </div>
</template>

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

<script>
import InputField from "../components/InputField.vue";
export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    InputField,
  },
  methods: {
    onClickEnviar(evt) {
      evt.preventDefault();
      if (this.username === "admin" && this.password === "123456") {
        this.$router.push("/todolist");
      } else {
        alert("Usuário ou senha inválidos");
      }
    },
  },
};
</script>
