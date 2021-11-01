import React, { Component} from 'react';

//mise en place de mon contexte
const Context = React.createContext();

//on mert en place un REDUCEUR
const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_EMPLOYE' :
            return{
                employes: state.employes.filter(employe=>
                    employe.id !== action.payload)
            };
        case 'ADD_EMPLOYE' :
            return{
                //il recupere ttes les données du form et les rajoute à state.employe
                employes : [action.payload, ...state.employes]
            }
            default :
                return state;
    }
} 


//provider est l'armoire qui aura comme value this.state(mabase) et contiendra tous les composants enfants
//cette classe me permet de fourni ttes les onfo dt j'aurai besoin
export class Provider extends Component{

    //mon state
    state = {
        employes : [
            {
                id : 1,
                nom : 'Jean Michel',
                poste : 'developpeur',
                anciennete : '4ans' 
            },
            {
                id : 2,
                nom : 'Dupond Dup',
                poste : 'developpeur',
                anciennete : '4ans' 
            },
            {
                id : 3,
                nom : 'Castex Jean',
                poste : 'developpeur',
                anciennete : '4ans' 
            }
          
        ],
        //jimplémente mon dispatch qui tte les méthodes du reducer
        dispatch : action =>{
            this.setState(state=> reducer(state, action))
        }
        
    }
    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    } 
}
//consumer me permet d'utiliser ts mes elements 
export const Consumer = Context.Consumer;