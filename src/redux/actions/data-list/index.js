import axios from "axios"
import { string } from "prop-types"

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
        "active":obj.active?"1":"0",
        "dateembauche": obj.dateembauche,
        "idcategorie": obj.idcategorie,
        "idniveau": obj.idniveau,
        "matricule": obj.matricule,
        "nom": obj.nom,
        "password": obj.password,
        "prenom": obj.prenom,
        "responsable": obj.responsable?"1":"0",
        "statut":obj.statut?"1":"0",
        "titulaire": obj.titulaire?"1":"0"
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
        "active":obj.active?"1":"0",
        "dateembauche": obj.dateembauche,
        "idcategorie": obj.idcategorie,
        "idniveau": obj.idniveau,
        "matricule": obj.matricule,
        "nom": obj.nom,
        "password": obj.password,
        "prenom": obj.prenom,
        "responsable": obj.responsable?"1":"0",
        "statut":obj.statut?"1":"0",
        "titulaire": obj.titulaire?"1":"0"
      })
      .then(response => {
        dispatch({ type: "ADD_DATA", obj })
        dispatch(getData(params))
      })
  }
}
