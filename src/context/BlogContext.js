import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [
        ...state,
        {
          //generates random id
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    default:
      state;
  }
};

const addBlog = dispatch => {
  return (title, content) => {
    dispatch({
      type: 'add_blog',
      payload: {
        title,
        content,
      },
    });
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlog},
  [],
);
