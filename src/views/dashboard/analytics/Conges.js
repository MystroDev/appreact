import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "../../ui-elements/data-list/DataListConfigCj"
import queryString from "query-string"

class ListView extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="List des utilisateurs"
          breadCrumbParent="Data List"
          breadCrumbActive="Users"
        />
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ListView
