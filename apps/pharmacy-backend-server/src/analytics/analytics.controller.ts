import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyticsService } from "./analytics.service";
import { AnalyticsControllerBase } from "./base/analytics.controller.base";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticsController extends AnalyticsControllerBase {
  constructor(protected readonly service: AnalyticsService) {
    super(service);
  }
}
