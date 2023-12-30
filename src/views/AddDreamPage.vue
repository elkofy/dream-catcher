<script setup lang="ts">

import {micOutline, saveOutline} from "ionicons/icons";
import {IonIcon} from "@ionic/vue";
</script>

<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Add Your Dream</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="p-2 mt-10">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Your Dream</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-input label="Heure" label-placement="floating" type="datetime-local"></ion-input>
              <ion-input label="Titre" label-placement="floating"></ion-input>
              <ion-textarea label="Your dream" placeholder="I Dreamed" label-placement="stacked"></ion-textarea>
            </ion-item>
          </ion-card-content>
        </ion-card>
        <div class="px-2 flex-row flex justify-between items-center" >
          <ion-button>
            <ion-icon aria-hidden="true" :icon="micOutline"/>
          </ion-button>

          <ion-button  @click="$router.push('/tabs/tab1')">Suivant</ion-button>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>