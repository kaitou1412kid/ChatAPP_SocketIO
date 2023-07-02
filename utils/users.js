const users = [];

// Join user to chat
const userJoin = (id, username, room)=>{
    const user = {id, username, room};

    users.push(user);

    return user;
}

// user leaves chat
const userLeave = (id) =>{
    const index = users.findIndex((e)=> e.id === id);
    if(index !== -1){
        return users.splice(index,1)[0];
    }
}

// Get room users
const getRoomUser = (room)=>{
    return users.filter(e => e.room === room);
}

// Get the current user
const getCurrentUser = (id)=>{
    return users.find(e => e.id === id);
}

module.exports = {userJoin, getCurrentUser, userLeave, getRoomUser}