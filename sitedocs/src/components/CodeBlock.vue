
<script setup>
import {CodeEditor} from "magic-code-editor";
import 'magic-code-editor/style.css'

// Highlighting using highlight.js but prism.js or other highlighters are compatible.
// You will need to 'npm install highlight.js'
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('python', python)

const text = `from cratedb_sqlparse import sqlparse

query = "SELECT * FROM SYS.SHARDS; INSERT INTO doc.tbl VALUES (1);"

statements = sqlparse(query)
select_query = statements[0]

print(select_query.query)
# SELECT * FROM SYS.SHARDS`
</script>

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

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css';
</style>
