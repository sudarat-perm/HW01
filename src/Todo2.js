import React , {Component,PropTypes} from 'react';
import './bulma.css';

export class Todo2 extends Component {

state={
  ValueState:''
}

HandleValue=(event)=>{
  this.setState({ValueState:event.target.value});
}

render(){
  var Box=[];
  for (var i = 1; i <= this.state.ValueState; i++) {
    Box.push(<div className="column notification is-primary has-text-centered"><div className="notification is-dark">{i}</div></div>);
  }

  return(
    <div>
      <span className="select" onChange={this.HandleValue} value={this.state.ValueState}>
        <select>
          <option value="0">select</option>
          <option value="1">1 Box</option>
          <option value="2">2 Boxs</option>
          <option value="3">3 Boxs</option>
          <option value="4">4 Boxs</option>
        </select>
      </span>
      <div className="columns">{Box}</div>
    </div>
  );
}

}
