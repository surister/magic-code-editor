<script setup lang="ts">

import DocCodeBlock from "@/components/docs/DocCodeBlock.vue";
import {CodeEditor} from "magic-code-editor";
import hljs from "highlight.js/lib/core";
import xml from 'highlight.js/lib/languages/xml';
import python from 'highlight.js/lib/languages/python';
import {ref} from "vue";

hljs.registerLanguage('python', python)
hljs.registerLanguage('xml', xml)

const text_1 = `<script setupREPLACE_ME
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'
import {ref} from "vue";

const text = ref('This is my amazing code.')
</scriptREPLACE_ME

<template>
  <CodeEditor v-model="text"/>
</template>`.replaceAll('REPLACE_ME', '>')
const text_2 = `<CodeEditor
 text="<p>Tags are rendered but not highlighted</p>"/>`

const text_3 = `<CodeEditor
  text="<p>hello world</p>"
  :highlight="(text) => text.replaceAll('world', 'bye')"/>`

const text_4 = `<script setup>
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'

import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('python', python)

const text = \`from cratedb_sqlparse import sqlparse

for i in range(10):
    print(i)\`
</scriptREPLACE_ME

<templateREPLACE_ME
  <CodeEditor
   v-model="text"
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
</templateREPLACE_ME

<styleREPLACE_ME
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css';
</styleREPLACE_ME
`.replaceAll('REPLACE_ME', '>')

const text_6 = `from cratedb_sqlparse import sqlparse

for i in range(10):
    print(i)`


const myText = ref('Copy me!')

const copied = ref(false)

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then((res) => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
      console.log('set to false')
    }, 2500)
  })
}

const copyBtnExample = `<script setupREPLACE_ME
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'
import {ref} from "vue";

const myText = ref('Copy me!')

const copied = ref(false)
function copyToClipboard(text){
  navigator.clipboard.writeText(text).then((res) => {
    copied.value = true
    setTimeout(()=>{
      copied.value = false
    }, 2500)
  })
}
<script/REPLACE_ME

<templateREPLACE_ME
  <CodeEditor show-header v-model="myText"REPLACE_ME
    <template #header>
      <v-row no-gutters class="pa-5">
        <v-spacer></v-spacer>
        <v-col class="v-col-auto">
          <button style="color:white; outline: 1px solid white; padding: 10px"
          @click="() => copyToClipboard(myText)">
          {{ copied ? 'OK' : 'COPY' }}
          </button>
        </v-col>
      </v-row>
    </template>
  </CodeEditorREPLACE_ME
</templateREPLACE_ME
`.replaceAll('REPLACE_ME', '>')

const copyBtnExample2 = `<CodeEditor show-header header-color="white"REPLACE_ME
    <template #headerTextREPLACE_ME
      <v-badge
        icon="mdi-check"
        color="success" v-model="copied"
        transition="scale-rotate-transition">
        <v-btn
          style="background-color: #0d1117"
          variant="outlined"
          @click="copyToClipboard('you just copied me!')"
          :prepend-icon="copied ? 'mdi-hand-okay' : 'mdi-content-copy'"
          :text="copied ? 'COPIED': 'COPY'"REPLACE_ME
        </v-btnREPLACE_ME
      </v-badgeREPLACE_ME
    </templateREPLACE_ME
</CodeEditorREPLACE_ME`.replaceAll('REPLACE_ME', '>')

const hlexample = `somelibrary.highlighter("let number = 1")
<!-- Result -->
<span class="token keyword">let</span> number = <span class="token number">1</span> `
const ranges = [
  {from: 1, to: 1, color:'blue'},
  {from: 4, to: 6, color: 'rgba(139,0,0,0.40)'},
]
const hrangesExample = `const ranges = [
  {from: 1, to: 1, color:'blue'},
  {from: 4, to: 6, color: 'rgba(139,0,0,0.40)'},
]`
const hrangesExample2 = `<CodeEditor :highlightGroups="ranges" text="1\\n2\\n3\\n4\\n5\\n6"/>`
</script>

<template>
  <h1 class="text-h3 font-weight-medium mt-10" id="npm">Installing the library</h1>
  <v-divider class="mb-5"></v-divider>
  <p class="pt-5">The library is uploaded to NPM.</p>
  <br>
  <DocCodeBlock text="npm install magic-code-editor" prepend-text="$"/>
  <h1 class="text-h3 font-weight-medium mt-10" id="getting-started">Getting started</h1>
  <v-divider class="mb-5"></v-divider>
  Once installed you need to import the <span class="font-weight-bold">component</span> and the
  <span class="font-weight-bold">css.</span>
  <DocCodeBlock class="mt-5" :text="text_1" append-location="top-right"/>

  <CodeEditor class="mt-5" text="This is my amazing code."></CodeEditor>

  <h1 class="text-h3 font-weight-medium mt-10">Customization</h1>
  <v-divider class="mb-5"></v-divider>
  <p>The component has many things that can be customized, sizes, colors, borders,
    alignment, content... see #props for a detailed list.</p>
  <p>
    There is a <a href="/builder">visual code block builder</a> that can be really nice when customizing your own code
    block.
  </p>

  <h1 class="text-h3 font-weight-medium mt-10">Syntax highlighting</h1>
  <v-divider class="mb-5"></v-divider>
  <h2 class="mt-5" id="how-it-works">How it works <a href="/docs/#how-it-works">
    <v-icon>mdi-link</v-icon>
  </a></h2>
  <p class="pt-5 pb-5">
    By default the library does not support any specific syntax highlighter, but rather, has a callback
    <span class="font-weight-bold">highlight</span>
    that allows to apply text transformation and thus, any highlighter.
    <br><br>
    Text highlighters commonly parse the given text and then wrapp the appropiate pieces into 'spans' tags with
    classes. For example:
    <br>
    <DocCodeBlock :text="hlexample" :font-size="20" class="mt-5"></DocCodeBlock>
  </p>
  <p class="mb-5">We can use this callback to transform the text in many different ways, when not
    applied, text is automatically escaped, so tags can be displayed:</p>

  <DocCodeBlock :text="text_2" class="mt-5"></DocCodeBlock>

  <p class="mt-5">Results in:</p>
  <CodeEditor class="mt-5" text="<p>Tags are rendered but not highlighted</p>"></CodeEditor>
  <p class="mt-5">You can use this to even implement a custom highlighter or apply arbitrary text
    modifications.</p>
  <DocCodeBlock class="mt-5" :text="text_3"></DocCodeBlock>
  <CodeEditor class="mt-5" text="<p>hello world</p>"
              :highlight="(text)=>text.replaceAll('world', 'bye')"></CodeEditor>
  <p class="mt-5">Note that the tags are now not escaped, this is because escaping is only applied
    when no highlight is applied, you would have to escape the text yourself, this is only
    relevant if you want to display tags and do your own custom highligthing.
  </p>
  <h2 class="mt-5" id="highlight-js">Highlighting with highlight.js<a href="/docs/#highlight-js">
    <v-icon>mdi-link</v-icon>
  </a></h2>

  <p class="mt-5">Most likely you would want to use a text highlighting library that already exists,
    doing it yourself can be a hard, highlight.js is a very popular one.</p>
  <br>
  <p>You would use highlight.js as you normally would, apply the text transformation with the highlight callback.</p>

  <DocCodeBlock class="mt-5" :text="text_4" :font-size="20"
                append-location="top-right"></DocCodeBlock>

  <CodeEditor
    class="mt-5"
    v-model="text_6"
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

  <h1 class="text-h3 font-weight-medium mt-10">Advanced examples</h1>

  <v-divider class="mb-5"/>

  <h2 class="mt-5" id="copy-button">Copy button <a href="/docs/#copy-button">
    <v-icon>mdi-link</v-icon>
  </a></h2>

  <p>We do not have any copy-to-clipboard javascript, you should implement it yourself.</p><br>
  <p>Here you have an example of a copy button in the right side of the the header text, it will
    also change
    the text for a couple of seconds upon copy. The 'v-tags' that you see are from
    Vuetify, the components libraries that I'm using, in your case you might use different.</p>

  <DocCodeBlock class="mt-5" v-model="copyBtnExample" :font-size="20" append-location="top-right"></DocCodeBlock>
  <br>
  <CodeEditor show-header v-model="myText">
    <template #header>
      <v-row no-gutters class="pa-5">
        <v-spacer></v-spacer>
        <v-col class="v-col-auto">
          <button style="color:white; outline: 1px solid white; padding: 10px"
                  @click="() => copyToClipboard(myText)">{{ copied ? 'OK' : 'COPY' }}
          </button>
        </v-col>
      </v-row>
    </template>
  </CodeEditor>

  <p class="pt-5">You can create cuter buttons, like this one (Done with Vuetify) but that's beyond
    our scope and it's up to the developer.</p>
  <br>
  <DocCodeBlock v-model="copyBtnExample2" :font-size="20" append-location="top-right"></DocCodeBlock>
  <br>
  <CodeEditor show-header header-color="white">
    <template #headerText>
      <v-badge icon="mdi-check" color="success" v-model="copied"
               transition="scale-rotate-transition">
        <v-btn style="background-color: #0d1117" variant="outlined" @click="copyToClipboard('you just copied me!')"
               :prepend-icon="copied ? 'mdi-hand-okay' : 'mdi-content-copy'"
               :text="copied ? 'COPIED': 'COPY'">
        </v-btn>
      </v-badge>
    </template>
  </CodeEditor>

  <h2 class="mt-5" id="highlight-ranges">Highlight ranges <a href="/docs/#highlight-ranges">
    <v-icon>mdi-link</v-icon>
  </a></h2>
  <p class="mt-5">You can highlight several line ranges, with the prop <span class="font-weight-bold">highlightGroups.</span></p>
  <DocCodeBlock class="mt-5" :text="hrangesExample" ></DocCodeBlock>
  <DocCodeBlock class="mt-5" :text="hrangesExample2"></DocCodeBlock>
  <p class="mt-5">Results in:</p>
  <CodeEditor class="mt-5" :highlightGroups="ranges" text="1
2
3
4
5
6"></CodeEditor>
</template>

<style scoped>
p {
  font-size: 25px;
}

h2 {
  font-size: 30px
}
</style>
