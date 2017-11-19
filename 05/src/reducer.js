const TODO_ACTOONS = {
  INPUT: 'todo/input',
  ADD: 'todo/add',
  DELETE: 'todo/delete'
}

const TODO_INIT_STATE = {
  list: [
    { title: 'ほげ' },
    { title: 'ふが' },
    { title: 'ぴよ' }
  ],
  input: ''
}

export function inputTxt(input) {
  return { type: TODO_ACTOONS.INPUT, input }
}

export function addTodo() {
  return { type: TODO_ACTOONS.ADD }
}

function todoReducer(state=TODO_INIT_STATE, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { ...state, list: action.list }
    }
    case TODO_ACTOONS.INPUT: {
      return { ...state, input: action.input }
    }
    case TODO_ACTOONS.ADD: {
      const add = { title: state.input }
      return { ...state, list: state.list.concat(add), input: '' }
    }
  }

  return state
}

export default {
  todo: todoReducer
}
