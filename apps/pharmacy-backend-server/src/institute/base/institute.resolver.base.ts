/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Institute } from "./Institute";
import { InstituteCountArgs } from "./InstituteCountArgs";
import { InstituteFindManyArgs } from "./InstituteFindManyArgs";
import { InstituteFindUniqueArgs } from "./InstituteFindUniqueArgs";
import { DeleteInstituteArgs } from "./DeleteInstituteArgs";
import { InstituteService } from "../institute.service";
@graphql.Resolver(() => Institute)
export class InstituteResolverBase {
  constructor(protected readonly service: InstituteService) {}

  async _institutesMeta(
    @graphql.Args() args: InstituteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Institute])
  async institutes(
    @graphql.Args() args: InstituteFindManyArgs
  ): Promise<Institute[]> {
    return this.service.institutes(args);
  }

  @graphql.Query(() => Institute, { nullable: true })
  async institute(
    @graphql.Args() args: InstituteFindUniqueArgs
  ): Promise<Institute | null> {
    const result = await this.service.institute(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Institute)
  async deleteInstitute(
    @graphql.Args() args: DeleteInstituteArgs
  ): Promise<Institute | null> {
    try {
      return await this.service.deleteInstitute(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
