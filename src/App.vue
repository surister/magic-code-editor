<script setup>
import CodeEditor from "./components/CodeEditor.vue";
import {ref} from "vue";

const text1 = `# https://vitejs.dev/guide/#using-unreleased-commits

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue`
/*#161618 */
const text2 = ref(`import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})`)
const text3 = `<template>
  <div>
   <h1>Welcome to the homepage</h1>
  </div>
</template>`
const text4 = ref(`CREATE TABLE IF NOT EXISTS "doc"."weather_flink_sink" (
  "inserted_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  "location" OBJECT(DYNAMIC),
  "current" OBJECT(DYNAMIC)
)

-- Todo: Make it more dynamic.
  `)
const text5 = '$ pip install cratedb-sqlparse'
const text6 = '$ npm build && vue-tsc --dist .'
const text7 = `// This is a comment, and is ignored by the compiler.
// You can test this code by clicking the "Run" button over there ->
// or if you prefer to use your keyboard, you can use the "Ctrl + Enter"
// shortcut.
//
// This code is editable, feel free to hack it!
// You can always return to the original code by clicking the "Reset" button ->

// This is the main function.
fn main() {
    // Statements here are executed when the compiled binary is called.

    // Print text to the console.
    println!("Hello World!");
}
`
const text8 = `function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function getTick() {
    setDate(new Date());
  }

  function tick() {
    setDate(Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
`
const text9 = `import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;`
const text1_1 = 'mucho texto mucho text mucho texto mucho text  mucho texto mucho text  mucho texto mucho text  mucho texto mucho text  mucho texto mucho text '
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import sql from 'highlight.js/lib/languages/pgsql'
import rust from 'highlight.js/lib/languages/rust'

import './assets/main.css'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('rust', rust)

</script>

<template>
  <div class="row">
    <div class="col col-auto">
      <CodeEditor v-model="text1"
                  background-color="rgb(22, 22, 24)"
                  :highlight-row="false"
                  :read-only="true"
                  border-radius="15"
                  code-font-size="15"
                  padding-top="10"
                  padding-bottom="10"
                  :show-line-number="false"
                  :highlight="(text) => hljs.highlight(text, {language: 'bash'}).value"
      />
      <br>
      <CodeEditor v-model="text2"
                  header-text="js"
                  header-font-color="#c9d1d9"
                  :show-header="true"
                  :show-border-top="true"
                  code-font-size="15"
                  background-color="rgb(36, 36, 36)"
                  :read-only="true"
                  border-radius="15"
                  padding-top="10"
                  padding-bottom="10"
                  :show-line-number="false"
                  :highlight="(text) => hljs.highlight(text, {language: 'javascript'}).value"
      />
      <br>
      <CodeEditor v-model="text3"
                  header-background-color="rgb(3, 4, 32)"
                  header-font-color="#c9d1d9"
                  background-color="rgb(19, 25, 47)"
                  :highlight-row="false"
                  :read-only="true"
                  code-font-size="15"
                  padding-top="8"
                  padding-bottom="10"
                  :show-header="true"
                  :show-line-number="false"
                  :show-footer="false"
                  :highlight="(text) => hljs.highlight(text, {language: 'xml'}).value">
        <template #headerText>
          <div style="font-size: 10px">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" role="img" class="icon" style="" width="1em" height="1em"
                 viewBox="0 0 32 32" data-v-5bdfbce0="">
              <path fill="#41b883"
                    d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"></path>
              <path fill="#41b883" d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"></path>
              <path fill="#35495e"
                    d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"></path>
            </svg>
            app.vue
          </div>
        </template>

      </CodeEditor>
    </div>
    <div class="col" style="padding-left:20px">
      <CodeEditor v-model="text4"
                  header-font-color="#c9d1d9"
                  max-lines="10"
                  min-lines="10"
                  code-font-size="25"
                  :highlight-row="true"
                  :show-header="true"
                  :show-footer="true"
                  header-text="Code editor with 10 min lines. (SQL)"
                  :highlight="(text) => hljs.highlight(text, {language: 'sql'}).value"/>
      <br>
      <CodeEditor v-model="text5"
                  background-color="rgb(22, 22, 24)"
                  :highlight-row="false"
                  box-shadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
                  :read-only="true"
                  border-radius="45"
                  code-font-size="30"
                  padding-top="10"
                  padding-bottom="10"
                  :show-line-number="false"
                  extra-text="sh"
                  extra-location="center-right"
                  :highlight="(text) => hljs.highlight(text, {language: 'bash'}).value"/>
      <br>
      <CodeEditor v-model="text6"
                  style="box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
                  background-color="rgb(22, 22, 24)"
                  :highlight-row="false"
                  :read-only="true"
                  border-radius="15"
                  code-font-size="30"
                  padding-top="10"
                  padding-bottom="10"
                  :show-line-number="false"
                  extra-location="center-right"
                  :highlight="(text) => hljs.highlight(text, {language: 'bash'}).value">
        <template #extraText>
          <button @click="console.log('yo')">Copy</button>
        </template>
      </CodeEditor>
      <br>
      <CodeEditor v-model="text7"
                  background-color="rgb(22, 22, 24)"
                  :highlight-row="true"
                  highlight-row-background-color="brown"
                  :read-only="true"
                  border-radius="5"
                  code-font-size="15"
                  padding-top="10"
                  padding-bottom="10"
                  :show-line-number="false"
                  :show-footer="true"
                  extra-text="rust"
                  footer-background-color="brown"
                  :highlight="(text) => hljs.highlight(text, {language: 'rust'}).value">
        <template #footer-text>/project/dist/main.rs</template>
      </CodeEditor>
    </div>
  </div>
  <br>
  <div class="row">
    <div class="col col-auto">
      <CodeEditor v-model="text8"
                  code-font-size="20"
                  border-radius="10"
                  header-background-color="rgb(204, 207, 212)"
                  background-color="#212121"
                  :show-header="true"
                  :show-footer="false"
                  :highlight="(text) => hljs.highlight(text, {language: 'javascript'}).value"
                  :highlightGroups="[
                      {from: 2, to: 4, color:'rgba(155,155,155,0.49)'},
                      {from: 11, to: 13, color: 'rgba(139,0,0,0.40)'},
                      {from: 15, to: 17, color:'green'}
                  ]">
        <template #headerText>
          <span
              style="font-weight: bold; padding-top: 20px">CODE EDITOR WITH HIGHLIGHTED RANGES.</span>
        </template>
      </CodeEditor>
    </div>
    <div style="padding-left:20px" class="col">
      <CodeEditor v-model="text9"
                  id="overrideColors"
                  padding-top="10"
                  padding-bottom="10"
                  background-color="#f7f8fa"
                  code-color="black"
                  line-number-color="black"
                  :highlight-groups="[
                    {from: 1, to: 1, color: 'rgb(222, 223, 225)'},
                    {from: 4, to: 6, color: 'rgb(222, 223, 225)'},
                    {from: 11, to: 11, color:'rgb(222, 223, 225)'}
                  ]"
                  :read-only="true"
                  :highlight="(text) => hljs.highlight(text, {language: 'javascript'}).value"/>
      <div style="max-width: 900px">
        <CodeEditor v-model="text1_1"
                    background-color="rgb(22, 22, 24)"
                    :highlight-row="false"
                    box-shadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
                    :read-only="true"
                    border-radius="45"
                    code-font-size="15"
                    :show-line-number="false"
                    padding-bottom="10"
                    padding-top="10"
                    :min-lines="4"
                    extra-text="sh"
                    extra-location="center-right"
                    :highlight="(text) => hljs.highlight(text, {language: 'bash'}).value"
        />
      </div>
    </div>
  </div>

</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%
}

</style>
