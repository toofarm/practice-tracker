import { RootState } from '..'
import { User } from 'firebase/auth'

// TYPINGS

enum EActions {
  SET_AUTH = 'SET_AUTH',
  CLEAR_AUTH = 'CLEAR_AUTH'
}

type TAction = {
  type: EActions;
  payload: string | null
}

type TState = {
  user: string | null
}

const initialState: TState = {
  user: null
}

// ACTIONS

export const setAuthUser = (user: string) => ({
  type: EActions.SET_AUTH,
  payload: user
})

export const clearAuthUser = () => ({
  type: EActions.CLEAR_AUTH
})


// REDUCER 

const authReducer: unknown = (state:TState = initialState, { type, payload }: TAction ):RootState => {
  switch (type) {
  case EActions.SET_AUTH:
    return {
      ...state,
      user: payload
    }
    break
  case EActions.CLEAR_AUTH:
    return {
      ...state,
      user: null
    }
    break
  default:
    return state
  }
}

export default authReducer
