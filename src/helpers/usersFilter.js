export function usersFiler(users, setUsers, data) {
    if(users.length < 0 || data.length < 0) {
        return console.log('false arguments')
    }

    const allUsers = [...users, ...data];

    const sortedUsers = allUsers.sort(function(x, y){
        return y.registration_timestamp - x.registration_timestamp;
    })

    setUsers(sortedUsers);
}