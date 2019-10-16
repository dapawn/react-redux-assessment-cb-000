const initState = {
  posts: [
    {id: '1', title: 'Hear ye, Hear Ye, This is important', content: 'Now if I could just remember what I was going gto say. It was really important you know.'},
    {id: '2', title: 'Hear ye, Hear Ye, Another important annoucement', content: 'Now if I could just remember what I was going gto say. It was really important you know.'},
    {id: '3', title: 'Hear ye, Hear Ye', content: 'Okay maybe this is gettin old, but I just cant remember what I was going gto say. It was really important you know.'},
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return state;
    case 'CREATE_POST_ERROR':
      return state;
    case 'LIKE_POST':
      return state;
    case 'LIKE_POST_ERROR':
      return state;
    default:
      return state;
  }
}

export default postReducer;
