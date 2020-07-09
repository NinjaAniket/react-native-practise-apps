import testDataContext from './testDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 19999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case 'edit_blog':
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });

    case 'delete_blog':
      return state.filter(item => item.id !== action.payload);

    default:
      state;
  }
};

const addBlog = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blog', payload: {title, content}});
    callback();
  };
};
const deleteBlog = dispatch => {
  return id => {
    dispatch({type: 'delete_blog', payload: id});
  };
};

const editBlog = dispatch => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blog', payload: {id, title, content}});
    callback();
  };
};

export const {Context, Provider} = testDataContext(
  blogReducer,
  {addBlog, deleteBlog, editBlog},
  [],
);
