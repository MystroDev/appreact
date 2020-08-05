import axios from "axios"

export const getData = params => {
  return async dispatch => {
    await axios.get("/users", params).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data.data,
        totalPages: response.data.totalPages,
        params
      })
    })
  }
}

export const getInitialData = () => {
  return async dispatch => {
    await axios.get("/users").then(response => {
      dispatch({ type: "GET_ALL_DATA", data: response.data })
    })
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "FILTER_DATA", value })
}

export const deleteData = obj => {
  return dispatch => {
    axios
      .post("/user/delete/" + obj, {
        obj
      })
      .then(response => {
        dispatch({ type: "DELETE_DATA", obj })
      })
  }
}

export const updateData = obj => {
  return (dispatch, getState) => {
    axios
      .post("/user/editer/"+obj.id, {
        obj
      })
      .then(response => {
        dispatch({ type: "UPDATE_DATA", obj })
      })
  }
}

export const addData = obj => {
  return (dispatch, getState) => {
    let params = getState().dataList.params
    axios
      .post("/user/create", {
        obj
      })
      .then(response => {
        dispatch({ type: "ADD_DATA", obj })
        dispatch(getData(params))
      })
  }
}
