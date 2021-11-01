//COMPOSANT SOUS ENFANT DE ListeEmp
import React, { Component } from 'react';
import { Consumer } from '../context';


// class Employe extends React.Component {

class Employe extends Component {

    componentDidUpdate(){
        console.log('composant est maj')
    }
    state = {
        affiche: false,
    }

    deleteEmploye = (id, dispatch) => {
        //dispatch vient de consumer (qui vient lui mm de context)
        //dispatch fais apel a action puis reducer
        dispatch({type : 'DELETE_EMPLOYE', payload : id} )
        //type vient de action.type
    }

    displayEmploye = () => {
        this.setState({
            affiche: !this.state.affiche
        })
    }
    render() {
        return (
            <Consumer>
                {value => {
                    return (

                        <div className="card card-body mb-3 text-center">

                            <h4>{this.props.nom}&nbsp;
                            <i style={{ cursor: 'pointer' }} className="fas fa-sort-down"
                                    onClick={this.displayEmploye}
                                ></i>
                            <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={()=> this.deleteEmploye(this.props.id, value.dispatch)}
                                ></i>
                            </h4>
                            {/* IF this.state = true on applique la condition, sinon this.state = null  
                             this.state.affiche ? (condition) : null
                            */}
                            {this.state.affiche ? (
                                <div className="card card-body     mb-3">
                                    <h6>Poste : {this.props.poste} </h6>
                                    <h6>Ancienneté : {this.props.anciennete} </h6>
                                </div>) : null}

                        </div>

                    )
                }}

            </Consumer>
        )

    }

}

export default Employe;
