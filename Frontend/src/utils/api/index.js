import axios from 'axios'

function getNotes() {
    return axios.get('http://localhost:5000/').then((result) => {
        console.log({ result })
        return result.data
    })
}

const baseUrl = 'http://localhost:5000/TNK/api'

function LoginUser(
    login,
    password,
    history,
    setIsLoading,
    setError,
    setErrorMessage
) {
    setError(false)
    setErrorMessage('')
    setIsLoading(true)

    let url = `${baseUrl}/login`
    let params = {
        email: login,
        password: password,
    }
    axios
        .post(url, params)
        .then((response) => {
            if (response.status === 200 && response.data) {
                if (response.data.error) {
                    const error = response.data.error
                    setError(true)
                    setErrorMessage(error)
                    setIsLoading(false)
                    console.error(error)
                } else {
                    setError(null)
                    setErrorMessage('')
                    setIsLoading(false)
                    const user = response.data.user
                    localStorage.setItem('user', JSON.stringify(user))
                    history.push('/notes')
                }
            }
        })
        .catch((error) => {
            setError(true)
            setIsLoading(false)
            console.error(error)
            history.push('/notes')
        })
}

function registerUser(
    name,
    login,
    password,
    history,
    setIsLoading,
    setError,
    setErrorMessage
) {
    setError(false)
    setErrorMessage('')
    setIsLoading(true)

    let url = `${baseUrl}/signup`

    const params = {
        name: name,
        email: login,
        password: password,
        FCM: [],
    }
    axios
        .post(url, params)
        .then((response) => {
            if (response.status === 200 && response.data) {
                if (response.data.error) {
                    const error = response.data.error
                    setError(true)
                    setErrorMessage(error)
                    setIsLoading(false)
                    console.error(error)
                } else {
                    setError(null)
                    setIsLoading(false)
                    const user = response.data.user
                    localStorage.setItem('user', JSON.stringify(user))
                    history.push('notes')
                }
            }
        })
        .catch((error) => {
            setError(true)
            setIsLoading(false)
            console.error(error)
            history.push('notes')
        })
}

function signOut(history) {
    // axios.post(`${baseUrl}/logout`, {
    //     userId: JSON.parse(localStorage.getItem('user')).id,
    // }).catch((error) => {
    //     setError(true)
    //     setIsLoading(false)
    //     console.error(error)
    //     history.push('/')
    // })
    localStorage.removeItem('user')
    history.push('/')
}

export { getNotes, LoginUser, signOut, registerUser }
