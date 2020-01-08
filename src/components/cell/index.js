import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            state: 'neutral'
        }
    }

    clickHandler = (item) => {
        const { onClick, res } = this.props;
        onClick(item, (res) => {
            this.setState({
                state: res
            })
        });
    }

    render() {
        const { item, onClick, res } = this.props;
        return (
            <div key={item} id={item} className="card" onClick={() => this.clickHandler(item)}>
                <div className="content">
                    <div className="front">
                        <p>{item+1}</p>
                    </div>
                    <div id className="back"/>
                </div>
            </div>
        )
    }
}