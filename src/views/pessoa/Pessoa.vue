<template>
  <q-page padding>
    <q-form>
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input id="idFiscal" v-model="id" label="IdFiscal" placeholder="Informe o CPF ou CNPJ." />
          <q-btn @click="pesquisar">pesquisar</q-btn>
        </div>
      </div>
    </q-form>
   </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pessoa',
  data: function() {
return {
    id: '',
    pessoas: []
  };
},
  methods: {
    pesquisar(){
      axios({
        method: 'get',
        url: 'http://localhost:8081/pessoas'
        })
      .then(function (response) {
        this.pessoas.push(response.data)
      })
    }    
  }
}
</script>
