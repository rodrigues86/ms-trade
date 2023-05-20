import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/example')
      .expect(200)
      .expect({ message: 'GET method response' });
  });

  it('/user (POST)', () => {
    const testData = { id: 1, name: 'Test' };

    return request(app.getHttpServer())
      .post('/example')
      .send(testData)
      .expect(201)
      .expect({
        message: 'POST method response',
        data: testData,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
