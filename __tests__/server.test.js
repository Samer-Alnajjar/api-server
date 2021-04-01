'use strict';

const { server } = require('../src/server.js'); // => {server,start}
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server);
let clothesID;
let foodID;


describe('API Server', () => {
  // Testing Clothes
  it('Handle error routes', async () => {
    const response = await request.get(`/test`);
    expect(response.status).toEqual(404);
  });
  it('Handle error method', async () => {
    const response = await request.post(`/test`);
    expect(response.status).toEqual(404);
  });
  it('Handle getting data for clothes', async () => {
    const response = await request.get(`/api/v1/clothes`);
    expect(response.status).toEqual(200);
  });
  it('should create a clothes on POST /clothes', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'T-Shirt'
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('T-Shirt');
    clothesID = response.body._id;
  });
  it('should update a clothes on PUT /clothes', async () => {
    const response = await request.put(`/api/v1/clothes/${clothesID}`).send({
      name: 'Pants'
    });
    expect(response.status).toEqual(204);
    // expect(response.body.data.name).toEqual('Pants');
  });
  it('should delete a clothes on DELETE /clothes', async () => {
    const response = await request.delete(`/api/v1/clothes/${clothesID}`)
    expect(response.body._id).toEqual(clothesID);
  });

  // Testing food
  it('Handle error routes for food', async () => {
    const response = await request.get(`/test`);
    expect(response.status).toEqual(404);
  });
  it('Handle error method for food', async () => {
    const response = await request.post(`/test`);
    expect(response.status).toEqual(404);
  });
  it('Handle getting data for food', async () => {
    const response = await request.get(`/api/v2/food`);
    expect(response.status).toEqual(200);
  });
  it('should create a food on POST /food', async () => {
    const response = await request.post('/api/v2/food').send({
      name: 'Mansaf'
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Mansaf');
    foodID = response.body._id;
  });
  it('should update a food on PUT /food', async () => {
    const response = await request.put(`/api/v2/food/${foodID}`).send({
      name: 'Kenafah'
    });
    expect(response.status).toEqual(204);
    // expect(response.body.data.name).toEqual('Kenafah');
  });
  it('should delete a food on DELETE /food', async () => {
    const response = await request.delete(`/api/v2/food/${foodID}`)
    expect(response.body._id).toEqual(foodID);
  });
});