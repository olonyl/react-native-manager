import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth" >
                    <Scene key="login" component={LoginForm} title="Please login" />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate() }}
                        component={EmployeeList}
                        title="Employees" />
                    <Scene key="employeeCreate"
                        component={EmployeeCreate}
                        title="Craete Employee" />
                </Scene>

            </Scene>
        </Router>
    )
}

export default RouterComponent;