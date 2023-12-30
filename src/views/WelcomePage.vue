<script setup lang="ts">
import WelcomeCarrousel from "@/components/WelcomeCarrousel.vue";
import {ref} from "vue";
import {IonHeader, IonTitle, IonToolbar} from "@ionic/vue";
import router from "@/router";

const items = ref([
  {
    title: "The Concept",
    description: "Do you know about Lucid Dreams ? This app will help you to achieve it",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "How to use it ?",
    description: "Let's say you wake up you remember your dream, you can write it down in the app",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "What's more ?",
    description: "You get an analysis of your dream, and you can try to lucid dream with the help of the app",
    image: "https://picsum.photos/200/300",
  },
])
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>Dream Catcher</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="flex flex-col gap-5 justify-between items-center">
        <div class="flex flex-col items-center justify-center px-4 py-2 my-6">
          <p class="text-xl text-center">Already familiar ?</p>
          <ion-button class="w-fit" href="/login" color="dark">
            Login
          </ion-button>
        </div>
        <div class="flex flex-col h-full align-middle justify-center">
          <WelcomeCarrousel title="Introduction" :slides="items" :current-slide="0">
            <template #call-to-action>
              <ion-button href="/tabs/tab1" color="dark">
                Let's go !
              </ion-button>
            </template>
          </WelcomeCarrousel>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>