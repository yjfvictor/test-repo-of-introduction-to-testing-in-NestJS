/**
 * @file health.controller.ts
 * @brief Controller for the /health endpoint.
 * @details Returns a simple JSON status for monitoring and E2E tests.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { Controller, Get } from "@nestjs/common";

/**
 * @interface HealthResponse
 * @type interface
 * @brief Shape of the JSON response for GET /health.
 * @details Used to type the return value of getHealth().
 */
export interface HealthResponse {
  /** @brief Status indicator, e.g. "ok". */
  status: string;
  /** @brief ISO 8601 timestamp of the check. */
  timestamp: string;
}

/**
 * @class HealthController
 * @type class
 * @brief Controller that serves health check responses.
 * @details Registers GET /health returning status and timestamp.
 */
@Controller("health")
export class HealthController {
  /**
   * @fn getHealth
   * @type function
   * @brief Handles GET /health and returns status and timestamp.
   * @details Builds an object with status "ok" and current time in ISO 8601 format.
   *          Used by load balancers and E2E tests to verify the app is running.
   * @returns {HealthResponse} Object with status and timestamp.
   */
  @Get()
  getHealth(): HealthResponse {
    const timestamp: string = new Date().toISOString();
    return { status: "ok", timestamp };
  }
}
