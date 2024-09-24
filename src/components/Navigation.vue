<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >FireBlogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul>
          <router-links class="link" to="#">Home</router-links>
          <router-links class="link" to="#">Blogs</router-links>
          <router-links class="link" to="#">Create Post</router-links>
          <router-links class="link" to="#">Login/Register</router-links>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

//23:09 6 hour vue.js and firebase project
