import _ from 'lodash';
import React, { Component } from 'react';
import EmplooyeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => this.props.employeeUpdate({ prop, value }))
    }
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    onTextPress = () => {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }
    render() {
        return <Card>
            <EmplooyeeForm />
            <CardSection>
                <Button onPress={this.onButtonPress}>
                    Save Changes
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress={this.onTextPress}>
                    Text Schedule
                </Button>
            </CardSection>
        </Card>
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
