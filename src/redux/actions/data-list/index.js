import axios from "axios"

export const getData = params => {
  return async dispatch => {
    await axios.get("http://127.0.0.1:8000/users?page=1", params).then(response => {
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
    await axios.get("http://127.0.0.1:8000/users").then(response => {
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
      .post("/api/datalist/delete-data", {
      .post("http://127.0.0.1:8000/user/delete/" + obj, {
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
      .post("/api/datalist/update-data", {
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
      .post("/api/datalist/add-data", {
      .post("http://127.0.0.1:8000/user/create", {
        obj
      })
      .then(response => {
        dispatch({ type: "ADD_DATA", obj })
        dispatch(getData(params))
      })
  }
}
