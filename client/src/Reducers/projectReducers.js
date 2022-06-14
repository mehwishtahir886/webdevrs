import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,

} from '../Constants/projectConstants'

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true, projects: [] }
    case PROJECT_LIST_SUCCESS:
      return {
        loading: false,
        projects: action.payload.projects,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

