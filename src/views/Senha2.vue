<template>
<div class="container">
        <h2>Cadastro</h2>
        <form action="index.html" method="post">
            <div class="input-field">
                <input type="text" id="nome" placeholder="Escreva o seu nome" name="" value="">
                <label for="nome">Nome:</label>
            </div>
            <div class="input-field">
                <input type="email" id="email" placeholder="Digite seu email" name="" value="">
                <label for="email">Email:</label>
            </div>
            <div class="center">
                <button>Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "Senha2",
  components: {
  },
};
</script>

<style scoped>
h2{
    font-size: 25px;
    color: white;
    text-align: center;
    margin: 20px;
}
.container{
    background-color: rgba(0,0, 0, .528);
    border-radius: 20% 0;
    width: 350px;
    box-shadow: 1pc 2px 10px black, 3px 6px 20px black;
    padding: 50px 20px;
}
input{
    width: 100%;
    height: 46px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    color: white;
    transition: .25s ease-in-out;
}
.input-field{
    position: relative;
    margin-bottom: 20px;
}
label{
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    transform: translateY(18px);
    transition: .25s ease-in-out;
}
input:focus{
    border-bottom: 2px solid white;
    box-shadow: 0 1px 0 0 white;
}
input:focus+label{
    transform: translateY(-14px) scale(.8);
    color:white;
    font-weight: bold;
}
input:not(:placeholder-shown) + label{
    transform: translateY(-14px) scale(.8);
    color:white;
    font-weight: bold;
}
input:not(:placeholder-shown){
    border-bottom: 2px solid white;
    box-shadow: 0 1px 0 0 white;   
}
input::placeholder{
    color: transparent;
}
button{
    padding: 15px 50px;
    margin: 20px;
    background: transparent;
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    border-radius: 20% 0;
    cursor: pointer;
}
.center{
    text-align: center;
}
button:hover{
    background: rgba(18, 17, 49, 0.246);
    transition: .25s ease-in-out;
}
a{
    text-decoration: none;
    color: white;
    transition: .25s ease-in-out;
}
</style>