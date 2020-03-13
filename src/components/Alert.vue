<template>
  <v-alert 
    type="success"
    dismissible
    color="cyan darken-3"
    border="left"
    elevation="3">

    {{ message }}

    </v-alert>
</template>

<script>
export default {
    name: 'alert',

    props: ['message']
}
</script>

<style>

</style>