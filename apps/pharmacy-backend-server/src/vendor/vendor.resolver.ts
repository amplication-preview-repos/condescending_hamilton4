import * as graphql from "@nestjs/graphql";
import { VendorResolverBase } from "./base/vendor.resolver.base";
import { Vendor } from "./base/Vendor";
import { VendorService } from "./vendor.service";

@graphql.Resolver(() => Vendor)
export class VendorResolver extends VendorResolverBase {
  constructor(protected readonly service: VendorService) {
    super(service);
  }
}
