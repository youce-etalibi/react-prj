const increment = (nbr) => ({ type: 'increment', payload : nbr });
const decrement = (nbr) => ({ type: 'decrement', payload : nbr });
export { increment, decrement };
