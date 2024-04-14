<script setup>
import Install from "@/components/docs/Install.vue";

const props = [
  {
    name: 'appendLocation',
    types: ['String'],
    default: 'top-right',
    required: false,
    msg: 'Location of the append Text'
  },
  {
    name: 'appendText',
    types: ['String'],
    default: null,
    required: false,
    msg: 'Text displayed on the right side of the component, even though via location you can override and display on the left.'
  },
  {
    name: 'backgroundColor',
    types: ['String'],
    default: '#0d1117',
    required: false,
    msg: 'background-color applied to the main code section'
  },
  {
    name: 'borderRadius',
    types: ['Number', 'String'],
    default: 0,
    required: false,
    msg: 'border-radius applied to the code section, header and footer.'
  },
  {
    name: 'boxShadow',
    types: ['String'],
    default: 'none',
    required: false,
    msg: 'box-shadow applied to the most outer div'
  },
  {
    name: 'codeColor',
    types: ['String'],
    default: 'white',
    required: false,
    msg: "color applied to the code's text"
  },
  {
    name: 'codeFontSize',
    types: ['Number', 'String'],
    default: 20,
    required: false,
    msg: 'font-size applied to the code section.'
  },
  {
    name: 'footerBackgroundColor',
    types: ['String', null],
    default: null,
    required: false,
    msg: 'Background color of the footer'
  },
  {
    name: 'footerFontSize',
    types: ['Number'],
    default: 15,
    required: false,
    msg: 'Font size of the footer'
  },
  {
    name: 'headerBackgroundColor',
    types: ['String', null],
    default: null,
    required: false,
    msg: 'Background color of the header'
  },
  {
    name: 'headerColor',
    types: ['String'],
    default: 'white',
    required: false,
    msg: 'Color of the header text'
  },
  {
    name: 'headerFontSize',
    types: ['Number'],
    default: 15,
    required: false,
    msg: "Font size of the header's text"
  },
  {
    name: 'headerText',
    types: ['String'],
    default: '',
    required: false,
    msg: 'Text of the text'
  },
  {
    name: 'highlight',
    types: [null],
    default: undefined,
    required: false,
    msg: 'Callback to apply transformations to the v-model'
  },
  {
    name: 'highlightGroups',
    types: ['Array'],
    default: undefined,
    required: false,
    msg: 'Highlights several rows, see THIS to see how it works.'
  },
  {
    name: 'highlightLineNumBackgroundColor',
    types: ['String'],
    default: 'rgba(112,112,112,0.05)',
    required: false,
    msg: 'Background color of the line number section when the row is highlighted, only applied to one row'
  },
  {
    name: 'highlightLineNumBorder',
    types: ['String'],
    default: '1px solid currentColor',
    required: false,
    msg: 'Border applied to the line number section when the row is highlighted, only applied to one row'
  },
  {
    name: 'highlightLineNumColor',
    types: ['String'],
    default: undefined,
    required: false,
    msg: 'Color applied to the line number section when the row is highlighted, only applied to one row'
  },
  {
    name: 'highlightLineNumOpacity',
    types: ['Number'],
    default: 1,
    required: false,
    msg: 'Opacity applied to the line number section when the row is highlighted, only applied to one row'
  },
  {
    name: 'highlightLineNumWidth',
    types: ['String'],
    default: '0 0 0 0',
    required: false,
    msg: 'Width of the border applied to the line number section when the row is highlighted, it is made of 4 components, top, left, bottom, right'
  },
  {
    name: 'highlightRow',
    types: ['Boolean'],
    default: false,
    required: false,
    msg: 'If the rows should be highlighted, highlights only the current selected row by the cursor'
  },
  {
    name: 'highlightRowBackgroundColor',
    types: ['String'],
    default: 'rgba(112,112,112,0.05)',
    required: false,
    msg: "Background color of the code's highlighted row"
  },
  {
    name: 'lineNumberBorder',
    types: ['String'],
    default: '1px solid rgb(201, 209, 217, .3)',
    required: false,
    msg: 'Border applied to the line number section'
  },
  {
    name: 'lineNumberColor',
    types: ['String'],
    default: 'rgb(201, 209, 217)',
    required: false,
    msg: "Color of the line number section's text"
  },
  {
    name: 'lineNumberOpacity',
    types: ['Number'],
    default: 0.3,
    required: false,
    msg: "Opacity of the number section's text, <.5 usually look nice."
  },
  {
    name: 'maxLines',
    types: ['Number', 'String'],
    default: -1,
    required: false,
    msg: 'Maximum amount of lines that can be displayed at the same time'
  },
  {
    name: 'minLines',
    types: ['Number', 'String'],
    default: null,
    required: false,
    msg: 'Minimum amount of lines that are displayed, if no maxLines is present, it will grow infinitely'
  },
  {
    name: 'paddingBottom',
    types: ['Number', 'String'],
    default: 5,
    required: false,
    msg: "Padding applied to the code's bottom side"
  },
  {
    name: 'paddingLeft',
    types: ['Number'],
    default: 15,
    required: false,
    msg: "Padding applied to the code's left side"
  },
  {
    name: 'paddingTop',
    types: ['Number', 'String'],
    default: 5,
    required: false,
    msg: "Padding applied to the code's top side"
  },
  {
    name: 'prependInline',
    types: ['Boolean'],
    default: true,
    required: false,
    msg: 'If true the component will be added a left calculated left padding, useful to display non-overlapping text on the left, for example the $ of $ npm install'
  },
  {
    name: 'prependLocation',
    types: ['String'],
    default: 'top-left',
    required: false,
    msg: 'Location of the prepend text'
  },
  {
    name: 'prependText',
    types: ['String'],
    default: '',
    required: false,
    msg: "Text displayed on the left side of the code's section"
  },
  {
    name: 'readOnly',
    types: ['Boolean'],
    default: false,
    required: false,
    msg: 'If the component is read only, if so, it will be just a code block, otherwise it will be an editor'
  },
  {
    name: 'showBorderTop',
    types: ['Boolean'],
    default: true,
    required: false,
    msg: "Display the border-top of the code's section"
  },
  {
    name: 'showFooter',
    types: ['Boolean'],
    default: false,
    required: false,
    msg: 'Display the footer'
  },
  {
    name: 'showHeader',
    types: ['Boolean'],
    default: false,
    required: false,
    msg: 'Display the header'
  },
  {
    name: 'showLineNumber',
    types: ['Boolean'],
    default: true,
    required: false,
    msg: 'Display line numbers on the left side of the code section'
  },
  {
    name: 'tabSpaces',
    types: ['Number'],
    default: 2,
    required: false,
    msg: 'Spaces per tab'
  },
  {
    name: 'text',
    types: ['String'],
    default: '',
    required: false,
    msg: "Prop for displaying text, if no v-model is provided a ref(text) will be created and binded to the input's v-model"
  }
]


</script>

<template>
  <h1 class="text-h3 font-weight-medium mt-10">Table of contents <a id="toc" href="/docs/#toc"/>
  </h1>
  <v-list>
    <v-list-item>
      <v-list-item-title class="text-h6">Installing the library</v-list-item-title>
      <v-list-item-subtitle><a class="ml-5" href="/docs#npm">npm</a></v-list-item-subtitle>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-h6">Simple usage</v-list-item-title>
      <v-list-item-subtitle><a class="ml-5" href="/docs#getting-started">Getting started</a>
      </v-list-item-subtitle>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-h6">Customizing CodeBlocks/Editor</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-h6">Syntax highlighting</v-list-item-title>
      <v-list-item-subtitle><a class="ml-5" href="/docs/#how-it-works">How it works</a>
      </v-list-item-subtitle>
      <v-list-item-subtitle><a class="ml-5" href="/docs/#highlight-js">Highlight.js</a>
      </v-list-item-subtitle>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-h6">Advanced examples</v-list-item-title>
      <v-list-item-subtitle><a class="ml-5" href="/docs/#copy-button">Copy button</a>
      </v-list-item-subtitle>
      <v-list-item-subtitle><a class="ml-5" href="/docs/#highlight-ranges">Highlight ranges</a>
      </v-list-item-subtitle>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-h6">Props</v-list-item-title>
      <v-list-item-subtitle><a class="ml-5" href="/docs/#props">Prop list</a>
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>

  <install/>

  <h1 class="text-h3 font-weight-medium mt-10">Props<a href="/docs/#props">
    <v-icon id="props" style="font-size: 40px">mdi-link</v-icon>
  </a>
  </h1>

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
      <th class="text-left">
        Description
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in props"
        :key="item.name">
      <td>
        <v-chip class="font-weight-bold">{{ item.name }}</v-chip>
      </td>
      <td>{{ item.types }}</td>
      <td>{{ item.default }}</td>
      <td>{{ item.required }}</td>
      <td>{{ item.msg }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
p {
  font-size: 25px;
}
</style>
