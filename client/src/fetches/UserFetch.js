export const getUsers = () => {
    return(
        fetch("http://localhost:8080/users")
            .then(res => res.json())
    );
};

export const getUsersByUserNames = (userName) => {
    return(
        fetch(`http://localhost:8080/users?userName=${userName}`)
            .then(res => res.json())
    );
};

export const getUsersByCommunity = (community) => {
    return(
        fetch(`http://localhost:8080/users?community=${community}`)
            .then(res => res.json())
    );
};

export const getUsersByShareBooksId = (bookId) => {
    return(
        fetch(`http://localhost:8080/users?shareBooksId=${bookId}`)
            .then(res => res.json())
    );
};


export const getUsersById = (userId) => {
    return(
        fetch(`http://localhost:8080/users/${userId}`)
        .then(res => res.json())
    );
};

export const postUser = (user) => {
    return(
        fetch(`http://localhost:8080/users`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
    );
};

export const updateUser = (user, userId) => {
    return(
        fetch(`http://localhost:8080/users/${userId}`, {
            method: 'put',
            body: JSON.stringify(user)
        })
    );
};

export const deleteUser = (userId) => {
    return(
        fetch(`http://localhost:8080/users/${userId}`, {
            method: 'delete',
        })
    );
};


