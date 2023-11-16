const addUser = (user) => ({ type : 'addUser', payload : user });
const addPost = (post) => ({ type : 'addPost', payload : post });

export { addUser, addPost };