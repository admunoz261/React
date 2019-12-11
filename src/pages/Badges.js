import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import conflogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoader'
import PageError from '../components/PageError'
import api from '../api'


class Badges extends React.Component 
{
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount(){
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null})
        try
        {
            const data = await api.badges.list()
            this.setState({ loading: false, data: data })
        }
        catch(error)
        {
            this.setState({ loading: false, error: error})
        }
    }
    
    

    render(){
        if (this.state.loading === true && !this.state.data){
            return <PageLoading />;
        }

        if (this.state.error){
            return <PageError error={this.state.error}/>;
        }

        // console.log('2/4. render()');
        return (
            <React.Fragment>
                <div>
                    <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img 
                                    className="Badges_conf-logo" 
                                    src={conflogo} 
                                    alt="Conf logo"/> 
                            </div>
                        </div>
                    </div>

                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link 
                                to="/Badges/new" 
                                className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>

                        <div className="Badges__list">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data}/>
                                
                                {this.state.loading && <MiniLoader />}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;