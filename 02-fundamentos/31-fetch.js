let getApi = () => {
  const endPoint = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en"
  const params = {
    method: "GET",
    header: {
      "Content-Type": "application/json"
    }
  }

  fetch(endPoint, params).then(response => {
    return response.json()
  }).then(result => {
    debugger
    console.log("getApi -> result", result)
  })
}

getApi()