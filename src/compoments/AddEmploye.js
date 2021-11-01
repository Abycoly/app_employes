import React from 'react';
import { Consumer } from '../context';
import { v1 as uuid } from 'uuid';


export default class AddEmployee extends React.Component {
    state = {
        nom: '',
        poste: '',
        anciennete: ''
    }

    //correspondance d infos venant du champs formulaire
    onChange = e => { this.setState({ [e.target.name]: e.target.value }) }

    //soumission du formulaire
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const newEmploye = {
            id: uuid(),
            nom: this.state.nom.toUpperCase(),
            poste: this.state.poste,
            anciennete: this.state.anciennete
        }

        dispatch({ type: 'ADD_EMPLOYE', payload: newEmploye })

        this.setState({
            nom: '',
            poste: '',
            anciennete: ''
        })

        //PR UNE REDIRECTION
        this.props.history.push('/')
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Ajouter un Employé</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                    <div className="form-groupe">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Entrer un nom..."
                                            name="nom"
                                            value={this.state.nom}
                                            onChange={this.onChange} />
                                    </div>

                                    <div className="form-groupe">
                                        <label htmlFor="poste">Poste</label>
                                        <input type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Entrer le poste..."
                                            name="poste"
                                            value={this.state.poste}
                                            onChange={this.onChange} />
                                    </div>

                                    <div className="form-groupe">
                                        <label htmlFor="anciennete">Ancienneté</label>
                                        <input type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Entrer l' anciennete..."
                                            name="anciennete"
                                            value={this.state.anciennete}
                                            onChange={this.onChange} />
                                    </div>
                                    <input type="submit" name="" value="Ajouter un Employe" className="btn btn-primary mt-3" />
                                </form>
                            </div>
                        </div>
                    )//fin return
                }}
            </Consumer>
        )
    }
}