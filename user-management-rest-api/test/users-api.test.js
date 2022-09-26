// Testing: localhost:3000/api/users - GET method

const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');

// setting up chai http to be used along with chai
chai.use(chaiHttp); // refer: https://www.chaijs.com/plugins/chai-http/

// for the api to be tested over http -- we need 'npm i -D chai-http'

// what feature are we testing 
describe('users REST API', () => { 

  // test spec #1 
  it('should return status 200', ( done ) => {

    chai.request('http://localhost:3000/api/users')
      .get('/')
      .then( ( res) => {
        expect(res).to.have.status(200);
        done();
      })
      .catch( (err) => {
        console.log(err);
        throw(err);
      })
  });

  it('should fetch json resp', (done) => {

    chai.request('http://localhost:3000/api')
      .get('/users')
      .then((res) => {
        expect(res).to.have.json;
        done();
      })
      .catch((err) => {
        console.log(err);
        throw (err);
      })
  });

  
});
