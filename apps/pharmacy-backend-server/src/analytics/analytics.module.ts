import { Module } from "@nestjs/common";
import { AnalyticsModuleBase } from "./base/analytics.module.base";
import { AnalyticsService } from "./analytics.service";
import { AnalyticsController } from "./analytics.controller";
import { AnalyticsResolver } from "./analytics.resolver";

@Module({
  imports: [AnalyticsModuleBase],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, AnalyticsResolver],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
