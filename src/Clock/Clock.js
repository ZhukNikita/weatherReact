import '../App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';



class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {
			date: new Date()
		}
	}
	  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

	render(){
		var date = new Date();
		return(
			<div className="Clock">
				<h2>Date: {date.toLocaleDateString()}</h2>
				<h2>Time: {this.state.date.toLocaleTimeString()}</h2>
			</div>
	)}
}
export default Clock;