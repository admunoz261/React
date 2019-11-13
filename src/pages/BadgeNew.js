import React from 'react';
// jAJAJAJJAJAJA no sabras donde esta el autor 
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import NavBar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'


class BadgeNew extends React.Component {

    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        } 
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render(){
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://lh3.googleusercontent.com/c2s1ZoH-ye7oKS6loEaNnaGw0I0VYAXJOnWChHL_DCG5oteS-HnwmJ0QPwWC4F-vxLmH5YbhOrSzmfbRVqMsZAoTEFYqhOLfggBxDmINi62l6Cpuh26S2Zjn21E2X-4eMLVOKCc7r77hsM4t4vkARaDCyA1gZrDypQOp1biwcBjrSqY6N9rcus7HfCBfrQYhtmBP8Wqr6pAXaC4fZ2f3q1GniLzKsrbJZohQIeTFs-g2xE-fKsk1QZ7Ko2IMcHCn1H-XTGnJcXHKmVSBluLyI6NBvdMhOvLl1slWKvIFRovmdGudiMA36gnNm0QiC3CwEDe37aYv9KPHZXQ_82PXIenfKe21WUBmXmqwUiOesZf5Xr6KOIOvjPxN7tHtcHmSCldkcaifdu1WYUHOPwzlvhqGDkjihT-_PtPBNjWImk2dN4s2F3hRCZd43PEvdv3xPL54qNbpXTUVCfKbjvX7X3xWtPPyPxT5zwE50JzUMYLBxMZH3L0jwRGF_RiVxYCZE9XNxLG0waNYIQ2B6lkuHePqsHQDlktJL6d4RLYZvTrgl-6_E0N6NnY3Q4lL6zQ-4pk_wvkGpngcKxnqakoH-z1q_xByRkDc4oejXwyn-wjXi-OBX_qVUSm5E0NFJ4iVCP3b4JDD9T50WqX4OFh2utHQzbfrlSFKrHFxO2LF5bKTePwjQ3a_N1o=s757-no"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;