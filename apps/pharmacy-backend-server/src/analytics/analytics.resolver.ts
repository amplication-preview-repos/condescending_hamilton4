import * as graphql from "@nestjs/graphql";
import { AnalyticsResolverBase } from "./base/analytics.resolver.base";
import { Analytics } from "./base/Analytics";
import { AnalyticsService } from "./analytics.service";

@graphql.Resolver(() => Analytics)
export class AnalyticsResolver extends AnalyticsResolverBase {
  constructor(protected readonly service: AnalyticsService) {
    super(service);
  }
}
