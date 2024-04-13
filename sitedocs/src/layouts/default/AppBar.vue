<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-chip label variant="text" class="text-red-accent-1" link to="/">magic-code-editor</v-chip>
      <v-btn class="ml-2" prepend-icon="mdi-github"
             href="https://github.com/surister/magic-code-editor" target="_blank">GITHUB
      </v-btn>
      <v-btn class="ml-2" prepend-icon="mdi-npm"
             href="https://github.com/surister/magic-code-editor" target="_blank">NPM
      </v-btn>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn size="x-large" prepend-icon="mdi-file-document" to="/builder">BLOCK BUILDER</v-btn>
      <v-btn size="x-large" prepend-icon="mdi-file-document" to="/docs">DOCS</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
//
</script>
