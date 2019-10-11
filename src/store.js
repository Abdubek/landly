import createStore from 'storeon';

const users = store => {
    store.on('@init', () => ({ users: {} }))

    store.on('users/save', ({users}, payload) => {
        return { users: { ...users, ...payload } }
    })
};


export const store = createStore([
    users,
    process.env.NODE_ENV !== 'production' && require('storeon/devtools')
]);
