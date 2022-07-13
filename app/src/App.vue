<template>
  <div id="app">
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #fefefe;
  color: #222;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#app {
  max-width: 1280px;
  margin: auto;
  margin-top: 4rem;
}

.main {
  padding: 0 1rem;
}
</style>
