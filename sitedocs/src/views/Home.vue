<script setup>
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import sql from 'highlight.js/lib/languages/pgsql'
import rust from 'highlight.js/lib/languages/rust'
import python from 'highlight.js/lib/languages/python'
import {ref} from "vue";
import CodeBlock from "@/components/CodeBlock.vue";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('python', python)

const text = '$ npm install magic-code-editor'
const text1 = `# https://vitejs.dev/guide/#using-unreleased-commits

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue`
const text1_1 = "echo 'hello-world\\nbye-world' | grep hello"
const text4 = ref(`CREATE TABLE IF NOT EXISTS "doc"."weather_flink_sink" (
  "inserted_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  "location" OBJECT(DYNAMIC),
  "current" OBJECT(DYNAMIC)
)

-- Todo: Make it more dynamic.`)
let t = '>'
const text3 = `<script setup${t}
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'

// Highlighting using highlight.js but prism.js or other highlighters are compatible.
// You will need to 'npm install highlight.js'
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('python', python)

const text = \`from cratedb_sqlparse import sqlparse

query = "SELECT * FROM SYS.SHARDS; INSERT INTO doc.tbl VALUES (1);"

statements = sqlparse(query)
select_query = statements[0]

print(select_query.query)
# SELECT * FROM SYS.SHARDS\`
</script${t}

<template>
    <CodeEditor v-model="text"
      header-text="python"
      header-font-color="#c9d1d9"
      background-color="rgb(36, 36, 36)"
      border-radius="5"
      :show-header="true"
      :show-border-top="false"
      :read-only="true"
      :show-line-number="false"
      :highlight="(text) => hljs.highlight(text, {language: 'python'}).value"
    />
</template>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css';
</style>`

const test3_1 = `from cratedb_sqlparse import sqlparse

query = "SELECT * FROM SYS.SHARDS; INSERT INTO doc.tbl VALUES (1);"

statements = sqlparse(query)
select_query = statements[0]

print(select_query.query)
# SELECT * FROM SYS.SHARDS`

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
const text9 = `import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;`
</script>
<template>
  <v-row no-gutters>
    <v-col cols="12">
      <p class="gradient text-h3 text-red-accent-1">magic-code-editor</p>
    </v-col>
    <v-col class="pt-2">
      <img class="pr-1" alt="NPM dev or peer Dependency Version"
           src="https://img.shields.io/npm/dependency-version/magic-code-editor/peer/vue?style=for-the-badge">
      <img class="pr-1" alt="npm bundle size"
           src="https://img.shields.io/bundlephobia/min/magic-code-editor?style=for-the-badge">
      <img class="pr-1" alt="NPM License"
           src="https://img.shields.io/npm/l/magic-code-editor?style=for-the-badge">
      <img class="pr-1" alt="NPM Version"
           src="https://img.shields.io/npm/v/magic-code-editor?style=for-the-badge">
      <img class="pr-1" alt="NPM Type Definitions"
           src="https://img.shields.io/npm/types/magic-code-editor?style=for-the-badge">
    </v-col>
  </v-row>
  <v-row class="pt-4">
    <v-col>
      <h1 class="text-h1 font-weight-medium mb-3 ms-n1">Simple, beautiful, highly customizable code
        blocks.</h1>
    </v-col>
  </v-row>
  <v-row class="mt-10">
    <v-col>
      <v-label class="text-h4">Get started:</v-label>
    </v-col>
  </v-row>
  <!--  Get started -->
  <v-row>
    <v-col>
      <CodeEditor v-model="text"
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
          <v-btn variant="outlined">
            copy
          </v-btn>
        </template>
      </CodeEditor>
    </v-col>
  </v-row>

  <v-row class="mt-10">
    <v-col>
      <v-label class="text-h4 pb-4">Features:</v-label>
      <h4 v-for="f in [
          'Lightweight: ~ 8.11 kB │ gzip: 2.67 kB',
          'Written in Modern Vue3',
          'Highly customizable',
          'Built-in editor',
          'Syntax highlighting',
          'Line numbering',
          'Line highlighting',
          'Typescript support',
          'Open source license: MIT'
         ]"
          :key="f"
          class="title text-red-accent-1 font-weight-bold text-h4"> - {{ f }}
      </h4>
    </v-col>
  </v-row>

  <v-row class="mt-15">
    <v-spacer></v-spacer>
    <v-col cols="8">
      <v-alert icon="mdi-alert"
               color="danger"
               variant="outlined">
        <template #title>
          <p>
            For clarity purposes, all meta-code blocks (Code blocks that show codeblock's code) have
            a
            <v-icon size="x-small" color="pink" icon="mdi-emoticon-cool-outline"></v-icon>
            pink shadow, ie:
          </p>
        </template>
        <template #text>
          <div style=" padding: 15px">
            <CodeEditor v-model="text1_1"
                        background-color="rgb(22, 22, 24)"
                        :highlight-row="false"
                        box-shadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
                        :read-only="true"
                        border-radius="45"
                        code-font-size="15"
                        :show-line-number="false"
                        extra-text="sh"
                        extra-location="center-right"
                        :highlight="(text) => hljs.highlight(text, {language: 'bash'}).value"
            />
          </div>
        </template>

      </v-alert>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
  <v-row class="mt-16">
    <v-col>
      <v-card class="pa-6" elevation="0" variant="outlined">
        <v-card-title>Full example</v-card-title>
        <v-card-text style="line-height: 1.5; letter-spacing: normal">
          <CodeEditor v-model="text3"
                      header-background-color="rgb(22, 22, 24)"
                      header-font-color="#c9d1d9"
                      background-color="rgb(22, 22, 24)"
                      :highlight-row="false"
                      :read-only="true"
                      box-shadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
                      :show-header="true"
                      :show-line-number="false"
                      :show-footer="false"
                      :highlight="(text) => hljs.highlight(text, {language: 'xml'}).value">
            <template #headerText>
              <div style="font-size: 10px">
                <v-icon icon="mdi-vuejs" color="success"></v-icon>
                /components/CodeBlock.vue
              </div>
            </template>

          </CodeEditor>
          <v-card-title class="mt-10">Result:</v-card-title>
          <br>
          <code-block></code-block>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="mt-16">
    <v-col>
      <v-label class="text-h4">Examples:</v-label>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
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
    </v-col>
  </v-row>
  <v-row>
    <v-col>
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
    </v-col>
    <v-col>
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
    </v-col>
  </v-row>
  <v-row>
    <v-col>
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
                    {from: 11, to: 11, color:'rgba(255,0,0,0.16)'}
                  ]"
                  :read-only="true"
                  :highlight="(text) => hljs.highlight(text, {language: 'javascript'}).value"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-label class="text-h4">Editor</v-label>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <CodeEditor v-model="text4"
                  header-font-color="#c9d1d9"
                  max-lines="20"
                  min-lines="10"
                  code-font-size="25"
                  :show-header="true"
                  :show-footer="true"
                  header-text="SQL Editor with min 10 lines and max 20 lines."
                  :highlight="(text) => hljs.highlight(text, {language: 'sql'}).value"/>
    </v-col>
  </v-row>

</template>
<style>

#overrideColors .hljs-title {
  color: #DB36A4 !important;
}
</style>
