import { css } from '@emotion/react';
import { theme } from '@chakra-ui/react';

export const VsCodeTheme = css`
  pre[class*='language-'],
  code[class*='language-'] {
    font-size: 13px;
    text-align: justify;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: break-all;
    text-shadow: none;
    color: #d4d4d4;
    font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
      'Courier New', monospace;
    direction: ltr;
    line-height: 1.5;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::selection,
  code[class*='language-']::selection,
  pre[class*='language-'] *::selection,
  code[class*='language-'] *::selection {
    text-shadow: none;
    background: #75a7ca;
  }

  @media print {
    pre[class*='language-'],
    code[class*='language-'] {
      text-shadow: none;
    }
  }

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    background: #171010;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    color: #db4c69;
    background: #f9f2f4;
  }
  /*********************************************************
* Tokens
*/
  .namespace {
    opacity: 0.7;
  }

  .token.doctype .token.doctype-tag {
    color: #569cd6;
  }

  .token.doctype .token.name {
    color: #9cdcfe;
  }

  .token.comment,
  .token.prolog {
    color: #6a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
    color: #ce9178;
  }

  .language-css .token.string.url {
    text-decoration: underline;
  }

  .token.operator,
  .token.entity {
    color: #d4d4d4;
  }

  .token.operator.arrow {
    color: #569cd6;
  }

  .token.atrule {
    color: #ce9178;
  }

  .token.atrule .token.rule {
    color: #c586c0;
  }

  .token.atrule .token.url {
    color: #9cdcfe;
  }

  .token.atrule .token.url .token.function {
    color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
    color: #d4d4d4;
  }

  .token.keyword {
    color: #569cd6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: #c586c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
    color: #dcdcaa;
  }

  .token.regex {
    color: #d16969;
  }

  .token.important {
    color: #569cd6;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
    color: #4ec9b0;
  }

  .token.console {
    color: #9cdcfe;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.escape {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.tag .token.punctuation {
    color: #808080;
  }

  .token.cdata {
    color: #808080;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
    color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
    color: #d4d4d4;
  }

  .token.entity {
    color: #569cd6;
  }

  .token.namespace {
    color: #4ec9b0;
  }
  /*********************************************************
* Language Specific
*/

  pre[class*='language-javascript'],
  code[class*='language-javascript'],
  pre[class*='language-jsx'],
  code[class*='language-jsx'],
  pre[class*='language-typescript'],
  code[class*='language-typescript'],
  pre[class*='language-tsx'],
  code[class*='language-tsx'] {
    color: #9cdcfe;
  }

  pre[class*='language-css'],
  code[class*='language-css'] {
    color: #ce9178;
  }

  pre[class*='language-html'],
  code[class*='language-html'] {
    color: #d4d4d4;
  }

  .language-regex .token.anchor {
    color: #dcdcaa;
  }

  .language-html .token.punctuation {
    color: #808080;
  }
  /*********************************************************
* Line highlighting
*/
  pre[data-line] {
    position: relative;
  }

  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }

  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: #f7ebc6;
    box-shadow: inset 5px 0 0 #f7d87c;
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }
`;

export const LightTheme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    font-size: 13px;
    text-align: justify;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: break-all;
    text-shadow: none;
    font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
      'Courier New', monospace;
    color: #111b27;
    background: none;
    text-align: left;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    background: #8da1b9;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background: #8da1b9;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #fcfcfc;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #3c526d;
  }

  .token.punctuation {
    color: #111b27;
  }

  .token.delimiter.important,
  .token.selector .parent,
  .token.tag,
  .token.tag .token.punctuation {
    color: #006d6d;
  }

  .token.attr-name,
  .token.boolean,
  .token.boolean.important,
  .token.number,
  .token.constant,
  .token.selector .token.attribute {
    color: #755f00;
  }

  .token.class-name,
  .token.key,
  .token.parameter,
  .token.property,
  .token.property-access,
  .token.variable {
    color: #005a8e;
  }

  .token.attr-value,
  .token.inserted,
  .token.color,
  .token.selector .token.value,
  .token.string,
  .token.string .token.url-link {
    color: #116b00;
  }

  .token.builtin,
  .token.keyword-array,
  .token.package,
  .token.regex {
    color: #af00af;
  }

  .token.function,
  .token.selector .token.class,
  .token.selector .token.id {
    color: #7c00aa;
  }

  .token.atrule .token.rule,
  .token.combinator,
  .token.keyword,
  .token.operator,
  .token.pseudo-class,
  .token.pseudo-element,
  .token.selector,
  .token.unit {
    color: #a04900;
  }

  .token.deleted,
  .token.important {
    color: #c22f2e;
  }

  .token.keyword-this,
  .token.this {
    color: #005a8e;
  }

  .token.important,
  .token.keyword-this,
  .token.this,
  .token.bold {
    font-weight: bold;
  }

  .token.delimiter.important {
    font-weight: inherit;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .language-markdown .token.title,
  .language-markdown .token.title .token.punctuation {
    color: #005a8e;
    font-weight: bold;
  }

  .language-markdown .token.blockquote.punctuation {
    color: #af00af;
  }

  .language-markdown .token.code {
    color: #006d6d;
  }

  .language-markdown .token.hr.punctuation {
    color: #005a8e;
  }

  .language-markdown .token.url > .token.content {
    color: #116b00;
  }

  .language-markdown .token.url-link {
    color: #755f00;
  }

  .language-markdown .token.list.punctuation {
    color: #af00af;
  }

  .language-markdown .token.table-header {
    color: #111b27;
  }

  .language-json .token.operator {
    color: #111b27;
  }

  .language-scss .token.variable {
    color: #006d6d;
  }

  /* overrides color-values for the Show Invisibles plugin
 * https://prismjs.com/plugins/show-invisibles/
 */
  .token.tab:not(:empty):before,
  .token.cr:before,
  .token.lf:before,
  .token.space:before {
    color: #3c526d;
  }

  /* overrides color-values for the Toolbar plugin
 * https://prismjs.com/plugins/toolbar/
 */
  div.code-toolbar > .toolbar a,
  div.code-toolbar > .toolbar button {
    color: #e3eaf2;
    background: #005a8e;
  }

  div.code-toolbar > .toolbar a:hover,
  div.code-toolbar > .toolbar a:focus,
  div.code-toolbar > .toolbar button:hover,
  div.code-toolbar > .toolbar button:focus {
    color: #e3eaf2;
    background: #005a8eda;
    text-decoration: none;
  }

  div.code-toolbar > .toolbar span,
  div.code-toolbar > .toolbar span:hover,
  div.code-toolbar > .toolbar span:focus {
    color: #e3eaf2;
    background: #3c526d;
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
  .line-highlight {
    background: #8da1b92f;
    background: linear-gradient(to right, #8da1b92f 70%, #8da1b925);
  }

  .line-highlight:before,
  .line-highlight[data-end]:after {
    background-color: #3c526d;
    color: #e3eaf2;
    box-shadow: 0 1px #8da1b9;
  }

  pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
    background-color: #3c526d1f;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right: 1px solid #8da1b97a;
    background: #d0dae77a;
  }

  .line-numbers-rows > span:before {
    color: #3c526dda;
  }

  /* overrides color-values for the Match Braces plugin
 * https://prismjs.com/plugins/match-braces/
 */
  .rainbow-braces .token.punctuation.brace-level-1,
  .rainbow-braces .token.punctuation.brace-level-5,
  .rainbow-braces .token.punctuation.brace-level-9 {
    color: #755f00;
  }

  .rainbow-braces .token.punctuation.brace-level-2,
  .rainbow-braces .token.punctuation.brace-level-6,
  .rainbow-braces .token.punctuation.brace-level-10 {
    color: #af00af;
  }

  .rainbow-braces .token.punctuation.brace-level-3,
  .rainbow-braces .token.punctuation.brace-level-7,
  .rainbow-braces .token.punctuation.brace-level-11 {
    color: #005a8e;
  }

  .rainbow-braces .token.punctuation.brace-level-4,
  .rainbow-braces .token.punctuation.brace-level-8,
  .rainbow-braces .token.punctuation.brace-level-12 {
    color: #7c00aa;
  }

  /* overrides color-values for the Diff Highlight plugin
 * https://prismjs.com/plugins/diff-highlight/
 */
  pre.diff-highlight > code .token.deleted:not(.prefix),
  pre > code.diff-highlight .token.deleted:not(.prefix) {
    background-color: #c22f2e1f;
  }

  pre.diff-highlight > code .token.inserted:not(.prefix),
  pre > code.diff-highlight .token.inserted:not(.prefix) {
    background-color: #116b001f;
  }

  /* overrides color-values for the Command Line plugin
 * https://prismjs.com/plugins/command-line/
 */
  .command-line-prompt {
    border-right: 1px solid #8da1b97a;
  }

  .command-line-prompt > span:before {
    color: #3c526dda;
  }
`;

export const prismBaseTheme = css`
  code {
    white-space: pre;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
    background: none;
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes[2]};
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${theme.lineHeights[2]};
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[50]};
    border: 1px solid ${theme.colors.gray[200]};
    border-radius: ${theme.radii.lg};
  }
  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .mdx-marker {
    display: block;
    margin-left: -${theme.space[4]};
    margin-right: -${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background-color: ${theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${theme.colors.blue[600]};
    min-width: fit-content;
  }
  .remark-code-title {
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border: 1px solid ${theme.colors.gray[200]};
    border-top-left-radius: ${theme.radii.lg};
    border-top-right-radius: ${theme.radii.lg};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0 !important;
    }
  }
`;

export const prismLightTheme = css`
  ${prismBaseTheme};
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[50]};
    border: 1px solid ${theme.colors.gray[200]};
  }
  .mdx-marker {
    background-color: hsla(204, 45%, 96%, 1);
  }
`;

export const prismDarkTheme = css`
  ${prismBaseTheme};
  :not(pre) > code[class*='language-'] {
    background: #171010;
  }
  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }
  .token.comment {
    color: rgb(128, 147, 147);
  }
  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }
  .token.variable {
    color: rgb(214, 222, 235);
  }
  .token.number {
    color: rgb(247, 140, 108);
  }
  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }
  .token.punctuation {
    color: rgb(199, 146, 234);
  }
  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }
  .token.class-name {
    color: rgb(255, 203, 139);
  }
  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }
  .token.boolean {
    color: rgb(255, 88, 116);
  }
  .token.property {
    color: rgb(128, 203, 196);
  }
  .token.namespace {
    color: rgb(178, 204, 214);
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[50]};
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[800]};
    border: 1px solid ${theme.colors.gray[700]};
  }
  .mdx-marker {
    background-color: ${theme.colors.gray[700]};
  }
  .remark-code-title {
    background: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
    border: 1px solid ${theme.colors.gray[700]};
  }
`;
