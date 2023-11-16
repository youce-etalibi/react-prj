const adduser = (user) => ({ type: 'ajoute', payload: user });
const updateUser = (user) => ({ type: 'update', payload: user });
const deleteUser = (userId) => ({ type: 'delete', payload: userId });
const setPosts = (posts) => ({ type: 'setPosts', payload: posts }); 
export { adduser, updateUser, deleteUser, setPosts };
