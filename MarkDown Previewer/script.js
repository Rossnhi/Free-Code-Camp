function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}let md = `# Hello World!

## This is a H2 element
### And here's some other cool stuff:

Some inline code, \`<p>Look at this code!</p>\`.

\`\`\`
// this is multi-line code:

function foo() {
  console.log("Hello world!");
}
\`\`\`
Hey [click here](https://www.youtube.com/watch?v=dQw4w9WgXcQ), and
> Rickrolled!

- And now we have
- Lists!!
  - And this  is indented
    - **pretty  cool**, huh?


![Jim face](https://static.wikia.nocookie.net/1e069f24-4246-41bb-93b8-b6ae7f978025/scale-to-width/370)`;
marked.setOptions({ breaks: true });
class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "updateText",




    newText => {
      this.setState({ text: newText });
    });this.state = { text: md };}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Editor, { updateText: this.updateText, text: this.state.text }), /*#__PURE__*/
      React.createElement(Resize, null), /*#__PURE__*/
      React.createElement(Preview, { text: this.state.text })));


  }}
;

class Editor extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",

    e => {
      this.props.updateText(e.target.value);
    });}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container", id: "editor-container" }, /*#__PURE__*/
      React.createElement("h1", null, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { value: this.props.text, onChange: this.handleChange, name: "", id: "editor" })));


  }}
;

class Resize extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleMouseDown",
    () => {
      $("body").on("mousemove", function (e) {
        let x = e.clientX;
        let w = window.innerWidth;
        if (x > w * 0.2 && x < w - w * 0.2) {
          $("#editor-container").css("width", x - 5);
          $("#preview-container").css("width", w - x - 5);
        }
      });
      $("body").on("mouseup", () => {
        $("body").off("mousemove");
      });
    });}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "resize", onMouseDown: this.handleMouseDown }, /*#__PURE__*/
      React.createElement("svg", { id: "resize-icon", viewBox: "0 0 512 512", width: "100", title: "arrows-alt-h" }, /*#__PURE__*/
      React.createElement("path", { d: "M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z" }))));



  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container", id: "preview-container" }, /*#__PURE__*/
      React.createElement("h1", null, "Preview"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.props.text) } })));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
