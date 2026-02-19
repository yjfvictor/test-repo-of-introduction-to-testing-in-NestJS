/**
 * @file health.controller.spec.ts
 * @brief Unit tests for HealthController.
 * @details Verifies that getHealth() returns an object with status "ok"
 *          and a valid ISO 8601 timestamp string.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { Test, type TestingModule } from "@nestjs/testing";
import { HealthController } from "./health.controller";

describe("HealthController", () => {
  /**
   * @var healthController
   * @type HealthController
   * @brief Controller instance under test.
   * @details Retrieved from the compiled testing module.
   */
  let healthController: HealthController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();
    healthController = app.get<HealthController>(HealthController);
  });

  it("should return status ok and a timestamp", () => {
    const result = healthController.getHealth();
    expect(result.status).toBe("ok");
    expect(typeof result.timestamp).toBe("string");
    expect(() => new Date(result.timestamp).toISOString()).not.toThrow();
  });
});
