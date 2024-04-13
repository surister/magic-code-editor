<script setup>
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'

import {ref, watch} from "vue";
import hljs from "highlight.js/lib/core";

const props = defineProps({
  text: {
    type: String
  },
  appendLocation: {
    type: String,
    default: 'center-right'
  },
  prependText: {
    type: String,
  },
  appendText: {},
  fontSize: {
    type: Number,
    default: 20
  }
})

const copied = ref(false)

let model = defineModel()

if (!model.value) {
  model = ref(props.text)
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <CodeEditor v-model="model"
              style="box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
              background-color="rgb(22, 22, 24)"
              :highlight-row="false"
              :read-only="true"
              border-radius="15"
              :code-font-size="fontSize || 30"
              padding-top="10"
              padding-bottom="10"

              :show-line-number="false"
              :prepend-text="prependText"
              append-text="sh"
              :append-location="appendLocation"
              prepend-location="center-left"
              :highlight="(text) => hljs.highlight(text, {language: 'xml'}).value"
  >

    <template #appendText>
      <v-btn variant="outlined" :color="copied ? 'success' : ''"
             :icon="copied ? 'mdi-check' : 'mdi-content-copy'" size="x-small"
             @click="copyToClipboard(model)">
      </v-btn>
    </template>
  </CodeEditor>
</template>

<style scoped>
.dot {
  height: 20px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
