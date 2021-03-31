"use strict"

class Interface {

  constructor(model) {
    this.model = model;
  }
  
  create(obj) {
    const doc = new this.model(obj);
    return doc.save();
  }

  // {_id:id}
  // {_id} => {_id:_id}
  read(id) {
    if(id) {
      return this.model.find({ _id: id });
    } else {
      return this.model.find({});
    }
  }

  update(id, obj) {
    return this.model.findByIdAndUpdate(id, obj, {new: true});
  }

  delete(id) {
    return this.model.findByIdAndDelete(id);
}

module.exports = Interface;