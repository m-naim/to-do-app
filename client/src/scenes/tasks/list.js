import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  deleteList, addTask, taskDone } from '../../actions/listActions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      lists:[{
        name:'',
        tasks:[]
      }],
    }
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  
  handleDelClick(){
    this.props.deleteList(this.props.id)
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleClick() {
    let obj={
      list_id: this.props.id,
      index: this.props.idx,
      todo: this.state.input
    }
      this.props.addTask(obj);
     
  }
  handleDone(e) {
    let taskObj={
      list_id: this.props.id,
      task_id: e.target.value
    }
    console.log(taskObj)
    this.props.taskDone(taskObj);
  }
  render() {
    const listItems = this.props.lists.lists[this.props.idx].tasks.map((i) =>
      <li key={i._id} className="list-group-item ">
        {i.todo}
        <div className="float-right">
          <button className="btn-ico grn far fa-check-circle" value={i._id} onClick={this.handleDone}/>
          <button className="btn-ico fas fa-ellipsis-v" value={i._id} />
        </div>
        
      </li>
    );
    return (
      <div className="card" style={{width: "18em"}}>
        <div className="header-card">
           {this.props.name}
          <button className="btn-ico snow fas fa-ellipsis-v float-right" onClick={this.handleDelClick} />
        </div>
        <div className="list-group">
          {listItems}
          <div className="input-group text-center">
            <button className="btn-ico snow fas fa-plus" onClick={this.handleClick} >Add</button>
            <input className='inp snow' placeholder="add new Task" type="text" value={this.state.input} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps,
  {  deleteList , addTask, taskDone}
)(List);
