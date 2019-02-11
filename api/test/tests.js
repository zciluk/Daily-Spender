// TODO some tesitng
let Spending = require('../models/spendingModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
let app = require('../index');
require('sinon-mongoose');
chai.use(chaiHttp);

describe('Spendings API tests', () => {
    // eslint-disable-next-line no-undef
    before((done) => {
        Spending.deleteMany({}, (err) => { 
           done();           
        });        
    });
    ////////////
    describe('/GET spendings', () => {
        it('it should get the empty array of spendings', (done) => {
          chai.request(app)
              .get('/spendings')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                done();
              });
        });
    });
    ////////////
    describe('/POST spending', () => {
        it('it should not post a speding without a name', (done) => {
            let spending = {
                key: "549841422173",
                date: "02/11/2019",
                value: 123
            }
          chai.request(app)
              .post('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('name');
                    res.body.errors.name.should.have.property('kind').eql('required');
                done();
              });
        });
    });
    ////////////
    describe('/POST spending', () => {
        it('it should not post a speding without value field sent', (done) => {
            let spending = {
                key: "549841422173",
                date: "02/11/2019",
                name: "test",
               
            }
          chai.request(app)
              .post('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('value');
                    res.body.errors.value.should.have.property('kind').eql('required');
                done();
              });
        });
    });
    ////////////
    describe('/POST spending', () => {
        it('it should not post a speding when Value is a string', (done) => {
            let spending = {
                key: "549841422173",
                date: "02/11/2019",
                name: "test",
                value: "Random string"
            }
          chai.request(app)
              .post('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('value');
                    res.body.errors.value.should.have.property('name').eql('CastError');
                done();
              });
        });
    });
    ////////////
    describe('/POST spending', () => {
        it('it should not post a speding without date field sent', (done) => {
            let spending = {
                key: "549841422173",
                name: "test",
                value: 123
            }
          chai.request(app)
              .post('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('date');
                    res.body.errors.date.should.have.property('kind').eql('required');
                done();
              });
        });
    });
    ////////////
    describe('/POST spending', () => {
        it('it should not post a speding without key field sent', (done) => {
            let spending = {
                date: "02/11/2019",
                name: "test",
                value: 123
            }
          chai.request(app)
              .post('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('key');
                    res.body.errors.key.should.have.property('kind').eql('required');
                done();
              });
        });
    });
    describe('/POST spending', () => {
        it('it should post a spending properly', (done) => {
            let spending = {
                key: "1549751430491",
                date: "02/11/2019",
                name: "test",
                value: 123
            }
          chai.request(app)
              .post('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('New record created in database.');
                done();
              });
        });
    });
    describe('/GET spendings', () => {
        it('it should get an array with one spending added previously', (done) => {
          chai.request(app)
              .get('/spendings')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(1);
                done();
              });
        });
    });
    describe('/DELETE spending', () => {
        it('it should post a spending properly', (done) => {
            let spending = {
                key: "1549751430491",
            }
          chai.request(app)
              .delete('/spendings')
              .send(spending)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Spending deleted successfully!!');
                done();
              });
        });
    });
    describe('/GET spendings', () => {
        it('it should once again get an empty array of spendings', (done) => {
          chai.request(app)
              .get('/spendings')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                done();
              });
        });
    });
});