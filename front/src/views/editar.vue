<template>
    <div class="display">
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:8080/#/">PML</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <a class="nav-link nav-item" href="http://localhost:8080/#/">Inicio
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="http://localhost:8080/#/crearusuario">Crear nuevo usuario</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div>
            <edit/>
        </div>
    </div>
</template>

<script>
import edit from '../components/edit.vue'

export default{
  name: 'home',
  components: {
    edit
  }
}
</script>
<style scoped>
.display{
    display: flex;
    display: block;
}
</style>
