import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Notes from './Components/Notes'
import Profile from './Components/Profile'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/notes" component={Notes} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
