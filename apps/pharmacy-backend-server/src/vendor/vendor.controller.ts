import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VendorService } from "./vendor.service";
import { VendorControllerBase } from "./base/vendor.controller.base";

@swagger.ApiTags("vendors")
@common.Controller("vendors")
export class VendorController extends VendorControllerBase {
  constructor(protected readonly service: VendorService) {
    super(service);
  }
}
