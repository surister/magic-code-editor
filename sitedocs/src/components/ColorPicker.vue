<script setup>
const props = defineProps({
  text: {
    type: String
  }
})

const model = defineModel()
</script>

<template>
  <div class="pa-2">
    <v-menu :close-on-content-click="false"
            location="bottom">
      <template v-slot:activator="{ props }">
        <span class="dot" :style="{ backgroundColor: model }"></span>
        <v-btn
          class="ml-4"
          color="indigo"
          size="small"
          v-bind="props">
          {{ text }}
        </v-btn>
      </template>
      <v-card min-width="300">
        <v-color-picker v-model="model"/>
      </v-card>
    </v-menu>
  </div>
</template>

<style scoped>
.dot {
  height: 20px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  outline: 1px solid #CDC9D8;
}
</style>
