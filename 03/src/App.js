import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <div>title: {title}</div>
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    const todoList = [
      { title: 'ほげ' },
      { title: 'ふが' },
      { title: 'ぴよ' }
    ];

    return (
      <div>
        <ul>
          <li>
            <Todo title={todoList[0].title}></Todo>
          </li>
          <li>
            <Todo title={todoList[1].title}></Todo>
          </li>
        </ul>
      </div>
    )
  }
}
