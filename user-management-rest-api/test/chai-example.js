// chai js provides many api's such as expect, should, assert 
// npm install chai -D 
// also install mocha 
// exec this file thru mocha 
// type the command 'mocha' from command prompt or check package.json, then 'npm run test' 
const { assert, expect } = require('chai');
const should = require('chai').should();

const scores = [10, 20, 30, 40, 50]; 
const exampleText = 'Random Text';

// describe is from mocha -- group of related test specs - TEST SUITE 
describe('Scores', () => { 
  // test cases 
  // 'it' comes from mocha  
  it('has an array', () => {
    assert.isArray(scores, 'Scores not an Array');
  });

  it('has scores array which includes 50', () => {
    assert.include(scores, 50, 'Scores array does not have 50');
  });

  // let's try expect from chai
  it('is an array with 10 in it', () => {
    expect(scores).to.be.an('array').that.includes(10)
  });

  // let try negative side 
  it('has scores - not to have length of 6', () => {
    expect(scores).not.to.have.lengthOf(6);
  });

  it('has scores array that should have length of 5 [SHOULD]', () => {
    scores.should.have.lengthOf(5);
  });

});

describe('exampleText',  () => {
  it('is a string and includes Random', () => {
    exampleText.should.to.a('string').that.includes('Random');
  })
})





