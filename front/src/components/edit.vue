<template>
   <div>
        <form class="mt-3 col-md-8 offset-md-2">
    <div class="form-group row">
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputEmail1" class="form-label mt-2">Nombres</label>
      <input v-model="nombres" type="text" class="form-control" placeholder="Primer nombre">
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputEmail1" class="form-label mt-2">Apellidos</label>
      <input v-model="apellidos" type="text" class="form-control" placeholder="Segundo nombre">
    </div>
    <div class="form-group col-md-6">
      <label for="Select" class="form-label mt-2">Tipo de identificación</label>
      <select v-model="typid" class="form-select form-control" id="Select">
        <option selected disabled>Tipo de identificación</option>
        <option>C.Ciudadanía</option>
        <option>C.Extranjería</option>
        <option>Pasaporte</option>
        <option>Permiso Especial</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputEmail1" class="form-label mt-2">Número de Identificación</label>
      <input v-model="numid" type="text" class="form-control" placeholder="Número de identificación">
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputEmail1" class="form-label mt-2">Correo Electrónico</label>
      <input v-model="email" type="email" class="form-control" placeholder="example@gmail.com">
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputEmail1" class="form-label mt-2">Celular</label>
      <input v-model="celular" type="number" class="form-control" placeholder="Número de celular">
    </div>
    <div class="form-group col-md-12">
      <label for="Select" class="form-label mt-2">Fecha de Nacimiento</label>
        <datepicker :bootstrap-styling="true"
                    class="form-control"
                    :open-date="openDate"
                    :format="customFormatter"
                    v-model="nacimiento">
        </datepicker>
    </div>
    <div class="form-group center">
      <button class="btn btn-dark btn-primary mt-5 col-md-6" @click="updateUser($store.getters.getId)" type="button">EDITAR USUARIO</button>
    </div>
</form>
    </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import axios from 'axios'

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      nombres: '',
      apellidos: '',
      typid: '',
      numid: '',
      email: '',
      celular: '',
      nacimiento: new Date()
    }
  },
  mounted () {
    let vue = this
    axios.get(`http://localhost:4000/api/user/${this.$store.getters.getId}`)
      .then(function (resp) {
        vue.nombres = resp.data.nombres
        vue.apellidos = resp.data.apellidos
        vue.typid = resp.data.typid
        vue.numid = resp.data.numid
        vue.email = resp.data.email
        vue.celular = resp.data.celular
        vue.nacimiento = resp.data.nacimiento
      })
  },
  methods: {
    customFormatter (date) {
      return moment(date).format('D MMMM YYYY')
    },
    async updateUser (id) {
      const article = {
        nombres: this.nombres,
        apellidos: this.apellidos,
        typid: this.typid,
        numid: this.numid,
        email: this.email,
        celular: this.celular,
        nacimiento: this.nacimiento
      }
      const response = await axios.put(`http://localhost:4000/api/user/${id}`, article)
      if (response) {
        alert('Usuario se actualizó exitosamente')
      }
    },
    hangeFiles () {
      this.archivo = this.$refs.archivo.files
    }
  }
}
</script>
<style scoped>
div{
  float: left;
}
.center{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
