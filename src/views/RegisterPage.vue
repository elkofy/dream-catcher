<script setup lang="ts">

</script>

<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Register</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-input label="Email" label-placement="floating" type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Password" label-placement="floating" type="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Confirm Password" label-placement="floating" type="password"></ion-input>
          </ion-item>
          <ion-button expand="block" href="/tabs/tab1" >Register</ion-button>
          <ion-button expand="block" href="/login">Login</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>