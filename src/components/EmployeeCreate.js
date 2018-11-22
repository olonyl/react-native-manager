import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

class EmployeeCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: "name", value })} />
                </CardSection>
                <CardSection>
                    <Input label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: "phone", value })} />
                </CardSection>
                <CardSection style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
                        <Picker.Item label="Monday" value="Monday"></Picker.Item>
                        <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
                        <Picker.Item label="Wendesnay" value="Wendesnay"></Picker.Item>
                        <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
                        <Picker.Item label="Friday" value="Friday"></Picker.Item>
                        <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
                        <Picker.Item label="Sunday" value="Sunday"></Picker.Item>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress}>Save</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)