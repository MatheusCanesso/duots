import axios from 'axios'
export const requestData = (path) => {
    return axios.get(`http://localhost:5000${path}`)
        .then(({ data }) => {
            console.log(data)
            return (data)
        }).catch((err) => console.log(err))
}

export const postData = (path, data) => {
    return axios.post(`http://localhost:5000${path}`, data)
        .then(({ data }) => {
            console.log(data)
            return (data)
        }).catch((err) => console.log(err))
}

export const putData = (path, data) => {
    return axios.put(`http://localhost:5000${path}`, data)
        .then(({ data }) => {
            console.log(data)
            return (data)
        }).catch((err) => console.log(err))
}
