import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo';
import EduExp from './EduExp';
import PractExp from './PractExp';
import Overview from './Overview';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


export default class Builder extends Component {

    state = {
        step: 1,
        fullName: null,
        email: null,
        contact: null,
        address: null,
        school: null,
        school_city: null,
        from: null,
        to: null,
        course: null,
        grade: null,
        company: null,
        company_loc: null,
        role: null,
        experience: null,
        about: null,
        email_error_text: null,
        errors: {
            fullName: '',
            email: '',
            contact: '',
            address: '',
            school: '',
            school_city: '',
            from: '',
            to: '',
            course: '',
            grade: '',
            company: '',
            company_loc: '',
            role: '',
            experience: '',
            about: '',
            email_error_text: "Invalid"
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        const { value } = e.target;
        let errors = this.state.errors;

        switch (input) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }

        this.setState({ errors, [input]: value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }


    render() {
        const { errors } = this.state;
        const { step } = this.state;
        const { fullName, email, contact, address, school, school_city, from, to, course, grade, company, company_loc, role, experience, about } = this.state;
        const values = { fullName, email, contact, address, school, school_city, from, to, course, grade, company, company_loc, role, experience, about, errors };

        switch (step) {
            case 1:
                return (
                    <GeneralInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                )
            case 2:
                return (
                    <EduExp
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 3:
                return (
                    <PractExp
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Overview
                        prevStep={this.prevStep}
                        values={values}
                    />
                )

            default:
                break;
        }
    }
}
