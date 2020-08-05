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
    matricule: "",
    dateembauche: new Date(),
    category: [],
    niveau: [],
    order_status: "pending",
    price: "",
    img: "",
    popularity: {
      popValue: ""
    }
  }

  addNew = false

  componentDidMount() {
    //categories
    axios.get('http://127.0.0.1:8000/categorie').then(resp => {
      this.setState({ category: resp.data })
    });

    //niveau
    axios.get('http://127.0.0.1:8000/niveau').then(resp => {
      this.setState({ niveau: resp.data })
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
      if (this.props.data.order_status !== prevState.order_status) {
        this.setState({ order_status: this.props.data.order_status })
      }
      if (this.props.data.price !== prevState.price) {
        this.setState({ price: this.props.data.price })
      }
      if (this.props.data.img !== prevState.img) {
        this.setState({ img: this.props.data.img })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        nom: "",
        prenom: "",
        dateembauche: "01/02/2020",
        matricule: 0,
        order_status: "pending",
        price: "",
        img: "",
        popularity: {
          popValue: ""
        }
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        nom: "",
        prenom: "",
        dateembauche: "",
        matricule: 0,
        order_status: "pending",
        price: "",
        img: "",
        popularity: {
          popValue: ""
        }
      })
    }
    this.addNew = false

  }

  handleSubmit = obj => {
    if (this.props.data !== null) {
      this.props.updateData(obj)
    } else {
      this.addNew = true
      this.props.addData(obj)
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 }
    this.props.handleSidebar(false, true)
    this.props.getData(params)
  }

  render() {
    let { show, handleSidebar, data } = this.props
    let { nom, prenom, matricule, dateembauche, category, niveau, order_status, price, popularity, img } = this.state

    //filling category with data
    const options_of_category = category.map((value, index) => {
      return <option key={index}>{value.designation}</option>
    })

    //filling niveau with data
    const options_of_niveau = category.map((value, index) => {
      return <option key={index}>{value.designation}</option>
    })


    let fulldate = moment().format("DD/MM/YYYY");
    //console.log(this.state.date_embauche)
    //fulldate = this.state.date_embauche
    //let fulldate2 = fulldate.moment.format("DD/MM/YYYY")
    //console.log(fulldate2)
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
          {this.props.thumbView && img.length ? (
            <FormGroup className="text-center">
              <img className="img-fluid" src={img} alt={nom} />
              <div className="d-flex flex-wrap justify-content-between mt-2">
                <label
                  className="btn btn-flat-primary"
                  htmlFor="update-image"
                  color="primary">
                  Upload Image
                  <input
                    type="file"
                    id="update-image"
                    hidden
                    onChange={e =>
                      this.setState({
                        img: URL.createObjectURL(e.target.files[0])
                      })
                    }
                  />
                </label>
                <Button
                  color="flat-danger"
                  onClick={() => this.setState({ img: "" })}>
                  Remove Image
                </Button>
              </div>
            </FormGroup>
          ) : null}
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
              value={category.designation}
            //onChange={e => this.setState({ category: e.target.value })}
            >
              {options_of_category}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="data-status">Niveau</Label>
            <Input
              type="select"
              id="data-status"
              value={niveau.designation}
            //onChange={e => this.setState({ order_status: e.target.value })}
            >
              {options_of_niveau}

            </Input>
          </FormGroup>

          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" checked/> Responsable
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" checked /> Statut
           </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> Active
            </Label>
          </FormGroup>

          {this.props.thumbView && img.length <= 0 ? (
            <label
              className="btn btn-primary"
              htmlFor="upload-image"
              color="primary">
              Upload Image
              <input
                type="file"
                id="upload-image"
                hidden
                onChange={e =>
                  this.setState({ img: URL.createObjectURL(e.target.files[0]) })
                }
              />
            </label>
          ) : null}
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
