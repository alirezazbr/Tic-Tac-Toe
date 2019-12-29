import React from 'react';
import Modal from 'react-modal';
import {CalculateWinner} from '../calculate-winner';
import Cell from '../cell';
import data from '../questions-json/questions.json';
import '../../lib/style/HoleGame.css';

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
        boxShadow: '0px 6px 11px -7px',
    }
};

Modal.setAppElement(document.getElementById('root'));

export default class HoleGame extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.jumpTo = this.jumpTo.bind(this);

        this.state = {
            state: 'neutral',
            xIsNext: true,
            stepNumber: 0,
            title: null,
            question: null,
            answer_a: null,
            answer_b: null,
            temp: null,
            ans: '',
            modalIsOpen: false,
            history: [
                { squares: Array(9).fill(null) }
            ],
            isFlipped: false
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    winnerStatus() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = CalculateWinner(current.squares);

        let status, statusOfWin;
        if (winner) {
            status = 'Winner is ' + winner;
            if(winner === 'T'){
                setTimeout(function() {
                    alert('You win the game, well done')
                })
                statusOfWin = 'YOU WIN';
            } else if(winner === 'F'){
                setTimeout(function() {
                    alert('Unfortunately, you lose the game. Try again')
                })
                statusOfWin = 'GAME OVER';
            }
        } else {
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
            statusOfWin = status;
        }

        return statusOfWin;
    }

    answer = (result) => {
        let i = this.state.temp;

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        let squares = current.squares.slice();
        const winner = CalculateWinner(squares);
        if (winner || squares[i]) {
            return;
        } else {
            this.closeModal();
            var y = document.getElementById(i).querySelectorAll('.content');
            var x = document.getElementById(i);
            var z = x.querySelectorAll('.back');
            y[0].style.transform = 'rotateY(180deg)';
            y[0].style.transition = 'transform 0.5s';
            
            if(result === 'true') {
                squares[i] = 'T';
                this.setState({
                    state: 'correct',
                });
                z[0].classList.add('correct');
                z[0].style.backgroundColor = "#82D289";
            } else if (result === 'false') {
                squares[i] = 'F';
                this.setState({
                    state: 'wrong',
                });
                z[0].classList.add('wrong');
                z[0].style.backgroundColor = "#EA6C6D";
            }

            this.setState({
                history: history.concat({
                    squares: squares
                }),
                xIsNext: !this.state.xIsNext,
                stepNumber: history.length,
                temp: null,
            })
            
        }
    }

    handleClick(i, cb) {
        this.state.temp = i;
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = CalculateWinner(squares);

        this.state.title = data[i].title;
        this.state.question = data[i].question;
        this.state.answer_a = data[i].answer_A;
        this.state.answer_b = data[i].answer_B;
        cb('correct');
        if (winner || squares[i]) {
            return;
        } else {
            this.openModal();
        }
    }

    update = () => {
        window.location.reload(true);
    }
    
    render() {
        let counter_1 = [0,1,2,3,4,5,6,7,8];
        const { question, title, answer_a, answer_b } = this.state;
        let index = this.state.temp;
        return (
            <div id="container">
                <div id="gamePad" className="GamePad">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <p className="the-modal-title" ref={subtitle => this.subtitle = subtitle}>{title}
                            <span className="the-modal-content">{question}</span>
                        </p>
                        <button className="modal-btn btn-1" onClick={() => this.answer(data[index].type_ans_A)}>{answer_a}</button>
                        <button className="modal-btn btn-2" onClick={() => this.answer(data[index].type_ans_B)}>{answer_b}</button>
                        <button className="modal-btn btn-back" onClick={this.closeModal}>Back</button>
                    </Modal>
                    <div className="the-game">
                        <div className="border-row">
                            {counter_1.map(item => {
                                return (
                                    <Cell item={item} onClick={this.handleClick} res={this.state.state}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="status">
                        <h3>{this.winnerStatus()}</h3>
                    </div>
                    <button className="update-button" onClick={this.update}><h3>Quit</h3></button>
                </div>
            </div>
        )
    }
}