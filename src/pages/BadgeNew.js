import React from 'react';
// jAJAJAJJAJAJA no sabras donde esta el autor 
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
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
            <React.Fragment>
            <div>
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
                                avatarUrl="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png"
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
            </React.Fragment>
        );
    }
}

export default BadgeNew;