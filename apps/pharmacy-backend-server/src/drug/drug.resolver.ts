import * as graphql from "@nestjs/graphql";
import { DrugResolverBase } from "./base/drug.resolver.base";
import { Drug } from "./base/Drug";
import { DrugService } from "./drug.service";

@graphql.Resolver(() => Drug)
export class DrugResolver extends DrugResolverBase {
  constructor(protected readonly service: DrugService) {
    super(service);
  }
}
