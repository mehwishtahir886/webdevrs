import axios from 'axios'
import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
} from '../Constants/projectConstants'
import { logout } from './userActions'

export const listProjects = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/projects?keyword=${keyword}&pageNumber=${pageNumber}`
    )
    // const {data}=await axios.get('/api/projects')

    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// catch (error) {
//   const message =
//     error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message
//   if (message === 'Not authorized, token failed') {
//     dispatch(logout())
//   }
//   dispatch({
//     type: "",
//     payload: message,
//   })
// }
