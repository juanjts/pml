<template>
    <div>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Documento</th>
      <th scope="col">Número Documento</th>
      <th scope="col">Correo</th>
      <th scope="col">Celular</th>
      <th scope="col">Fecha de Nacimiento</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
    <paginate name="users" :list="users" :per="8" tag="tbody">
    <tr class="table-light" v-for="user in paginated('users')" :key="user.data">
      <td>{{user.nombres}}</td>
      <td>{{user.apellidos}}</td>
      <td>{{user.typid}}</td>
      <td>{{user.numid}}</td>
      <td>{{user.email}}</td>
      <td>{{user.celular}}</td>
      <td>{{user.nacimiento}}</td>
      <td class="btnloc">
        <button type="button" class="btn btn-secondary btn-sm" @click="editUser(user.id)">Editar</button>
        <button type="button" class="btn btn-secondary btn-sm mt-1" @click="deleteUser(user.id)">Eliminar</button>
      </td>
    </tr>
    </paginate>
</table>
<div id="pagcenter">
      <paginate-links for="users" :limit="5" :show-step-links="true" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: [],
      paginate: ['users']
    }
  },
  mounted () {
    let vue = this
    axios.get('http://localhost:4000/api/user')
      .then(function (resp) {
        console.log(resp)
        vue.users = resp.data
      })
  },
  methods: {
    async deleteUser (id) {
      console.log(id)
      const respo = await axios.delete(`http://localhost:4000/api/user/${id}`)
      if (respo) {
        alert('El usuario con el id: ' + id + ' fué eliminado exitosamente')
      }
    },
    editUser (id) {
      this.$store.state.id = id
      alert('vas a editar al usuario con id: ' + this.$store.getters.getId)
      location.href = 'http://localhost:8080/#/edit'
    }
  }
}
</script>
<style scoped>
#pagcenter{
  display: flex;
  justify-content: center;
  width: 100%;
}
.btnloc{
  display: flex;
  flex-direction: column;
}
</style>
