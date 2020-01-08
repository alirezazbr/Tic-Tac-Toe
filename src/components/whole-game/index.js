import React from 'react';
import Modal from 'react-modal';
import {CalculateWinner} from '../calculate-winner';
import Cell from '../cell';
import data from '../questions-json/questions.json';
import '../../lib/style/WholeGame.css';

Modal.setAppElement(document.getElementById('root'));

export default class WholeGame extends React.Component {
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
            counter: 0,
            ans: '',
            modalIsOpen: false,
            history: [
                { squares: Array(9).fill(null) }
            ],
            isFlipped: false,
            fadeFront: null,
            time: null,
            callClear: null,
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
            var content = document.getElementById(i).querySelectorAll('.content');
            var id = document.getElementById(i);
            var back = id.querySelectorAll('.back');
            var front = id.querySelectorAll('.front');
            content[0].style.transform = 'rotateY(180deg)';
            content[0].style.transition = 'transform 0.5s';
            this.setState({
                fadeFront: setTimeout(function(){ front[0].classList.add('fade'); }, 200),
            })
            if(result === 'true') {
                squares[i] = 'T';
                this.setState({
                    state: 'correct',
                });
                setTimeout(function(){ 
                    back[0].style.WebkitBackfaceVisibility = 'visible';
                    back[0].style.backfaceVisibility = 'visible'; 
                }, 200);
                back[0].classList.add('correct');
            } else if (result === 'false') {
                squares[i] = 'F';
                this.setState({
                    state: 'wrong',
                });
                setTimeout(function(){ 
                    back[0].style.WebkitBackfaceVisibility = 'visible';
                    back[0].style.backfaceVisibility = 'visible'; 
                }, 200);
                back[0].classList.add('wrong');
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

    clearTime = () => {
        clearTimeout(this.state.time);
    }

    handleClick(i, cb) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = CalculateWinner(squares);
        
        this.setState({
            temp: i,
            title: data[i].title,
            question: data[i].question,
            answer_a: data[i].answer_A,
            answer_b: data[i].answer_B,
        })
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

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = CalculateWinner(squares);
        if(winner == 'T') {
            this.state.time =  setTimeout(function() { alert('you win the game.')}, 200);
        } else if (winner == 'F') {
            this.state.time = setTimeout(function() { alert('you lose the game!')}, 200);
        }

        return (
            <div id="container">
                <div id="gamePad" className="GamePad">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className= "modal"
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
                    <button className="update-button" onClick={this.update}><h3>Restart</h3></button>
                </div>
            </div>
        )
    }
}