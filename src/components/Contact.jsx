import React from 'react';
import '../bootstrap/bootstrap.min.css';
import { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from "./AgeStats";
import "./AgeStats.css";

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const regExpName = RegExp(
    /^[a-zA-Z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};
export default class Contact extends Component {


    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            lastName: '',
            isError: {
                name: '',
                lastName: '',
                email: '',
                dob: '',
            },
            newDate: "",
            birthday: "1996-09-06",
            showStats: false
        }

    }
    changeBirthday = () => {
        this.setState({ birthday: this.state.newDate, showStats: true });
        console.log("Age Checking");
    };

    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            alert("Thank You for your information soon one of our executive will contact you")
        } else {
            console.log("Form is invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name = regExpName.test(value)
                    ? ""
                    : "Only Alphabets are Allowed";
                break;
            case "lastName":
                isError.lastName = regExpName.test(value)
                    ? ""
                    : "Only Alphabets are Allowed";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "dob":
                isError.dob =
                    value.length < 8 ? "Atleast  8 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;

        return (
            <div className="contact">
                <form onSubmit={this.onSubmit} Validate className="contactForm">
                    <span className="contactTitle">Contact Us</span>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text" required
                            className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="name"
                            onChange={this.formValChange}
                        />
                        {isError.name.length > 0 && (
                            <span className="invalid-feedback">{isError.name}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input
                            type="text" required
                            className={isError.lastName.length > 0 ? "is-invalid form-control" : "form-control "}
                            name="lastName"
                            onChange={this.formValChange}
                        />
                        {isError.lastName.length > 0 && (
                            <span className="invalid-feedback">{isError.lastName}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email" required
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="email"
                            onChange={this.formValChange}
                        />
                        {isError.email.length > 0 && (
                            <span className="invalid-feedback">{isError.email}</span>
                        )}
                    </div>


                    <div className="form-group" >
                        <label>Date of Birth</label>
                        <input
                            type="date" required
                            className={isError.dob.length > 0 ? "is-invalid form-control" : "form-control "}
                            name="DOB"
                            onChange={(event => this.setState({ newDate: event.target.value }))}
                        />
                        <Button onClick={() => this.changeBirthday()}>Check Age</Button>
                    </div>

                    <button type="submit" className="btn btn-block btn-danger contactButton">Submit</button>
                </form>
                {this.state.showStats ? (
                    <div className="fade age-stats">
                        <AgeStats date={this.state.birthday} />
                    </div>
                ) : (
                    <div />
                )}
            </div>
        );
    }
}