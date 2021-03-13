const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let arr = [];
    if (typeof members !== 'object' || !members || members == null) {
        return false;
    } else {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] !== 'number' && members[i] && typeof members[i] === 'string') {
                arr.push(members[i].trim().toUpperCase().charAt(0));
            }
        }
        arr.sort();
    }
    return arr.join('');
};

