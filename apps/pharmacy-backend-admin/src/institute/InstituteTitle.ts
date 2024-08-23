import { Institute as TInstitute } from "../api/institute/Institute";

export const INSTITUTE_TITLE_FIELD = "id";

export const InstituteTitle = (record: TInstitute): string => {
  return record.id?.toString() || String(record.id);
};
