import { InfoDetailIndicator } from '../enums/info-detail-status.enum';

export interface InfoDetail {
  title: string;
  items: InfoDetailItem[];
  config: InfoDetailConfig;
}

export interface InfoDetailItem {
  subtitle: string;
  data: InfoDetailData[];
}

export interface InfoDetailData {
  key: string;
  value: string | number;
  indicator?: InfoDetailIndicator;
  isImportant?: boolean;
  helperText?: string;
}

export interface InfoDetailConfig {
  width: string;
  columns: string;
}
