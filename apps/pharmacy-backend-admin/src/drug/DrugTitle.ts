import { Drug as TDrug } from "../api/drug/Drug";

export const DRUG_TITLE_FIELD = "id";

export const DrugTitle = (record: TDrug): string => {
  return record.id?.toString() || String(record.id);
};
