export function addUser(user) {
    return {
        type: "ADD_USER",
        users: user
    }
};

export function removeUser(user) {
    return {
        type: "REMOVE_USER",
        users: user
    }
};