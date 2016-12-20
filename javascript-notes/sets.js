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

  //Union - given two sets, this returns a new set with elements from both given sets
  this.union = function(otherSet) {
    var unionSet = new Set();

    var values = this.values();
    for (var i=0; i<value.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var i=0; i<values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  //Set Intersection
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();

    var values = this.values();
    for (var i=0; i<values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  //Set difference, values in A but not in B
  this.difference = function(otherSet) {
    var differenceSet = new Set();

    var values = this.values();
    for (var i=0; i<values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }
};
