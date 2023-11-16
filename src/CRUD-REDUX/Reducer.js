const initialState = {
  users: [],
  posts: [
    [
      {
        id: 1,
        userId: 1,
        title: "Crossfit is the best Sport for Man's",
        description: 'bela bela bela bela'
      },
      {
        id: 2,
        userId: 1,
        title: "Cbum is Champoin of Mr Olympia Again",
        description: 'cbum vs ramon dino'
      }
    ]
  ]
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ajoute':
      return { ...state, users: [...state.users, action.payload] };
    case 'update':
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
      return { ...state, users: updatedUsers };
    case 'delete':
      const filteredUsers = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: filteredUsers };
    case 'setPosts':
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
export default UserReducer;
