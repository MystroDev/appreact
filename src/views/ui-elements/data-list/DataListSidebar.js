import React, { Component } from "react"
import { Label, Input, FormGroup, Button } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"
import axios from "axios"
import moment from 'moment'

class DataListSidebar extends Component {
  state = {
    id: "",
    nom: "",
    prenom: "",
    matricule: 0,
    dateembauche: new Date(),
    categoryTab: [],
    niveauTab: [],
    category: 0,
    niveau: 0,
    photo: "",
    password: "",
    titulaire: false,
    responsable: false,
    statut: false,
    active: false,
  }

  addNew = false

  componentDidMount() {
    //categories
    axios.get('http://127.0.0.1:8000/categorie').then(resp => {
      this.setState({ categoryTab: resp.data })
    });

    //niveau
    axios.get('http://127.0.0.1:8000/niveau').then(resp => {
      this.setState({ niveauTab: resp.data })
    });

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.nom !== prevState.nom) {
        this.setState({ nom: this.props.data.nom })
      }
      if (this.props.data.prenom !== prevState.prenom) {
        this.setState({ prenom: this.props.data.prenom })
      }
      if (this.props.data.matricule !== prevState.matricule) {
        this.setState({ matricule: this.props.data.matricule })
      }

      if (this.props.data.dateembauche !== prevState.dateembauche) {
        this.setState({ dateembauche: this.props.data.dateembauche })
      }

      if (this.props.data.responsable !== prevState.responsable) {
        this.setState({ responsable: this.props.data.responsable })
      }

      if (this.props.data.titulaire !== prevState.titulaire) {
        this.setState({ titulaire: this.props.data.titulaire })
      }

      if (this.props.data.statut !== prevState.statut) {
        this.setState({ statut: this.props.data.statut })
      }


      if (this.props.data.active !== prevState.active) {
        this.setState({ active: this.props.data.active })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        nom: "",
        prenom: "",
        matricule: 0,
        dateembauche: new Date(),
        category: 0,
        niveau: 0,
        photo: "",
        titulaire: false,
        responsable: false,
        statut: false,
        active: false,
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        nom: "",
        prenom: "",
        matricule: 0,
        dateembauche: new Date(),
        category: 0,
        niveau: 0,
        photo: "",
        titulaire: false,
        responsable: false,
        statut: false,
        active: false,
      })
    }
    this.addNew = false

  }

  handleSubmit = obj => {
    delete obj.niveauTab
    delete obj.categoryTab

    if (this.props.data !== null) {
      this.props.updateData(obj)
    } else {
      this.addNew = true


      this.props.addData(obj)
      console.log(obj)
    }
    //let params = Object.keys(this.props.dataParams).length
    //? this.props.dataParams
    //: { page: 1, perPage: 4 }
    //this.props.handleSidebar(false, true)
    //this.props.getData(params)
  }

  render() {
    let { show, handleSidebar, data } = this.props
    let { nom, prenom, matricule, dateembauche, categoryTab, niveauTab, category, niveau, titulaire, responsable, statut, active } = this.state

    //filling category with data
    let options_of_category = null;
    if(categoryTab != null){
        options_of_category = categoryTab.map((value, index) => {
        return <option key={value.id}>{value.designation}</option>
      })

    }

    //filling niveau with data
      let options_of_niveau = null;
      if(niveauTab!=null){
        options_of_niveau = niveauTab.map((value, index) => {
        return <option key={value.id}>{value.designation}</option>
      })
      }


    let fulldate = moment().format("DD/MM/YYYY");
    //console.log(this.state.dateembauche)
    //fulldate = this.state.dateembauche
    //let fulldate2 = fulldate.moment.format("DD/MM/YYYY")
    //console.log(fulldate2)


    //filling checkboxes
    let firstCheckbox = "";
    let secondCheckbox = "";
    let thirdCheckbox = "";
    let fourthCheckbox = "";

    if (responsable)
      firstCheckbox = <Input type="checkbox" checked onChange={e => this.setState({ responsable: e.target.checked })} />
    else
      firstCheckbox = <Input type="checkbox" onChange={e => this.setState({ responsable: e.target.checked })} />


    if (statut)
      secondCheckbox = <Input type="checkbox" checked onChange={e => this.setState({ statut: e.target.checked })} />
    else
      secondCheckbox = <Input type="checkbox" onChange={e => this.setState({ statut: e.target.checked })} />

    if (active)
      thirdCheckbox = <Input type="checkbox" checked onChange={e => this.setState({ active: e.target.checked })} />
    else
      thirdCheckbox = <Input type="checkbox" onChange={e => this.setState({ active: e.target.checked })} />

    if (titulaire)
      fourthCheckbox = <Input type="checkbox" checked onChange={e => this.setState({ titulaire: e.target.checked })} />
    else
      fourthCheckbox = <Input type="checkbox" onChange={e => this.setState({ titulaire: e.target.checked })} />

    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{data !== null ? "UPDATE DATA" : "ADD NEW DATA"}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
          <FormGroup>
            <Label for="data-name">Nom</Label>
            <Input
              type="text"
              value={nom}
              placeholder="nom"
              onChange={e => this.setState({ nom: e.target.value })}
              id="data-name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="data-name">Prenom</Label>
            <Input
              type="text"
              value={prenom}
              placeholder="prenom"
              onChange={e => this.setState({ prenom: e.target.value })}
              id="data-name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="data-name">Matricule</Label>
            <Input
              type="text"
              value={matricule}
              placeholder="matricule"
              onChange={e => this.setState({ matricule: e.target.value })}
              id="data-name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="data-name">Date Embauche</Label>
            <Input
              type="date"
              value={dateembauche}
              onChange={e => this.setState({ dateembauche: e.target.value })}
              id="data-name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="data-category">Category</Label>
            <Input
              type="select"
              id="data-category"
              value={""}
              onChange={e => this.setState({ category: e.target.value })}
            >
              {options_of_category}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="data-status">Niveau</Label>
            <Input
              type="select"
              id="data-status"
              value={""}
              onChange={e => this.setState({ niveau: e.target.value })}
            >
              {options_of_niveau}

            </Input>
          </FormGroup>

          <FormGroup check inline>
            <Label check>
              {firstCheckbox} Responsable
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              {secondCheckbox} Statut
           </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              {thirdCheckbox} Active
            </Label>
          </FormGroup>

          <FormGroup check inline>
            <Label check>
              {fourthCheckbox} Titulaire
            </Label>
          </FormGroup>

        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button color="primary" onClick={() => this.handleSubmit(this.state)}>
            {data !== null ? "Update" : "Submit"}
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false, true)}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}
export default DataListSidebar
