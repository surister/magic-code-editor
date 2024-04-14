<script setup>
import {computed, nextTick, onMounted, ref} from "vue";


function generateUniqSerial() {
  return 'xxxx-xxxx'.replace(/[x]/g, (c) => {
    const r = Math.floor(Math.random() * 8);
    return r.toString(8);
  });
}

const id = generateUniqSerial()

const extraLocationMap = {
  'top-left': {
    top: 10 + 'px',
    left: 10 + 'px'
  },
  'center': {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  'center-left': {
    top: '50%',
    left: 20 + 'px',
    transform: 'translate(-50%, -50%)'
  },
  'center-right': {
    top: '50%',
    right: '0%',
    transform: 'translate(-50%, -50%)'
  },
  'top-right': {top: 10 + 'px', right: 10 + 'px'},
  'bottom-left': {bottom: 10 + 'px', left: 10 + 'px'},
  'bottom-right': {bottom: 10 + 'px', right: 10 + 'px'},
}

const props = defineProps({
  text: {
    type: String,
    default: ''
  },

  boxShadow: {
    type: String,
    default: 'none'
  },

  backgroundColor: {
    type: String,
    default: '#0d1117'
  },

  borderRadius: {
    type: [Number, String],
    default: 0
  },

  codeFontSize: {
    type: [Number, String],
    default: 20
  },

  codeColor: {
    type: String,
    default: 'white'
  },

  appendText: {
    type: String,
    default: null
  },

  appendLocation: {
    type: String,
    default: 'top-right'
  },

  appendInline: {
    type: Boolean,
    default: true,
  },

  footerFontSize: {
    type: Number,
    default: 15
  },

  paddingTop: {
    type: [Number, String],
    default: 5
  },

  paddingBottom: {
    type: [Number, String],
    default: 5,
  },

  paddingLeft: {
    type: Number,
    default: 15
  },

  highlight: {},

  headerText: {
    type: String,
    default: ''
  },

  highlightGroups: {
    type: Array,
  },

  highlightRow: {
    type: Boolean,
    default: false
  },

  highlightRowBackgroundColor: {
    type: String,
    default: 'rgba(112,112,112,0.05)'
  },

  highlightLineNumColor: {
    type: String,
  },

  highlightLineNumBackgroundColor: {
    type: String,
    default: 'rgba(112,112,112,0.05)'
  },

  highlightLineNumBorder: {
    type: String,
    default: '1px solid currentColor'
  },

  highlightLineNumWidth: {
    type: String,
    default: '0 0 0 0'
  },

  highlightLineNumOpacity: {
    type: Number,
    default: 1
  },

  headerBackgroundColor: {
    type: [String, null],
    default: null
  },

  headerColor: {
    type: String,
    default: 'white'
  },

  headerFontSize: {
    type: Number,
    default: 15
  },

  footerBackgroundColor: {
    type: [String, null],
    default: null
  },

  readOnly: {
    type: Boolean,
    default: false
  },

  maxLines: {
    type: [Number, String],
    default: -1
  },

  minLines: {
    type: [Number, String],
    default: null
  },

  lineNumberBorder: {
    type: String,
    default: '1px solid rgb(201, 209, 217, .3)'

  },

  lineNumberColor: {
    type: String,
    default: 'rgb(201, 209, 217)'
  },

  lineNumberOpacity: {
    type: Number,
    default: .3
  },

  showHeader: {
    type: Boolean,
    default: false
  },

  showFooter: {
    type: Boolean,
    default: false
  },

  showBorderTop: {
    type: Boolean,
    default: true
  },

  showLineNumber: {
    type: Boolean,
    default: true
  },

  tabSpaces: {
    type: Number,
    default: 2
  },

  prependInline: {
    type: Boolean,
    default: true
  },

  prependText: {
    type: String,
    default: ''
  },

  prependLocation: {
    type: String,
    default: "top-left"
  }
})

let model = defineModel()

if (!model.value) {
  model = ref(props.text)
}

const textAreaRef = ref(null)
const lineNumbersRef = ref(null)
const codeRef = ref();
const prependRef = ref(null)
const paddingLeft = ref(props.paddingLeft)

// The current highlighted row.
const highLightedRow = ref(1)

const totalLineNumbers = computed(() => {
      const total = model.value.split('\n').length - 1;
      if (total < props.minLines) {
        return Number(props.minLines)
      }
      return total
    }
)

// Top and left offsets for Scrolling.
const codeTop = ref(0);
const codeLeft = ref(0);

const lineNumberWidth = computed(() => {
  if (props.showLineNumber && lineNumbersRef.value) {
    return lineNumbersRef.value.offsetWidth
  }
  return 0
})

const lineNumberHeight = computed(() => {
  if (lineNumbersRef.value) {
    return lineNumbersRef.value.firstElementChild.offsetHeight
  }
})

function getCurrentLineNumberPos() {
  /*
  * Returns the current Line number the cursor is in.
  *
  * l0 ` HELLO
  * l1   WORLD TODAY| IS
  * l2   A BOTCHED DAY
  *    `
  *  >>> getCurrentLineNumberPos()
  *      1
  *
  * */
  if (model.value) {
    const currentPos = textAreaRef.value.selectionStart
    return model.value.substring(0, currentPos).split('\n').length
  }
  return 0
}

function getRowBounds() {
  /*
  * Given the current cursor position, returns the index bounds.
  *
  * For example in the text:
  * `
  * l0 - Hello how
  * l1 - are you do|ing
  * `
  * Where '|' is the caret, (the current cursor position)
  * >>> getRowBoundsByLineNumber()
  *     (10, 24)
  *
  * Where 10 is the index of the letter 'a' (first line, l1) and
  * 24 is the index of the letter 'g' (second line, l1)
  *
  * */
  const currentPos = textAreaRef.value.selectionStart - 1
  const textLength = model.value.length
  let leftBound = 0;
  let rightBound = currentPos + 1

  for (let i = currentPos; i >= 0; i--) {

    if (model.value.charAt(i) === '\n') {
      leftBound = i
      break;
    }
  }

  for (let i = currentPos; i >= textLength; i++) {
    if (model.value.charAt(i) === '\n') {
      rightBound = i
      break;
    }
  }
  return [leftBound, rightBound]
}

function escapeHtml(unsafe) {
  // https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
  return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

function onSelectionChange() {
  if (!props.highlightRow) {
    return
  }
  let currentLine = getCurrentLineNumberPos()

  if (currentLine === 0 || currentLine === highLightedRow.value) {
    /* There is no need to highlight when the current line is already highlighted or if the index is 0
    * which only happens when we are not focusing the textarea.
    * */
    return
  }
  deHighlightRow(highLightedRow.value)
  highlightRow(currentLine)
}

function onFocusOut() {
  if (props.highlightRow) {
    return
  }
  deHighlightRow(highLightedRow.value)
}

function deHighlightRow(rowPos) {
  const el = document.getElementById(id + 'ln' + rowPos)
  if (el) {
    el.style.backgroundColor = ''
    highLightedRow.value = 0
  }
}

function highlightRow(rowPos, color) {
  const el = document.getElementById(id + 'ln' + rowPos)
  el.style.backgroundColor = color ? color : props.highlightRowBackgroundColor
  highLightedRow.value = rowPos
}

function insertSubstringAt(substring, pos) {
  model.value =
      model.value.substring(0, pos) + substring + model.value.substring(pos);
  const newCursorPos = pos + substring.length;
  nextTick(() => setCursorPos(newCursorPos))
}

function scroll(e) {
  codeTop.value = -e.target.scrollTop; /* Y axis scroll*/
  codeLeft.value = -e.target.scrollLeft; /*X axis scroll */
}

function tab(e) {
  const cursorPos = textAreaRef.value.selectionStart;
  insertSubstringAt(' '.repeat(props.tabSpaces), cursorPos)
}

function setCursorPos(pos) {
  textAreaRef.value.setSelectionRange(pos, pos)
}

/*  We accept minHeight and minLines, minLines takes precedence, if given, it will set minHeight = lineHeight * minLines */
const realMinHeight = computed(() => {
  if (props.minLines) {
    return lineNumberHeight.value * props.minLines + 1
  }
  return -1
})

const realMaxHeight = computed(() => {
  if (props.maxLines) {
    return (lineNumberHeight.value * props.maxLines) + 1
  }
  return -1
})

const wrappedText = computed(() => {
  let lines = model.value

  if (props.highlight) {
    lines = props.highlight(lines)
  } else {
    lines = escapeHtml(lines)
  }

  lines = lines.split('\n')
  let final = '';
  let p = 0;
  for (const i in lines) {
    p += 1
    const backgroundColor = lines.length === 1 && props.highlightRow ? props.highlightRowBackgroundColor : ''
    final += `<div id="${id}ln${p}" style="background-color: ${backgroundColor};">${lines[i] !== '' ? lines[i] : ' '}</div>`
  }
  return final
})

onMounted(() => {
  if (props.prependInline && prependRef.value && props.prependText) {
    paddingLeft.value = Number.parseInt(paddingLeft.value) + Number.parseInt(prependRef.value.offsetWidth) + 5
  }

  if (props.highlightGroups) {
    for (const group of props.highlightGroups) {
      for (let i = group.from; i <= group.to; i++) {
        highlightRow(i, group.color)
      }
    }
  }
})

</script>

<template>
  <!-- Code editor -->
  <div class="code-editor"
       :style="{padding: '0', background: backgroundColor, borderRadius: borderRadius + 'px', boxShadow: boxShadow}">

    <!-- Header -->
    <div v-if="showHeader"
         class="header">
      <slot name="header">
        <div :style="{
        borderRadius: borderRadius + 'px' + ' ' + borderRadius + 'px' + ' 0 0' ,
        paddingTop: 6 + 'px',
        paddingLeft: 15 + 'px',
        paddingBottom: 6 + 'px',
        color: headerColor,
        backgroundColor: headerBackgroundColor ? headerBackgroundColor : backgroundColor,
        fontSize: headerFontSize + 'px'}">
          <slot name="headerText">
            {{ headerText }}
          </slot>
        </div>
      </slot>
    </div>

    <!-- Outline, border and sizing -->
    <div :style="{
          borderTop: showHeader && showBorderTop ? '1px solid rgba(201, 209, 217, .4)': '',
          borderBottom: showFooter ? '1px solid rgba(201, 209, 217, .4)': '',
          minHeight: realMinHeight + 'px',
          maxWidth: 'auto',
          maxHeight: realMaxHeight + 'px',
    }">

      <div class="code-area">

        <!-- Line Numbers -->
        <div v-if="showLineNumber"
             ref="lineNumbersRef"
             class="line-nums"
             :style="{
                borderRight: lineNumberBorder,
                color: lineNumberColor,
                fontSize: codeFontSize + 'px',
                paddingTop: paddingTop + 'px',
                paddingBottom: paddingBottom + 'px',
                top: codeTop + 'px'
          }">
          <div v-for="num in totalLineNumbers + 1"
               :class="num === highLightedRow && props.highlightRow  ? 'line-highlight': ''">
            <div
                :style="{paddingRight: '8px', paddingLeft: '8px', opacity: num === highLightedRow && props.highlightRow ? props.HighlightLineNumOpacity : props.lineNumberOpacity}">
              {{ num }}
            </div>
          </div>
        </div>

        <!-- Code - Editor Area -->
        <textarea v-if="!readOnly" v-model="model"
                  ref="textAreaRef"
                  spellcheck="false"
                  :autofocus="true"
                  :readonly=readOnly
                  @scroll="scroll"
                  @selectionchange="onSelectionChange"
                  @focusout="onFocusOut"
                  @keydown.tab.prevent.stop="tab"
                  :style="{
                    marginTop: '0',
                    paddingLeft: paddingLeft + 'px',
                    paddingTop: paddingTop + 'px',
                    marginLeft: lineNumberWidth + 'px',
                    width: showLineNumber ? 'calc(100% - ' + lineNumberWidth + 'px)' : '100%',
                    fontSize: codeFontSize + 'px',
                    maxHeight: realMaxHeight + 'px',
                    minHeight: realMinHeight + 'px',
                    caretShape: '20px',
        }"/>
        <pre :style="{
            marginLeft: lineNumberWidth + 'px',
            width: showLineNumber ? 'calc(100% - ' + lineNumberWidth + 'px)' : '100%',
            paddingLeft: paddingLeft + 'px',
            paddingTop: paddingTop + 'px',
            paddingRight: '20px',
            paddingBottom: paddingBottom + 'px',
            maxHeight: realMaxHeight + 'px',
            minHeight: realMinHeight + 'px',
          }">
        <code ref="codeRef"
              :style="{
              top: codeTop + 'px',
              left: codeLeft + 'px',
              fontSize: codeFontSize + 'px',
              color: codeColor,
          }"><span
            v-html="wrappedText"
            :style="{
              color: codeColor,
              display:'inline'
          }"/></code>
      </pre>
        <div v-if="prependText || prependLocation" ref="prependRef"
             :style="{
                position: 'absolute',
                'z-index': 3,
                top: extraLocationMap[prependLocation].top,
                bottom: extraLocationMap[prependLocation].bottom,
                left: extraLocationMap[prependLocation].left,
                right: extraLocationMap[prependLocation].right,
                transform: extraLocationMap[prependLocation].transform,
                color: 'white'
        }">
          <slot name="prependText">
            {{ prependText }}
          </slot>
        </div>

        <div v-if="appendText || appendLocation" id="extra_stuff"
             :style="{
                position: 'absolute',
                'z-index': 3,
                top: extraLocationMap[appendLocation].top,
                bottom: extraLocationMap[appendLocation].bottom,
                left: extraLocationMap[appendLocation].left,
                right: extraLocationMap[appendLocation].right,
                transform: extraLocationMap[appendLocation].transform,
                color: 'white'
        }">
          <slot name="appendText">
            {{ appendText }}
          </slot>
        </div>
      </div>
    </div>
    <slot name="footer">
      <div v-if="showFooter"
           :class="{ border: showLineNumber }"
           :style="{
        borderBottomLeftRadius: borderRadius + 'px' ,
        borderBottomRightRadius: borderRadius + 'px',
        color: '#c9d1d9',
        backgroundColor: footerBackgroundColor ? footerBackgroundColor : backgroundColor,
        fontSize: footerFontSize + 'px'}">
        <div :style="{
            paddingTop: 6 + 'px',
            paddingLeft: 15 + 'px',
            paddingBottom: 6 + 'px',
            }">
          <slot name="footer-text">
            Line: {{ highLightedRow }} - {{ model.length }} char(s)
          </slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<style>
.line-nums .line-highlight {
  color: v-bind(highlightLineNumColor);
  background-color: v-bind(highlightLineNumBackgroundColor) !important;
  border: v-bind(highlightLineNumBorder);
  border-width: v-bind(highlightLineNumWidth);
  opacity: v-bind(highlightLineNumOpacity) !important;
  border-radius: v-bind(borderRadius);
}

.line-nums {
  color: rgb(201, 209, 217);
}


.code-editor {
  position: relative;
}

.code-editor > div {
  width: 100%;
  height: 100%;
}

/* code-area */
.code-editor .code-area {
  position: relative;
  z-index: 0;
  text-align: left;
  overflow: hidden;
}

/* font style */
.code-editor .code-area > textarea,
.code-editor .code-area > pre > code,
.code-editor .line-nums > div,
.code-editor .header {
  font-family: Consolas, Monaco, monospace !important;
  line-height: 1.5 !important;
}

.code-editor * {
  font-family: Consolas, Monaco, monospace;
}

.code-editor .code-area > textarea:hover,
.code-editor .code-area > textarea:focus-visible {
  outline: none;
}

.code-editor .code-area > textarea {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: auto;
  box-sizing: border-box;
  caret-color: rgb(127, 127, 127);
  color: transparent;
  white-space: pre;
  word-wrap: normal;
  border: 0;
  width: 100%;
  height: 100%;
  background: none;
  resize: none;
}

.code-editor .code-area > pre {
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  overflow: hidden;
  font-size: 0;
  margin: 0;
}

.code-editor .code-area > pre > code {
  background: none;
  display: block;
  position: relative;
  overflow-x: visible !important; /* Important for scrolling.*/
  border-radius: 0;
  box-sizing: border-box;
  margin: 0;
}

/* wrap code */
.code-editor.wrap .code-area > textarea,
.code-editor.wrap .code-area > pre > code {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* line-nums */
.code-editor .line-nums {
  min-width: 36px;
  position: absolute;
  text-align: right;
  box-sizing: border-box;
  left: 0;
}
</style>