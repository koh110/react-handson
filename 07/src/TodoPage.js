import React from 'react'
import { connect } from 'react-redux'

class TodoPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    const { list, match: { params: { index } } } = this.props
    const todo = list[index]

    return (
      <div>
        <p>todo detail</p>
        <p>title: { todo.title }</p>
      </div>
    )
  }
}
export default connect(
  state => ({
    list: state.todo.list
  }),
  {  }
)(TodoPage)
