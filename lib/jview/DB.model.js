var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CRMSchema = new Schema({
var CRMSchema = {
  WorkingCode: String,
  Status: String,
  Client: String,
  OperatingName: String,
  Owner: String,
  GST: Number,
  QST: Number,
  NEQ: Number,
  GQSTPeriod: String,
  YearEnd: Date,
  FinishedYearEnd: Date,
  RegisterDate: Date,
  ClicSequrExpress: String,
  ClicSequr: String,
  CRA: Boolean,
  Phone: String,
  Fax: String,
  Email: String,
  Street: String,
  City: String,
  Province: String,
  PostalCode: String,
  HomeAddress: String,
  Notes: String
};

module.exports = mongoose.model('CRM', CRMSchema);