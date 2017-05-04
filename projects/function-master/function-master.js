function objectValues(object) {
    var array = [];
    for (var key in object) {
        array.push(object[key]);
    }
    return array;
}

function keysToString(object) {
    return Object.keys(object).join(" ");
}

function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            arr.push(object[key]);
        }
    }
    return arr.join(" ");
}

function arrayOrObject(argument) {
    if (Array.isArray(argument)) {
        return "array";
    }
    if (typeof argument === "object") {
        return "object";
    }
}

function capitalizeWord(string) {
    if (typeof string === "string") {
        return (string[0]).toUpperCase() + string.substring(1, string.length);
    }
}

function capitalizeAllWords(string) {
    let arr = string.split(" ");
    for (var x = 0; x < arr.length; x++) {
        arr[x] = arr[x][0].toUpperCase() + arr[x].substring(1, string.length);
    }
    return arr.join(" ");
}

function welcomeMessage(object) {
    var name = object.name;
    return "Welcome " + capitalizeWord(name) + "!";
}

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

function maybeNoises(object) {
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(" ");
    }
    else {
        return "there are no noises";
    }
}

function hasWord(string, word) {
    let arr = string.split(' ');
    for(let l = 0; l< arr.length; l++) {
        if(arr[l] === word) {
            return true;
        }
    }
    return false;
}

function addFriend(name, object) {
    object.friends.push(name);
    return object
}

function isFriend(name, object) {
    if (object.friends && object.friends.length > 0) {
        for (var x = 0; x < object.friends.length; x++) {
            if (object.friends[x] === name) {
                return true
            }
        }
        return false    
    }
    else {
        return false
    }
}

function nonFriends (name, list) {
    var nonFriendsDump = [];
    for (var x = 0; x < list.length; x++) {
        if (!isFriend(name, list[x]) && list[x].name !== name) {
           nonFriendsDump.push(list[x].name); 
        }
    }
    return nonFriendsDump;
}

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

function removeProperties(object, array) {
    for (var key in object) {
        if (array.includes(key)) {
            delete object[key];
        }
    }
    return object;   
    }
    
function dedup(array) {
    let nonDups = [];
    for(let x = 0; x < array.length; x++) {
        if(!nonDups.includes(array[x])) {
            nonDups.push(array[x]);
        }
    }
    return nonDups;
}