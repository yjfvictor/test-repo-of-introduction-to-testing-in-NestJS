/**
 * @file app.e2e-spec.ts
 * @brief End-to-end tests for the NestJS application over HTTP.
 * @details Uses Test.createTestingModule to build the full AppModule,
 *          creates an INestApplication, and uses supertest to send HTTP
 *          requests and assert on status and body. Demonstrates E2E testing.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { type INestApplication } from "@nestjs/common";
import { Test, type TestingModule } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
  /**
   * @var app
   * @type INestApplication
   * @brief Nest application instance for E2E requests.
   * @details Initialised in beforeAll and closed in afterAll.
   */
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("/ (GET) returns Hello World!", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });

  it("/health (GET) returns status ok and timestamp", () => {
    return request(app.getHttpServer())
      .get("/health")
      .expect(200)
      .expect((res: { body: { status: string; timestamp: string } }) => {
        expect(res.body.status).toBe("ok");
        expect(typeof res.body.timestamp).toBe("string");
      });
  });
});
