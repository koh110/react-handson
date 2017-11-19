import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 渡される変数たち
    console.log(this.props)

    return (
      <div>
        <div>title: [ここにタイトルを表示]</div>
        <div>desc: [ここ内容を表示]</div>
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Todo title="ほげ" desc="ふが"></Todo>
      </div>
    )
  }
}
