import React from 'react'
import { connect } from 'react-redux'
import { getTodo, addTodo, inputTxt, deleteTodo } from './reducer'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { todo } = this.props
    return (
      <div>
        title: { todo.title }
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onClickAddButtonHandler = this.onClickAddButtonHandler.bind(this)
  }

  componentWillMount() {
    this.props.getTodo()
  }

  onChangeHandler(e) {
    this.props.inputTxt(e.target.value)
  }

  onClickAddButtonHandler(e) {
    this.props.addTodo()
  }

  onClickDeleteButtonHandler(index) {
    this.props.deleteTodo(index)
  }

  render() {
    const { list, input } = this.props

    return (
      <div>
        <ul style={{'WebkitPaddingStart': 0}}>
          {
            list.map((todo, i) => {
              return (
                <li key={i} style={{display: 'flex'}}>
                  <Todo todo={todo} />
                  <button style={{'margin': '0 0 0 5px'}} onClick={(e) => this.onClickDeleteButtonHandler(i)}>削除</button>
                </li>
              )
            })
          }
        </ul>
        <input type="text" onChange={this.onChangeHandler} value={input}/>
        <button onClick={this.onClickAddButtonHandler}>追加</button>
      </div>
    )
  }
}
export default connect(
  state => ({
    list: state.todo.list,
    input: state.todo.input
  }),
  { getTodo, addTodo, inputTxt, deleteTodo }
)(App)
