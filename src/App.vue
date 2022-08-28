<template>
  <div class="navbar">
    <router-link to="/">+ COVID VACCINATION</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  margin: -1% -1% 1% -1%;
  overflow: hidden;
  background-color: lightskyblue;
}

.navbar a {
  float: left;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 16px 29px;
  text-decoration: none;
  font-weight: 700;
  font-size: 25px;
}

h4 {
  font-weight: 300;
  font-size: 17px;
}
span {
  font-weight: 400;
  font-size: 19px;
}
</style>
