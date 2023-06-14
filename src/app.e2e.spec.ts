import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from './app.module'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'

describe('UserController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/user (GET)', () => {
    return request(app.getHttpServer()).get('/user/smokeId').expect(200)
  })

  it('/user (POST)', () => {
    const data = {
      userName: 'user1',
      email: 'user1@gmail.com',
      fullName: 'User 1',
      age: 30
    }

    return request(app.getHttpServer()).post('/user/create').send(data).expect(201).expect({
      data
    })
  })

  afterAll(async () => {
    await app.close()
  })
})
