<template>
  <header
    class="header"
    :class="$colorMode.value === 'light' ? 'header-light' : 'header-dark'"
  >
    <nav>
      <h1>Where in the world?</h1>
    </nav>
    <themeToggler />
  </header>
  <div>
    <slot />
  </div>
  <footer>
    <hr>
    <p>created by <a href="https://santiagomorales.dev">Santiago Morales</a></p>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
footer p {
  text-align: center;
}
.header {
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-dark {
  background-color: hsl(209, 23%, 22%);
  box-shadow: 0 0 3px hsl(200, 15%, 8%);
}
.header-light {
  background-color: #fff;
  box-shadow: 0 0 5px hsl(0, 0%, 82%);
}

@media (max-width: 500px) {
  .header {
    padding: 1rem;
  }
}
</style>
