const iniState = {
    person : [ 
        {
        id : 1, 
        name : '',
        ville : 'Tangier'
    },
    {
        id : 2, 
        name : '',
        ville : 'Tangier'
    },
    {
        id : 3, 
        name : '',
        ville : 'Casablanca'
    }
 ]
}
export default function Reducer(state = iniState, action){
    switch(action.type){
        case "addPerson" : 
            return {...state, person : [...state.person, action.payload]};
        case "filterPerson" :
            return {...state, person : state.person.filter((item) => item.ville == action.payload)}
        default :
            return state
    }
}