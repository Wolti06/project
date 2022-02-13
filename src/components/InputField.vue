<template>
  <div class="input-field">
    <input
      v-bind="$attrs"
      :id="id"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    value: String,  
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
input {
  width: 100%;
  height: 46px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  color: white;
  transition: 0.25s ease-in-out;
}
.input-field {
  position: relative;
  margin-bottom: 20px;
}
label {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  transform: translateY(18px);
  transition: 0.25s ease-in-out;
}
input:focus {
  border-bottom: 2px solid white;
  box-shadow: 0 1px 0 0 white;
}
input:focus + label {
  transform: translateY(-14px) scale(0.8);
  color: white;
  font-weight: bold;
}
input:not(:placeholder-shown) + label {
  transform: translateY(-14px) scale(0.8);
  color: white;
  font-weight: bold;
}
input:not(:placeholder-shown) {
  border-bottom: 2px solid white;
  box-shadow: 0 1px 0 0 white;
}
input::placeholder {
  color: transparent;
}
</style>