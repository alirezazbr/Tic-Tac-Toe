webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/hole-game/HoleGame.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/hole-game/HoleGame.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lily+Script+One);", ""]);
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../../lib/img/checked.png */ "./src/lib/img/checked.png"));
// Module
exports.push([module.i, ".GamePad {\n    width: 400px;\n    height: 401px;\n    background-color: #FFFFFF;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.border-row {\n    width: 100%;\n    height: 125px;\n    margin-top: 8px;\n    padding: 0;\n    float: left;\n    position: relative;\n}\n\n.border-row:after {\n    clear: both;\n    content: \"\";\n    display: table;\n  }\n\n.square {\n    width: 125px;\n    height: 125px;\n    float: left;\n    background-color: #1486C4;\n    border: 1px solid #1486C4;\n    margin-right: 8px;\n    position: relative;\n    border-radius: 12px;\n    /* z-index: 1; */\n    transform: rotateY(0deg);\n    transition: transform 1s;\n}\n\n.square:focus,\n.update-button,\n.modal-btn {\noutline: none;\n}\n\n.square p {\n    position: absolute;\n    top: 33%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: 23px;\n    font-weight: 700;\n}\n\n.modal-btn {\n    width: 350px;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 2px solid #1486C4;\n    background: #FFFFFF;\n    height: 57px;\n    border-radius: 30px;\n    color: #1486C4;\n    font-weight: 900;\n  }\n  \n  .modal-btn.btn-1{\n    top: 50%;\n    font-size: 24px;\n  }\n  \n  .modal-btn.btn-2{\n    top: 70%;\n    font-size: 24px;\n  }\n  \n  .modal-btn.btn-back{\n    border: none;\n    font-size: 20px;\n    top: 86%;\n  }\n  \n  .the-modal-content {\n    font-size: 18px;\n    font-weight: 400;\n    color: #7C7C7C;\n  }\n  \n  .the-modal-title {\n    color: #8F8F8F;\n    font-weight: 800;\n    float: left;\n    font-size: 1.17em;\n  }\n\n  .ans-div {\n    position: absolute;\n    background: #fff;\n    border: 1px solid #999;\n    float: left;\n    font-size: 50px;\n    font-weight: bold;\n    margin-right: -1px;\n    margin-top: -1px;\n    padding: 0;\n    text-align: center;\n    width: 125px;\n    line-height: 125px;\n    height: 125px;\n    display: inline-block;\n    text-decoration: none;\n    color: #fff;\n    margin: 4px;\n    border-radius: 12px;\n  }\n\n  .put-image {\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-position: center;\n    background-size: auto;\n    background-repeat: no-repeat;\n  }\n  \n  .ans-div.true{\n    /* display: none; */\n    visibility: hidden;\n    background-color: #82D289;\n    border: 1px solid #82D289;\n    /* z-index: 0; */\n    top: -5px;\n    left: -4px;\n    /* -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n    -webkit-transition: transform 1s;\n    -moz-transition: transform 1s;\n    -ms-transition: transform 1s;\n    -o-transition: transform 1s;\n    transition: transform 1s; */\n  }\n  \n  .ans-div.false{\n    /* display: none; */\n    visibility: hidden;\n    background-color: #EA6C6D;\n    border: 1px solid #EA6C6D;\n    z-index: 0;\n    top: -5px;\n    left: -4px;\n    transform: rotateY(180deg);\n    transition: transform 1s;\n  }\n  \n  .img-ans {\n    /* position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); */\n  }\n\n  .square-shell {\n    position: relative;\n    float: left;\n    border-radius: 12px;\n  }\n\n  .flip-card {\n    background-color: transparent;\n    width: 125px;\n    height: 125px;\n    perspective: 1000px;\n    position: relative;\n    border-radius: 12px;\n    float: left;\n    margin-right: 8px;\n  }\n\n  .flip-card-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    border-radius: 12px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\n\n  /* .flip-card:hover .flip-card-inner {\n    transform: rotateY(180deg);\n    border-radius: 12px;\n  } */\n\n  .flip-card-front,\n  .flip-card-back {\n    position: absolute;\n    width: 100%;\n    border-radius: 12px;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n\n  .flip-card-front {\n    background-color: #bbb;\n    color: black;\n    border-radius: 12px;\n  }\n\n  .flip-card-back {\n    background-color: #2980b9;\n    color: white;\n    transform: rotateY(180deg);\n    border-radius: 12px;\n  }\n\n  .the-game {\n    /* width: 396px;\n    height: 60px;\n    background-color: #1486C4; */\n    width: 100%;\n    position: absolute;\n    top: 49%;\n    left: 36%;\n    transform: translate(-50%, -50%);\n    /* text-align: center;\n    border: 2px solid #1486C4;\n    border-radius: 30px;\n    color: white; */\n  }\n\n  .status {\n    width: 393px;\n    height: 50px;\n    background-color: #1486C4;\n    position: absolute;\n    top: 115%;\n    left: 36%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    border: 2px solid #1486C4;\n    border-radius: 30px;\n    color: white;\n  }\n\n  .status h3 {\n    margin-top: 12px;\n  }\n\n  .update-button {\n    width: 396px;\n    height: 50px;\n    background-color: #FFFFFF;\n    position: absolute;\n    top: 132%;\n    left: 36%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    border: 2px solid #FFFFFF;\n    border-radius: 30px;\n    color: #1486C4;\n  }\n\n\n  .card {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    width: 125px;\n    height: 125px;\n    margin-top: 8pxpx;\n    margin-right: 8px;\n    float: left;\n    perspective: 500px;\n  }\n  \n  .content {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 15px rgba(0,0,0,0.1);\n  \n    transition: transform 1s;\n    transform-style: preserve-3d;\n  }\n  \n  .card:hover .content {\n    transform: rotateY( 180deg ) ;\n    transition: transform 0.5s;\n  }\n  \n  .front,\n  .back {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: white;\n    line-height: 300px;\n    color: #03446A;\n    text-align: center;\n    font-size: 60px;\n    border-radius: 5px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n  \n  .back {\n    background: #03446A;\n    color: white;\n    transform: rotateY( 180deg );\n  }", ""]);


/***/ }),

/***/ "./src/components/hole-game/HoleGame.css":
/*!***********************************************!*\
  !*** ./src/components/hole-game/HoleGame.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HoleGame.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/hole-game/HoleGame.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HoleGame.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/hole-game/HoleGame.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HoleGame.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/hole-game/HoleGame.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/hole-game/HoleGame.js":
/*!**********************************************!*\
  !*** ./src/components/hole-game/HoleGame.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HoleGame; });
/* harmony import */ var _home_alireza_Documents_Projects_Tic_Tac_Toe_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/img/checked.png */ "./src/lib/img/checked.png");
/* harmony import */ var _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/img/cancel.png */ "./src/lib/img/cancel.png");
/* harmony import */ var _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HoleGame_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HoleGame.css */ "./src/components/hole-game/HoleGame.css");
/* harmony import */ var _HoleGame_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HoleGame_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/alireza/Documents/Projects/Tic-Tac-Toe/src/components/hole-game/HoleGame.js";





const customStyles = {
  content: {
    width: '400px',
    height: '385px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 6px 11px -7px'
  }
};
const Title = ['Question copy area', 'Question copy area', 'Question copy area', 'Question copy area', 'Question copy area', 'Question copy area', 'Question copy area', 'Question copy area', 'Question copy area'];
const Questions = [' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.', ' - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eimod tempor invidunt ut labore.'];
const Answers_A = ['Answer A', 'Answer A', 'Answer A', 'Answer A', 'Answer A', 'Answer A', 'Answer A', 'Answer A', 'Answer A'];
const Answers_B = ['Answer B', 'Answer B', 'Answer B', 'Answer B', 'Answer B', 'Answer B', 'Answer B', 'Answer B', 'Answer B'];
react_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement(document.getElementById('root'));
class HoleGame extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.ansA = () => {
      let i = this.state.temp;
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const winner = calculateWinner(squares);

      if (winner || squares[i]) {
        return;
      } else {
        squares[i] = 'T';
        this.setState({
          history: history.concat({
            squares: squares
          }),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
          temp: null
        });
        this.closeModal();
        var x = document.getElementById('gamePad').querySelectorAll('.flip-card');
        var y = document.getElementById(i).querySelectorAll('.flip-card-inner');
        var t = document.getElementById(i).querySelectorAll('.ans-div');

        if (this.state.stepNumber == 0) {
          y[0].style.transform = 'rotateY(0deg)';
          t[0].style.visibility = 'hidden';
        }

        y[0].style.transform = 'rotateY(180deg)';
        y[0].style.transform = 'rotateY(180deg)';
        t[0].style.visibility = 'visible';
      }
    };

    this.ansB = () => {
      let i = this.state.temp;
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const winner = calculateWinner(squares);

      if (winner || squares[i]) {
        return;
      } else {
        squares[i] = 'F';
        this.setState({
          history: history.concat({
            squares: squares
          }),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
          temp: null
        });
        this.closeModal();
        var x = document.getElementById('gamePad').querySelectorAll('.flip-card');
        var y = document.getElementById(i).querySelectorAll('.flip-card-inner');
        var t = document.getElementById(i).querySelectorAll('.ans-div');
        t[1].style.visibility = 'visible';
        x[i].style.transform = 'rotateY(180deg)';
        y[0].style.transform = 'rotateY(180deg)';
      }
    };

    this.update = () => {
      console.log('clicked');
      window.location.reload(true);
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.humpTo = this.jumpTo.bind(this);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      title: null,
      question: null,
      answer_a: null,
      answer_b: null,
      ans: null,
      temp: null,
      modalIsOpen: false,
      history: [{
        squares: Array(9).fill(null)
      }],
      isFlipped: false
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  handleClick(i) {
    this.state.temp = i;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    this.state.title = Title[i];
    this.state.question = Questions[i];
    this.state.answer_a = Answers_A[i];
    this.state.answer_b = Answers_B[i];

    if (winner || squares[i]) {
      return;
    } else {
      this.openModal();
    }
  }

  render() {
    const _this$state = this.state,
          question = _this$state.question,
          title = _this$state.title,
          answer_a = _this$state.answer_a,
          answer_b = _this$state.answer_b;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to #' + move : 'Go to Start the Game';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: move,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: () => {
          this.jumpTo(move);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, desc));
    });
    let status;

    if (winner) {
      status = 'Winner is ' + winner;
    } else {
      status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "Front"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "gamePad",
      className: "GamePad",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      isOpen: this.state.modalIsOpen,
      onRequestClose: this.closeModal,
      style: customStyles,
      contentLabel: "Example Modal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "the-modal-title",
      ref: subtitle => this.subtitle = subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "the-modal-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, question)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "modal-btn btn-1",
      onClick: this.ansA,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, answer_a), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "modal-btn btn-2",
      onClick: this.ansB,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, answer_b), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "modal-btn btn-back",
      onClick: this.closeModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, "Back"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "the-game",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "border-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "0",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, "1"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true img-ans put-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "1",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "2"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "2",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, "3"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "border-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "3",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, "4"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "4",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(4),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, "5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "5",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, "6"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "border-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "6",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(6),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, "7"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "7",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(7),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, "8"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "8",
      className: "flip-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-front",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "square",
      onClick: () => this.handleClick(8),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, "9"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flip-card-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_checked_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ans-div false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-ans",
      src: _lib_img_cancel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, status)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "update-button",
      onClick: this.update,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, "Quit"))));
  }

}

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [2, 5, 8], [1, 4, 7]];

  for (let i = 0; i < lines.length; i++) {
    const _lines$i = Object(_home_alireza_Documents_Projects_Tic_Tac_Toe_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(lines[i], 3),
          a = _lines$i[0],
          b = _lines$i[1],
          c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/***/ }),

/***/ "./src/lib/img/cancel.png":
/*!********************************!*\
  !*** ./src/lib/img/cancel.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBIHLihYGQbKAAABrklEQVRo3sWZS1KDUBBFr64L1qEV/KwmmUTdFCnHUK6EODTWzcCKQeTT/V7fomcJqZzTnRd4FwAAAEse2LFlBXHxgS07Hlj237znFy/1JsXvfjnffB7DSxV6+KsCS544rL0Ev//HObEE3zlW4QojeJKswU9SrzCBJ4/gB6lWmMSTDVhxukKW42Dp/a3NvF/AFEzfzq1qCrPdv/Y/KFEw4zUKLny8ghsfq5CEj1NIxscoZOHzFbLxeQoh+HSFMHyaQijerzCLTz2X2hUkeLuCDG9TkOKBpSv67NGXAPziFLTdZyhEpwungiLcOBRU2cqooEyXBgVpuF1WcONv3QY34g4X+t+t+hMY8NL/gA0vOwvY8QoFJz5aIQEfqbDy5Xh5q6kL9ya8VMG+0ZYo+Pb54Qr+mBGqkJZywhTSQ1aIQl7Gy1bIj5hZCjEJN1khLmAnKcTme7dC+O0Fn0I83qWgwZsVVr5dz0dV96YpVGCr694whRbs1PhZhSNY6/EzCjVYrPrgsgDAu8Gj25ClN6qwHeCfLgf6CjL8QOGKBwAWrNmx4UaJBwBWbNixZvHz+gzVwXieUKsalQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0xOFQwNzo0Njo0MCswMDowMHWKf9MAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMThUMDc6NDY6NDArMDA6MDAE18dvAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/lib/img/checked.png":
/*!*********************************!*\
  !*** ./src/lib/img/checked.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBIHFCvkuYkJAAABJElEQVRo3u3X2QrCMBAF0Km/a913kb6pRURc/tQP6PWlipQkTZpkAjr31Y7nJlCYEkkkEgl7sMcuLQ8ARSr+gHfKtHyKCg0eAE6c/BmqlD2u09NM+cOTiYc627/mNzz8UXjhhefnSw2/Fr59vEDfA89w1fATuz9YAqgwCM5bnn5RP96pgj8//xpxruDPzxpjThWQ4ebHTxWj1hUM/Mr2BCfleGXzRhj4sf0dvr9VnG8hwOl9KgTkibSbm7aClq8w6sC7VojAu1RAhnsE3rZCRJ5Iu0x8KkTm2yoY+GEgnogIFw2S48HAG24BTLxThTg8kWG94uGtKsTlWyvE5427DgdfV7gp+Y7La5gKnLyiAjffqJCCryvcE/J1hQfyZLxEIvnhvADOk6nW65nFBQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0xOFQwNzoyMDo0MyswMDowMKHJ30oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMThUMDc6MjA6NDMrMDA6MDDQlGf2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ })

})
//# sourceMappingURL=main.a612a160ca5e5efdec75.hot-update.js.map