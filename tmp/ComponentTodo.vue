<template>
  <li v-bind:id=`'index' + ${index}`> {{index}} {{ todo.text }}</li>
</template>

<script>
import Vue from 'vue';

export default Vue.component('ComponentTodo', {
  props: ['todo','index'],
  template: "<li id=index> {{index}} {{ todo.text }}</li>"
})
<script>
