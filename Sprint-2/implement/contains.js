function contains(obj, key) {
    return (obj!=undefined && obj!=null && obj.constructor==Object && obj.hasOwnProperty(key));
}

module.exports = contains;
