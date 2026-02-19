/**
 * @file app.controller.spec.ts
 * @brief Unit tests for AppController with a mocked AppService.
 * @details Uses Test.createTestingModule to build a minimal module with
 *          AppController and a mock AppService to test the controller in isolation.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { Test, type TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  /**
   * @var appController
   * @type AppController
   * @brief Controller instance under test.
   * @details Obtained from the compiled testing module.
   */
  let appController: AppController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: (): string => "Hello from mock",
          },
        },
      ],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  it("should return the greeting from the service", () => {
    const result: string = appController.getHello();
    expect(result).toBe("Hello from mock");
  });
});
