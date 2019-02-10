// TODO some tesitng
let Spending = require('../models/spendingModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
let app = require('../index');
require('sinon-mongoose');
chai.use(chaiHttp);

describe('Spendings API tests', () => {
    beforeEach((done) => {
        Spending.deleteMany({}, (err) => { 
           done();           
        });        
    });
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
});