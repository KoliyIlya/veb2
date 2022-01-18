<template>
  <section class="intro_vue">
    <div class="login-box">
      <div class="row">
        <img
            src="../assets/images/gnome.png" alt="auto"
        />
      </div>
      <h2>Авторизация</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label><i class="Username"></i>
            Почта или логин
          </label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label><i class="Unlock"></i>
            Пароль
          </label>
        </div>
      </form>
      <router-link :to="{name: 'main'}">
        <button type="submit" class = "submit-button">Вход</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "authorization",


  beforeCreate: function () {
    document.body.className = 'intro';
  }
}
</script>

<style scoped src="../assets/styles/authorization_style.css">

</style>


