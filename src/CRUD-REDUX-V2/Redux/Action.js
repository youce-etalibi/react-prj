import React from "react";

const addUser = (user) => ({type : 'addUser', payload : user});
const updateUser = (user) => ({type : 'updateUser', payload : user});
const deleteUser = (idUser) => ({type : 'deleteUser', payload : idUser});

const deletePost = (idPost) => ({type : 'deletePost', payload : idPost});
const addPost = (post) => ({type : 'addPost', payload : post});

export {addUser, updateUser, deleteUser, deletePost, addPost};