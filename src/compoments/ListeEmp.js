
//COMPOSANT ENFANT
import React from 'react';
import Employe from './Employe';
import { Consumer } from '../context';

class ListeEmp extends React.Component {

    componentDidMount() {
        // console.log('composant est assemblé')

    }

    // UNSAFE_componentWillMount(){
    //     console.log('composant va etre assemblé')
    // }

    render() {
        return (
            <Consumer>
                {value => {
                    //value = this.state ds context
                    if (value.employes.length === 0) {
                        return (
                            <div>
                                <h2 className="text-black-50 text-center m-5">No employes!!! <br /> Please Add employes on "Add link"</h2>
                            </div>
                        )
                    }
                    // console.log(value);
                    return (
                        <div>
                            {value.employes.sort((a, b) => a.nom > b.nom ? 1 : -1).map(employe => (
                                <Employe
                                    key={employe.id}
                                    id={employe.id}
                                    nom= {employe.nom}
                                    poste={employe.poste}
                                    anciennete={employe.anciennete}
                                />
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default ListeEmp;