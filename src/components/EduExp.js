import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class EduExp extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Resume Builder" />

                    <TextField
                        hintText="Enter Institue Name"
                        floatingLabelText="Institution"
                        onChange={handleChange('school')}
                        defaultValue={values.school}
                    /><br></br>

                    <TextField
                        hintText="Enter The City Institute Situated In  "
                        floatingLabelText="Institution City"
                        onChange={handleChange('school_city')}
                        defaultValue={values.school_city}
                    /><br></br>

                    <TextField
                        hintText="Enter Year of Beginning"
                        floatingLabelText="From"
                        onChange={handleChange('from')}
                        defaultValue={values.from}
                    /><br></br>

                    <TextField
                        hintText="Enter Year of Passing"
                        floatingLabelText="To"
                        onChange={handleChange('to')}
                        defaultValue={values.to}
                    /><br></br>

                    <TextField
                        hintText="Enter Course You Enrolled In"
                        floatingLabelText="Course"
                        onChange={handleChange('course')}
                        defaultValue={values.course}
                    /><br></br>

                    <TextField
                        hintText="Enter The Latest Grades"
                        floatingLabelText="Grades"
                        onChange={handleChange('grade')}
                        defaultValue={values.grade}
                    /><br></br>

                    <RaisedButton
                        label="Back"
                        primary={false}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Continue to Experience"
                        primary={true}
                        style={styles.contButton}
                        onClick={this.continue}
                    />



                </React.Fragment>
            </MuiThemeProvider>
        );


    }
}

const styles = {
    contButton: {
        margin: 5

    }
}
