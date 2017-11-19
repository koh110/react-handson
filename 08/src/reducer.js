const clientMock = {
  // 1s後にtodoを取得するmock
  get: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: 'ほげ' },
          { title: 'ふが' },
          { title: 'ぴよ' }
        ])
      }, 1000)
    })
  }
}

const TODO_ACTOONS = {
  LOAD: 'todo/load',
  INPUT: 'todo/input',
  ADD: 'todo/add',
  DELETE: 'todo/delete'
}

const TODO_INIT_STATE = {
  list: [],
  input: ''
}

export function getTodo() {
  return (dispatch, getState, client) => {
    // ここは本当は引数のclientを使う
    return clientMock.get().then(todo => {
      dispatch({ type: TODO_ACTOONS.LOAD, list: todo })
      return todo
    })
  }
}

export function inputTxt(input) {
  return { type: TODO_ACTOONS.INPUT, input }
}

export function addTodo() {
  return { type: TODO_ACTOONS.ADD }
}

export function deleteTodo(index) {
  return { type: TODO_ACTOONS.DELETE, index }
}

function todoReducer(state=TODO_INIT_STATE, action = {}) {
  switch (action.type) {
    case TODO_ACTOONS.LOAD: {
      return { ...state, list: action.list }
    }
    case TODO_ACTOONS.INPUT: {
      return { ...state, input: action.input }
    }
    case TODO_ACTOONS.ADD: {
      const add = { title: state.input }
      return { ...state, list: state.list.concat(add), input: '' }
    }
    case TODO_ACTOONS.DELETE: {
      state.list.splice(action.index, 1)
      return { ...state, list: [...state.list], input: '' }
    }
  }

  return state
}

export default {
  todo: todoReducer
}
