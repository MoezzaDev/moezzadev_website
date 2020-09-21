<template>
    <div id="app">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
            <div class="container">
            <router-link to="/" class="navbar-brand">MoezzaDev</router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/About" class="nav-link" >About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Producs" class="nav-link" >Our Producs</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Contact" class="nav-link" >Contact</router-link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <router-view app_name="MoezzaDev Software Company"></router-view>    
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
