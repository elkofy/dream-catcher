<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Historic</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
    <template v-for="dream in dreams">
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{dream.title}}</ion-card-title>
          <ion-card-subtitle>{{dream.date}}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>{{dream.description}}</p>
          <ion-button  @click="$router.push('/add-dream')">
            <ion-icon aria-hidden="true" :icon="eye"/>
          </ion-button>
        </ion-card-content>
      </ion-card>

    </template>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {onMounted, ref} from "vue";
import {eye, eyedrop, eyeOutline} from "ionicons/icons";
import {supabase} from "@/lib/supaBaseClient";


const dreams =ref()
async function getDreams() {
  console.log('getDreams',await supabase.from('dreams').select());

  const { data } = await supabase.from('dreams').select()
  console.log(data)
  dreams.value = data
}
onMounted(() => {
  getDreams()
})
</script>
