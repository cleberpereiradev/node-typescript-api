import { SetupServer } from '@src/server';
import { SuperTest, Test } from 'supertest'; // Import SuperTest
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp()) as unknown as SuperTest<Test>; // Use SuperTest<Test> instead of TestAgent<Test>
});
