import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class Overview extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values: { fullName, email, contact, address, school, school_city, from, to, course, grade, company, company_loc, role, experience, about } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment >
                    <AppBar title="Resume Builder" />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <div style={styles}>
                            <List style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                                <ListItem
                                    primaryText={fullName}
                                    style={{ fontWeight: 500, fontSize: 25 }}
                                />

                                <List style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                    <ListItem
                                        secondaryText={email}
                                        style={{ lineHeight: 1 }}

                                    />

                                    <ListItem
                                        primaryText=""
                                        secondaryText={contact}
                                        style={{ lineHeight: 1 }}
                                    />

                                    <ListItem
                                        primaryText=""
                                        secondaryText={address}
                                    />
                                </List>
                            </List>

                            <List style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>


                                <ListItem style={{ fontWeight: 600, fontSize: 20 }}>
                                    EDUCATION
                            </ListItem>


                                <List style={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItem style={{ fontWeight: "500" }}>{school}, {school_city} </ListItem>
                                    <ListItem>{from} - {to}</ListItem>
                                </List>

                                <List style={{ background: "#eeeeee", textAlign: "start" }}>
                                    <ListItem>{course}</ListItem>
                                    <ListItem>CGPA: {grade}</ListItem>
                                </List>
                            </List>

                            <List style={{ display: "flex", flexDirection: "column" }}>



                                <ListItem style={{ fontWeight: 600, fontSize: 20 }}>EXPERIENCE</ListItem>


                                <ListItem style={{ fontWeight: "500" }}>{company}, {company_loc}</ListItem>

                                <List style={{ background: "#eeeeee", textAlign: "start" }}>
                                    <ListItem>{role}</ListItem>
                                    <ListItem>{experience}</ListItem>
                                    <ListItem>{about}</ListItem>
                                </List>

                            </List>

                        </div>
                    </div>

                    <RaisedButton
                        label="Back"
                        primary={false}
                        onClick={this.back}
                    />





                </React.Fragment >

            </MuiThemeProvider >
        );


    }
}


const styles = {
    width: 600
}


