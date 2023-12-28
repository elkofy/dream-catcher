<script setup lang="ts">
import {ref} from "vue";
import {caretBackOutline, caretForwardOutline} from "ionicons/icons";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  defaultSlide: {
    type: Number,
    default: 0,
  },
})

const currentSlide = ref(props.defaultSlide)
</script>

<template>
  <div>
    <ion-card color="primary" class="flex flex-col justify-between mx-6 h-72 p-1">
      <ion-card-header>
        <ion-card-title>{{ slides[currentSlide].title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{ slides[currentSlide].description }}
      </ion-card-content>
      <div class="flex flex-row justify-between px-3 py-2">
        <ion-button :disabled="currentSlide<=0" @click="currentSlide--" color="dark">
          <ion-icon :icon="caretBackOutline"/>
        </ion-button>
        <ion-button v-show="currentSlide<(slides.length-1)" color="dark" @click="currentSlide++">
          <ion-icon :icon="caretForwardOutline"/>
        </ion-button>
        <slot v-if="currentSlide==(slides.length-1)" name="call-to-action"/>
      </div>

    </ion-card>
  </div>
</template>

<style scoped>

</style>