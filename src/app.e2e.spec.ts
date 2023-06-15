import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from './app.module'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ObjectId } from 'mongoose'

describe('UserController (e2e)', () => {
  let app: INestApplication
  let idTest: ObjectId

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('should create a new user', () => {
    const data = {
      userName: 'user1',
      email: 'user1@gmail.com',
      fullName: 'User 1',
      age: 30
    }

    return request(app.getHttpServer())
      .post('/user/create')
      .send(data)
      .expect(201)
      .expect(({ body }) => {
        idTest = body._id
        expect(body._id).toBeDefined()
        expect(body.email).toBe(data.email)
        expect(body.fullName).toBe(data.fullName)
        console.log(idTest)
      })
  })

  it('should get all users', () => {
    return request(app.getHttpServer())
      .get('/user/all')
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy()
      })
  })

  it('should get user by id', () => {
    console.log(idTest)
    return request(app.getHttpServer())
      .get(`/user/${idTest}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body && typeof body === 'object').toBeTruthy()
      })
  })

  afterAll(async () => {
    await app.close()
  })
})
