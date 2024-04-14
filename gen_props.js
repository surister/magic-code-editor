const props = {
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
};

const propsComments = {
    'v-model': 'The Vue 3 two-way binding prop, use this with `ref`',
    text: 'Prop for displaying text, if no v-model is provided a ref(text) will be created and binded to the input\'s v-model',
    boxShadow: 'box-shadow applied to the most outer div',
    backgroundColor: 'background-color applied to the main code section',
    borderRadius: 'border-radius applied to the code section, header and footer.',
    codeFontSize: 'font-size applied to the code section.',
    codeColor: 'color applied to the code\'s text',
    appendText: 'Text displayed on the right side of the component, even though via location you can override and display on the left.',
    appendLocation: 'Location of the append Text',
    footerFontSize: 'Font size of the footer',
    showFooter: 'Display the footer',
    footerBackgroundColor: 'Background color of the footer',
    headerBackgroundColor: 'Background color of the header',
    headerColor: 'Color of the header text',
    headerText: 'Text of the text',
    headerFontSize: 'Font size of the header\'s text',
    showHeader: 'Display the header',
    showBorderTop: 'Display the border-top of the code\'s section',
    showLineNumber: 'Display line numbers on the left side of the code section',
    prependInline: 'If true the component will be added a left calculated left padding, useful to display non-overlapping text on the left, for example the $ of $ npm install',
    prependLocation: 'Location of the prepend text',
    prependText: 'Text displayed on the left side of the code\'s section',
    tabSpaces: 'Spaces per tab',
    lineNumberBorder: 'Border applied to the line number section',
    lineNumberColor: 'Color of the line number section\'s text',
    lineNumberOpacity: 'Opacity of the number section\'s text, <.5 usually look nice.',
    highlightLineNumBackgroundColor: 'Background color of the line number section when the row is highlighted, only applied to one row',
    highlightLineNumBorder: 'Border applied to the line number section when the row is highlighted, only applied to one row',
    highlightLineNumColor: 'Color applied to the line number section when the row is highlighted, only applied to one row',
    highlightLineNumOpacity: 'Opacity applied to the line number section when the row is highlighted, only applied to one row',
    highlightRow: 'If the rows should be highlighted, highlights only the current selected row by the cursor',
    highlightLineNumWidth: 'Width of the border applied to the line number section when the row is highlighted, it is made of 4 components, top, left, bottom, right',
    highlightRowBackgroundColor: 'Background color of the code\'s highlighted row',
    highlight: 'Callback to apply transformations to the v-model',
    highlightGroups: 'Highlights several rows, see THIS to see how it works.',
    paddingLeft: 'Padding applied to the code\'s left side',
    paddingRight: 'Padding applied to the code\'s right side',
    paddingTop: 'Padding applied to the code\'s top side',
    paddingBottom: 'Padding applied to the code\'s bottom side',
    maxLines: 'Maximum amount of lines that can be displayed at the same time',
    minLines: 'Minimum amount of lines that are displayed, if no maxLines is present, it will grow infinitely',
    readOnly: 'If the component is read only, if so, it will be just a code block, otherwise it will be an editor'
};

const newProps = [];

for (const [key, value] of Object.entries(props)) {
    const propName = key;
    const types = [];

    if (typeof value.type === 'object') {
        for (const keyElement of value.type) {
            if (keyElement) {
                types.push(keyElement.name);

            } else {
                types.push(keyElement);
            }
        }
    } else {
        if (value.type){
            types.push(value.type.name);
        } else {
            types.push(null);
        }

    }
    newProps.push({name: propName, types: types, default: value.default, required: false, msg: propsComments[propName]});
}

console.log(newProps.sort((a, b) => a.name.localeCompare(b.name)));