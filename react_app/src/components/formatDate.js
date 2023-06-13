const formatDate = (dateString) => {
    const options = { minutes: "numeric", seconds: "numeric"}
    return new Date(dateString).toLocaleTimeString(undefined, options)
  }

export default formatDate;