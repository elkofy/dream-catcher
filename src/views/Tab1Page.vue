<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Hi Nassim</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div>
            <p>Your last dream was :
              <span class="font-bold">"I was in a forest"</span>
            </p>
            <ion-button expand="block" @click="$router.push('/add-dream')">Add Dream</ion-button>
          </div>



        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Hi Nassim</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div>
            <p>reality checks</p>
            <ion-button expand="block" @click="$router.push('/reality-check')">Reality Check</ion-button>
          </div>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
