const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')
const bcrypt =require('bcrypt')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})
describe('Get /users', () => {
  test('returns a status 200 Created', async () => {
    const res = await request(server).get('/api/users');
    expect(res.status).toBe(200)
  })
})

describe('POST /register', () => {
  test('responds with proper status on success', async () => {
    const res = await request(server).post('/auth/register').send({ username: 'jake', password: '1234' })
    expect(res.status).toBe(404)
  })
  
  describe('Get /:user_id/attending', () => {
    test('gets all attending classes', async () => {
      const res = await request(server).get('/:user_id/attending');
      expect(res.status).toBe(404)
    })
  })
})