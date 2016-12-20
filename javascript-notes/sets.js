function Set() {
  var items = {};

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if (!this.has(value)) { //make sure value doesn't currently exist
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true
    }
    return false;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.sizeLegacy = function() {
    var count = 0;
    for (var prop in items) {
      if(items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count;
  };

  this.values = function() {
    return Object.keys(items);
  };

  this.valuesLegacy = function() {
    var keys = [];
    for (var key in items) {
      keys.push(key);
    }
    return keys;
  }
};
