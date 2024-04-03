<script setup>
const props = [
  {name: 'boxShadow', type: 'String', default: '\'none\'', required: false},
  {name: 'backgroundColor', type: 'String', default: '\'#0d1117\'', required: false},
  {name: 'borderRadius', type: 'Number, String', default: '0', required: false},
  {name: 'codeFontSize', type: 'Number, String', default: 20, required: false},
  {name: 'codeColor', type: 'String', default: 'white', required: false},
  {name: 'extraText', type: 'String', default: 'null', required: false},
  {
    name: 'extraLocation', type: 'String', default: 'top-right', required: false,
    options: '[\'top-left\', \'center\', \'center-left\', \'center-right\', \'top-right\', \'bottom-left\', \'bottom-right\']'
  },
  {name: 'footerFontSize', type: 'Number', default: '15', required: false},
  {name: 'paddingTop', type: 'Number, String', default: '1', required: false},
  {name: 'paddingBottom', type: 'Number, String', default: '1', required: false},
  {name: 'paddingLeft', type: 'String', default: '\'20px\'', required: false},
  {name: 'highlight', type: 'callback', default: 'null', required: false},
  {name: 'headerText', type: 'String', default: '\'\'', required: false},
  {name: 'highlightGroups', type: 'Array', default: '', required: false},
  {
    name: 'highlightRowBackgroundColor',
    type: 'String',
    default: '\'rgba(112,112,112,0.05)\'',
    required: false
  },
  {name: 'headerBackgroundColor', type: 'String, null', default: 'null', required: false},
  {name: 'headerFontColor', type: 'String', default: 'inherit', required: false},
  {name: 'headerFontSize', type: 'Number', default: '15', required: false},
  {name: 'footerBackgroundColor', type: 'String, null', default: 'null', required: false},
  {name: 'readOnly', type: 'Boolean', default: 'false', required: false},
  {name: 'maxLines', type: 'Number, String', default: '-1', required: false},
  {name: 'minLines', type: 'Number, String', default: 'null', required: false},
  {name: 'lineNumberColor', type: 'String', default: '\'rgb(201, 209, 217)\'', required: false},
  {name: 'showHeader', type: 'Boolean', default: 'false', required: false},
  {name: 'showFooter', type: 'Boolean', default: 'false', required: false},
  {name: 'showBorderTop', type: 'Boolean', default: 'true', required: false},
  {name: 'showLineNumber', type: 'Boolean', default: 'true', required: false},
  {name: 'tabSpaces', type: 'Number', default: '2', required: false},

]
</script>

<template>
  <h1 class="text-h3 font-weight-medium mt-10">Props</h1>
  <v-table class="mt-10">
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Type
      </th>
      <th class="text-left">
        default value
      </th>
      <th class="text-left">
        required
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in props"
      :key="item.name">
      <td>
        <v-chip class="font-weight-bold">{{ item.name }}</v-chip>
      </td>
      <td>{{ item.type }}</td>
      <td>{{ item.default }}</td>
      <td>{{ item.required }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<style scoped>

</style>
