const ajoute = (product) => ({ type: 'ajoute', product });
const supprime = (productId) => ({ type: 'delete', productId });

export { ajoute, supprime };
