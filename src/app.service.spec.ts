/**
 * @file app.service.spec.ts
 * @brief Unit tests for AppService.
 * @details Uses Jest and @nestjs/testing to create an isolated testing module,
 *          retrieve AppService, and assert on getHello() and add().
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { Test, type TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";

describe("AppService", () => {
  /**
   * @var appService
   * @type AppService
   * @brief Instance of AppService under test.
   * @details Set in beforeAll after compiling the testing module.
   */
  let appService: AppService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
    appService = app.get<AppService>(AppService);
  });

  it('should return "Hello World!"', () => {
    const result: string = appService.getHello();
    expect(result).toBe("Hello World!");
  });

  it("should add two numbers", () => {
    const a: number = 2;
    const b: number = 3;
    const result: number = appService.add(a, b);
    expect(result).toBe(5);
  });
});
