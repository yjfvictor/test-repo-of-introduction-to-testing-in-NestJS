/**
 * @file health.module.ts
 * @brief Module that registers the health check controller.
 * @details Provides HealthController for the /health endpoint used by
 *          integration and E2E tests.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";

/**
 * @class HealthModule
 * @type class
 * @brief NestJS module for health check functionality.
 * @details Exports HealthController so the app can respond to health checks.
 */
@Module({
  controllers: [HealthController],
})
export class HealthModule {}
