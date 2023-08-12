const request = require('supertest');
const app1 = require('../foodSharingAppBackEnd/index');

describe('Registration Endpoint', () => {
  test('Successful registration', async () => {
    const response = await request(app1)
      .post('/register')
      .send({ name: 'newuser',email:"test@gmail.com", password: 'newpassword' });

    expect(response.status).toBe(201);
   expect(response.body.message).toBe('Registration successful');
  });
});

describe('login Endpoint', () => {
  test('Successful registration', async () => {
    const response = await request(app1).post('/login').send({ email:"anu@gmail.com", password: '123' });
    expect(response.status).toBe(200);
   expect(response.body.message).toBe('logged in successfully...');
  });
});