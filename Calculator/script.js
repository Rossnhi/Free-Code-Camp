function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKey",






    e => {
      this.setState(state => {
        let prexp, exp, typed, curr;
        typed = e.target.innerHTML;
        if (state.expression[state.expression.length - 1] == "=") {
          return {
            expression: /[\+x\/\-]/.test(typed) ? state.display + typed : typed,
            display: typed,
            prevExp: /[\+x\/\-]/.test(typed) ? state.display + typed : "" };

        }
        if (/[\+x\/\-]/.test(typed)) {
          if (!/[\+x\/\-]/.test(state.display)) {
            curr = typed;
            exp = state.prevExp + state.display + curr;
            prexp = exp;
          } else
          if (typed == "-") {
            curr = typed;
            exp = state.expression + curr;
            prexp = exp;
          } else
          {
            curr = typed;
            exp = state.display == "-" ? /[\+x\/\-]/.test(state.expression[state.expression.length - 2]) ? state.expression.slice(0, -2) + curr : state.expression.slice(0, -1) + curr : state.expression.slice(0, -1) + curr;
            prexp = exp;
          }
        } else
        {
          if (typed == "." && !/\./.test(state.display) || typed != "." && /\./.test(state.display)) {
            curr = state.display + typed;
          } else
          if (typed == "." && /\./.test(state.display)) {
            return state;
          } else
          if (/[\+x\/\-]/.test(state.display)) {
            curr = typed;
          } else
          {
            curr = this.checkLeadingZeroes(state.display + typed);
          }
          exp = state.prevExp + curr;
          prexp = state.prevExp;
        }
        return {
          expression: exp,
          display: curr,
          prevExp: prexp };

      });
    });_defineProperty(this, "handleClear",






    () => {
      this.setState({
        display: "0",
        expression: "0",
        prevExp: "" });

    });_defineProperty(this, "handleEquals",

    () => {
      let x, y, z;
      try {
        x = eval(this.state.expression.replace("x", "*"));
        y = this.state.expression + "=";
        z = "";
      }
      catch {
        x = this.state.display;
        y = this.state.expression;
        z = this.state.prevExp;
      }
      this.setState(state => ({
        display: x,
        expression: y,
        prevExp: z }));

    });this.state = { display: "0", expression: "0", prevExp: "" };}checkLeadingZeroes(str) {let s = str.match(/^0*([1-9][0-9]*)$/);return s == null ? "0" : s[1];}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calc" }, /*#__PURE__*/
      React.createElement("div", { id: "display-container" }, /*#__PURE__*/
      React.createElement("div", { id: "exp" }, this.state.expression), /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display)), /*#__PURE__*/

      React.createElement("div", { class: "key", onClick: this.handleClear, id: "clear" }, "AC"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "add" }, "+"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "subtract" }, "-"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "multiply" }, "x"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "divide" }, "/"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "one" }, "1"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "two" }, "2"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "three" }, "3"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "four" }, "4"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "five" }, "5"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "six" }, "6"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "seven" }, "7"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "eight" }, "8"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "nine" }, "9"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "zero" }, "0"), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleKey, id: "decimal" }, "."), /*#__PURE__*/
      React.createElement("div", { class: "key", onClick: this.handleEquals, id: "equals" }, "=")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
