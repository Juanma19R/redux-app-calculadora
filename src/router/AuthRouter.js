// Libraries
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={LoginScreen} />   
                <Route path='/register' component={RegisterScreen}/>          
            </Switch>        
        </Router>
    )
}

export default AuthRouter;