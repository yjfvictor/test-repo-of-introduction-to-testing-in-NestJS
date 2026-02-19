/**
 * @file app.module.ts
 * @brief Root application module that aggregates feature modules.
 * @details Declares AppController and AppService and imports HealthModule
 *          so that the app exposes health and root endpoints.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./health/health.module";

/**
 * @class AppModule
 * @type class
 * @brief Root NestJS module for the application.
 * @details Composes the main application by registering controllers and
 *          services and importing the health check module.
 */
@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
