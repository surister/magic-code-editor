<script setup>

import CodeEditor from "../../../src/components/CodeEditor.vue";
import {computed, ref} from "vue";
import ColorPicker from "@/components/ColorPicker.vue";

const options = ref({
  showLineNumbers: true,
  lineNumberHasBorder: true,
  lineNumberBorder: '1px solid gray',
  lineNumberOpacity: .3,
  lineNumberColor: 'white',

  highlightRow: true,
  highlightRowBackgroundColor: '#C9C9BF0D',
  highlightLineNumberBackgroundColor: 'rgb(255, 95, 87)',
  highlightLineNumberOpacity: 1,
  highlightLineNumWidth: "0 1px 0 0",
  highlightLineNumColor: 'white',
  highlightLineNumBorder: '1px solid currentColor',

  showHeader: true,
  headerBackgroundColor: 'black',
  headerText: 'Some code',
  headerColor: 'white',
  headerFontSize: 15,

  borderRadius: 0,
  backgroundColor: '#0d1117',
  readOnly: false,
  tabSpaces: 2,
  showBorderTop: true,

  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,

  showFooter: false,
  footerFontSize: 15,
  footerBackgroundColor: '#0d1117'
})
const generatedCode = computed(() => `<CodeEditor
  :show-line-number="${options.value.showLineNumbers}"
  line-number-border="${options.value.lineNumberHasBorder ? options.value.lineNumberBorder : 'none'}"
  line-number-color="${options.value.lineNumberColor}"
  line-number-opacity="${options.value.lineNumberOpacity.toFixed(1)}"
  :show-header="${options.value.showHeader}"
  :highlight-row="${options.value.highlightRow}"
  highlight-row-background-color="${options.value.highlightRowBackgroundColor}"
  highlight-line-num-background-color="${options.value.highlightLineNumberBackgroundColor}"
  highlight-line-num-opacity="${options.value.highlightLineNumberOpacity.toFixed(1)}"
  highlight-line-num-border="${options.value.highlightLineNumBorder}"
  highlight-line-num-width="${options.value.highlightLineNumWidth}"
  highlight-line-num-color="${options.value.highlightLineNumColor}"

  header-background-color="${options.value.headerBackgroundColor}"
  header-text="${options.value.headerText}"
  header-color="${options.value.headerColor}"
  header-font-size="${options.value.headerFontSize.toFixed(0)}"

  :show-footer="${options.value.showFooter}"
  footer-font-size="${options.value.footerFontSize.toFixed(0) + 'px'}"
  footer-background-color="${options.value.footerBackgroundColor}"

  border-radius="${options.value.borderRadius.toFixed(0)}"
  background-color="${options.value.backgroundColor}"
  read-only="${options.value.readOnly}"
  tab-spaces="${options.value.tabSpaces}"
  padding-left="${options.value.paddingLeft.toFixed(0) + 'px'}"
  padding-top="${options.value.paddingTop.toFixed(0) + 'px'}"
  padding-bottom="${options.value.paddingBottom.toFixed(0) + 'px'}"
>
</CodeEditor>
`)

</script>

<template>
  <v-row class="pt-4">
    <v-col>
      <h1 class="text-h2 font-weight-medium mb-3 ms-n1">Code block builder</h1>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="7">
      <CodeEditor v-model="generatedCode"
                  :show-header="true"
                  :border-radius="25"
                  :highlight-row="true"
                  on-highlight-line-num-color="rgb(179, 183, 194)"
                  on-highlight-line-num-background-color="green"
                  on-highlight-line-num-width="0"
                  highlight-row-background-color="rgb(40, 200, 64)">
        <template #header>
          <div style="padding: 15px 10px 5px 10px">
                <span v-for="color in ['rgb(255, 95, 87)', 'rgb(255, 188, 47)', 'rgb(40, 200, 64)']"
                      class="dot"
                      :style="{backgroundColor: color, marginLeft: '10px'}">
                </span>
          </div>
        </template>
      </CodeEditor>
      <br>
      Result:
      <CodeEditor
        :show-line-number="options.showLineNumbers"
        :line-number-border="options.lineNumberHasBorder ? options.lineNumberBorder : 'none'"
        :line-number-color="options.lineNumberColor"
        :line-number-opacity="options.lineNumberOpacity"

        :highlight-row="options.highlightRow"
        :highlight-row-background-color="options.highlightRowBackgroundColor"
        :highlight-line-num-background-color="options.highlightLineNumberBackgroundColor"
        :highlight-line-num-opacity="options.highlightLineNumberOpacity"
        :highlight-line-num-border="options.highlightLineNumBorder"
        :highlight-line-num-width="options.highlightLineNumWidth"
        :highlight-line-num-color="options.highlightLineNumColor"

        :show-header="options.showHeader"
        :header-background-color="options.headerBackgroundColor"
        :header-text="options.headerText"
        :header-color="options.headerColor"
        :header-font-size="options.headerFontSize"

        :show-footer="options.showFooter"
        :footer-font-size="options.footerFontSize"
        :footer-background-color="options.footerBackgroundColor"

        :border-radius="options.borderRadius"
        :background-color="options.backgroundColor"
        :read-only="options.readOnly"
        :tab-spaces="options.tabSpaces"
        :show-border-top="options.showBorderTop"
        :padding-left="options.paddingLeft"
        :padding-top="options.paddingTop"
        :padding-bottom="options.paddingBottom">
      </CodeEditor>
    </v-col>

    <v-col class="border-sm mt-15 ml-5">
      <v-label class="text-h5 text-black">General</v-label>
      <v-row class="border-b-sm">
        <v-col>
          <v-slider class="pt-4" label="Border" show-ticks max="30" min="0" hide-details thumb-label
                    v-model="options.borderRadius"></v-slider>
          <v-checkbox v-model="options.readOnly" label="Read only" hide-details/>
          <v-slider min="0" max="100" v-model="options.paddingBottom" label="Padding bottom"
                    thumb-label/>
          <ColorPicker v-model="options.backgroundColor" text="Background color"/>
        </v-col>
        <v-col>
          <v-text-field v-model="options.tabSpaces" label="Spaces per tab"
                        density="compact"/>
          <v-slider min="0" max="100" v-model="options.paddingLeft" label="Padding left"
                    thumb-label/>
          <v-slider min="0" max="100" v-model="options.paddingTop" label="Padding top" thumb-label/>
        </v-col>
      </v-row>

      <v-label class="text-h5 text-black mt-6">Header</v-label>
      <v-row class="border-b-sm">
        <v-col>
          <v-checkbox label="Show header" v-model="options.showHeader" hide-details></v-checkbox>
          <ColorPicker v-model="options.headerBackgroundColor"
                       text="Background color"/>
          <ColorPicker v-model="options.headerColor" text="Color"/>
        </v-col>

        <v-col>
          <v-text-field label="Text" density="compact" v-model="options.headerText"></v-text-field>
          <v-slider label="Font size" min="1" max="50" hide-details thumb-label
                    v-model="options.headerFontSize"></v-slider>
          <v-checkbox v-model="options.showBorderTop" label="Has border"></v-checkbox>
        </v-col>

      </v-row>

      <v-label class="text-h5 text-black mt-6">Footer</v-label>
      <v-row class="border-b-sm">
        <v-col>
          <v-checkbox v-model="options.showFooter" label="Show" hide-details></v-checkbox>
          <ColorPicker v-model="options.footerBackgroundColor" text="Background color"></ColorPicker>
        </v-col>
        <v-col>
          <v-slider v-model="options.footerFontSize" label="Font size"></v-slider>
        </v-col>
      </v-row>

      <v-label class="text-h5 text-black mt-6">Line numbers</v-label>
      <v-row class="border-b-sm">
        <v-col>
          <v-checkbox label="Show" v-model="options.showLineNumbers"
                      hide-details></v-checkbox>
          <ColorPicker v-model="options.lineNumberColor"
                       text="Color"/>
          <v-text-field label="Border" density="compact" hide-details
                        v-model="options.lineNumberBorder"></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox label="Has border"
                      v-model="options.lineNumberHasBorder" hide-details/>
          <v-slider min="0" max="1" v-model="options.lineNumberOpacity" label="Opacity"
                    thumb-label/>
        </v-col>
      </v-row>

      <v-label class="text-h5 text-black mt-6">Line highlight</v-label>
      <v-row class="border-b-sm">
        <v-col>
          <v-checkbox hide-details v-model="options.highlightRow" label="Enabled"/>
          <v-slider min="0" max="1" label="LineNum opacity" thumb-label
                    v-model="options.highlightLineNumberOpacity"></v-slider>
          <ColorPicker v-model="options.highlightLineNumColor"
                       text="LineNum color"></ColorPicker>
        </v-col>
        <v-col>
          <ColorPicker v-model="options.highlightRowBackgroundColor"
                       text="Row background"></ColorPicker>
          <ColorPicker v-model="options.highlightLineNumberBackgroundColor"
                       text="Linum background"></ColorPicker>
          <v-text-field label="border" class="pt-5" v-model="options.highlightLineNumBorder"
                        density="compact"/>
          <v-text-field label="border" hide-details v-model="options.highlightLineNumWidth"
                        density="compact"/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
