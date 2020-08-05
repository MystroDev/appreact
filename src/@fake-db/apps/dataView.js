import mock from "../mock"
export let dataList = []
  /*{
    id: 1,
    order_status: "on hold",
    name: "Apple Watch series 4 GPS",
    category: "Computers",
    price: "69.99",
    popularity: { popValue: "97", color: "success" },
    img: require("../../assets/img/elements/apple-watch.png")
  }
]*/


const determinePopularity = val => {
  if (val >= 75) return { popValue: val, color: "success" }
  else if (val < 75 && val >= 55) return { popValue: val, color: "primary" }
  else if (val < 55 && val >= 35) return { popValue: val, color: "warning" }
  else if (val < 35 && val >= 0) return { popValue: val, color: "danger" }
  else return { popValue: 0, color: "danger" }
}


/*// GET DATA
mock.onGet("http://127.0.0.1:8000/users").reply(response => {
  return [200, dataList]
})
mock.onGet("http://127.0.0.1:8000/users").reply(response => {
  let { page, perPage } = response
  let totalPages = Math.ceil(dataList.length / perPage)
  if (page !== undefined && perPage !== undefined) {
    let calculatedPage = (page - 1) * perPage
    let calculatedPerPage = page * perPage
    return [
      200,
      { data: dataList.slice(calculatedPage, calculatedPerPage), totalPages }
    ]
  } else {
    return [
      200,
      { data: dataList.slice(0, 4), totalPages: Math.ceil(dataList.length / 4) }
    ]
  }
})

// UPDATE DATA
mock.onPost("/api/datalist/update-data").reply(request => {
  let data = JSON.parse(request.data).obj
  dataList.map(item => {
    if (item.id === data.id) {
      let popularity = determinePopularity(data.popularity.popValue)
      return Object.assign(item, { ...data, popularity })
    } else {
      return item
    }
  })
  return [200]
})

// Add DATA
mock.onPost("/api/datalist/add-data").reply(request => {
  let data = JSON.parse(request.data).obj
  let highestId = Math.max.apply(
    Math,
    dataList.map(i => i.id)
  )
  dataList.unshift({
    ...data,
    id: highestId + 1,
    popularity: determinePopularity(data.popularity.popValue)
  })
  return [200]
})

// DELETE DATA
mock.onPost("/api/datalist/delete-data").reply(request => {
  let data = JSON.parse(request.data).obj
  let index = dataList.findIndex(item => item.id === data.id)
  dataList.splice(index, 1)
  return [200]
})

// DELETE SELECTED DATA
mock.onPost("/api/datalist/delete-selected").reply(request => {
  let data = JSON.parse(request.data).arr
  let reducedArray
  ;[dataList, data].reduce((a, b) => {
    let c = b.map(j => j.id)
    return (reducedArray = a.filter(i => !c.includes(i.id)))
  })
  dataList = reducedArray
  return [200]
})*/

