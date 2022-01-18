<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin:0;
  padding:0;
  font-family:sans-serif;
  /*background: radial-gradient(#f69d3c, #3f87a6);*/
  background: rgba(152, 251, 152, 0.24);

}
html{
  height: 100%;
  width: 100%;
}




</style>
<script>
// import intro from "./components/intro"
import main from "@/components/main";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {main}
}
</script>