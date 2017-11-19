import React from 'react'
import { connect } from 'react-redux'
import { getTodo, addTodo, inputTxt, deleteTodo } from './reducer'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  goTodo(index) {
    const { history } = this.props
    history.push(`/todo/${index}`)
  }

  render() {
    const { todo, index } = this.props

    return (
      <div>
        { index }: { todo.title }
        <button onClick={(e) => this.goTodo(index)}>詳細</button>
      </div>
    )
  }
}

class Top extends React.Component {
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
    const { list, input, history } = this.props

    return (
      <div>
        <ul style={{'WebkitPaddingStart': 0}}>
          {
            list.map((todo, i) => {
              return (
                <li key={i} style={{display: 'flex'}}>
                  <Todo todo={todo} index={i} history={history} />
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
)(Top)
