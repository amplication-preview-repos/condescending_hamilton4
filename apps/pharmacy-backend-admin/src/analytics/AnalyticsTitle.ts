import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "id";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
