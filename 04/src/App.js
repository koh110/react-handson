import React from 'react'

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

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onClickAddButtonHandler = this.onClickAddButtonHandler.bind(this)

    const todoList = [
      { title: 'ほげ' },
      { title: 'ふが' },
      { title: 'ぴよ' }
    ];

    this.state = { todoList, text: '' }
  }

  onChangeHandler(e) {
    this.setState({ title: e.target.value })
  }

  onClickAddButtonHandler(e) {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.concat({ title: this.state.title }),
        title: ''
      }
    })
  }

  render() {
    const { todoList, title } = this.state

    return (
      <div>
        <ul style={{'WebkitPaddingStart': 0}}>
          {
            todoList.map((todo, i) => {
              return (
                <li key={i} style={{display: 'flex'}}>
                  <Todo todo={todo} />
                  <button style={{'margin': '0 0 0 5px'}}>削除</button>
                </li>
              )
            })
          }
        </ul>
        <input type="text" onChange={this.onChangeHandler} value={title}/>
        <button onClick={this.onClickAddButtonHandler}>追加</button>
      </div>
    )
  }
}
