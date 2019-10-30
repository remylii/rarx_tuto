export const getTodosState = store => store.todos;

export const getTodoList = store => {
  return getTodosState(store) ? getTodosState(store).allIds : [];
};

export const getTodoById = (store, id) => {
  return getTodosState(store)
    ? {
        ...getTodosState(store).byIds[id],
        id
      }
    : {};
};

export const getTodos = store => {
  return getTodoList(store).map(id => getTodoById(store, id));
};
