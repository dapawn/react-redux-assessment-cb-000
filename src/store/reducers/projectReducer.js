const initState = {
  projects: [
    {id: '1', title: 'Hear ye, Hear Ye, This is important', content: 'Now if I could just remember what I was going gto say. It was really important you know.'},
    {id: '2', title: 'Hear ye, Hear Ye, Another important annoucement', content: 'Now if I could just remember what I was going gto say. It was really important you know.'},
    {id: '3', title: 'Hear ye, Hear Ye', content: 'Okay maybe this is gettin old, but I just cant remember what I was going gto say. It was really important you know.'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;
