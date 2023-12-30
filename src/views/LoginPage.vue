<script setup lang="ts">
import {ref} from "vue";
import {supabase} from "@/lib/supaBaseClient";

const loginForm = ref<Record<string, string>>({
  email: '',
  password: ''
})

async function signInWithPassword() {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: loginForm.value.email,
    password: loginForm.value.password,
  })
  console.log('data', data)
  console.log('error', error)
}

const signUp = () => {
  console.log('loginForm', loginForm.value)
  signInWithPassword()
}
const handleIonInput = (type :string, event: any) => {
  loginForm.value[type] = event.target.value
}
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
            <ion-input @ion-change="handleIonInput('email',$event)" label="Email" type="email"
                       label-placement="floating"/>
          </ion-item>
          <ion-item>
            <ion-input @ion-change="handleIonInput('password',$event)" label="Password" label-placement="floating"
                       type="password"/>
          </ion-item>
          <ion-button expand="block" @click="signUp" hred="/tabs/tab1">Login</ion-button>
          <ion-button expand="block" href="/register">Register</ion-button>
        </ion-card-content>

      </ion-card>

    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>