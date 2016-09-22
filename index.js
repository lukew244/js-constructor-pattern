function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();

// What happens if you add this code? Why?
countModel.set = function() {
  return "hello";
};

countModel.set(5);

console.log("count is", countModel.count());
