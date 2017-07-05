var mongoose = require('mongoose');
// var assert = require('assert');
var db = 'mongodb://localhost/example'
var dbModel = require('./DB.model');

mongoose.connect(db)

var CrmEntry = dbModel;

var firstEntry = new CrmEntry({
	  WorkingCode: 'M',
	  Status: 'Active',
	  Client: '9281-4557 Québec inc',
	  OperatingName: 'Luying yuan',
	  Owner: 'Hai Long',
	  GST: '815972732',
	  QST: '1220224895',
	  NEQ: '1169109676',
	  GQSTPeriod: 'Monthly',
	  YearEnd: '2017-7-1',
	  FinishedYearEnd: '2018-7-1',
	  RegisterDate: '2016-12-22',
	  ClicSequrExpress: 'ES0GGZO',
	  ClicSequr: 'ES0GGZO',
	  CRA: '',
	  Phone: '514-806-0532',
	  Fax: '',
	  Email: 'plaassault@hotmail.com',
	  Street: '1860 crois. Séguin',
	  City: 'Brossard',
	  Province: 'Quebec',
	  PostalCode: 'J4X1K8',
	  HomeAddress: '',
	  Notes: 'no spcial note'
	});

firstEntry.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved');
  }
});