import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class PractExp extends Component {
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
                        hintText="Enter The Company Name"
                        floatingLabelText="Company"
                        onChange={handleChange('company')}
                        defaultValue={values.company}
                    /><br></br>

                    <TextField
                        hintText="Where Was The Office Located?  "
                        floatingLabelText="Location"
                        onChange={handleChange('company_loc')}
                        defaultValue={values.company_loc}
                    /><br></br>

                    <TextField
                        hintText="What Was The Job Role? "
                        floatingLabelText="Role"
                        onChange={handleChange('role')}
                        defaultValue={values.role}
                    /><br></br>

                    <TextField
                        hintText="Years of Experience You Have?"
                        floatingLabelText="Years of Experience"
                        onChange={handleChange('experience')}
                        defaultValue={values.experience}
                    /><br></br>

                    <TextField
                        hintText="Write About Your Work There."
                        floatingLabelText="Bio"
                        onChange={handleChange('about')}
                        defaultValue={values.about}
                    /><br></br>

                    <RaisedButton
                        label="Back"
                        primary={false}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Create Resume"
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
