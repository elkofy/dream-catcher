<script setup lang="ts">

</script>

<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Welcome Back</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Login</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-input label="Email" type="email" label-placement="floating"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Password" label-placement="floating" type="password"></ion-input>
          </ion-item>
          <ion-button expand="block" @click="$router.go('/tabs/tab1')">Login</ion-button>
          <ion-button expand="block" @click="$router.push('/register')">Register</ion-button>
        </ion-card-content>

      </ion-card>

    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>