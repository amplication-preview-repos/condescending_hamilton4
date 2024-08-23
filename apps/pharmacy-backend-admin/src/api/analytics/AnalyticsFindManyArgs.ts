import { AnalyticsWhereInput } from "./AnalyticsWhereInput";
import { AnalyticsOrderByInput } from "./AnalyticsOrderByInput";

export type AnalyticsFindManyArgs = {
  where?: AnalyticsWhereInput;
  orderBy?: Array<AnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
