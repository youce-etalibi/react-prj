const addPerson = (person) => ({type : 'addPerson', payload : person})
const filterPerson = (ville) => ({type : 'filterPerson', payload : ville})

export {addPerson, filterPerson};