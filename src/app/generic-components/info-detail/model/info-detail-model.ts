import { InfoDetailIndicator } from '../enums/info-detail-status.enum';
import { InfoDetail, InfoDetailConfig, InfoDetailData, InfoDetailItem } from '../interfaces/info-detail.interface';

export class InfoDetailModel {
  title: string;
  items: InfoDetailItemModel[];
  config: InfoDetailConfigModel;

  constructor(data?: InfoDetail) {
    this.title = data ? data.title : '';
    this.items = data ? data.items : [];
    this.config = data ? data.config : new  InfoDetailConfigModel();
  }
}

export class InfoDetailItemModel {
  subtitle: string;
  data: InfoDetailDataModel[];

  constructor(data?: InfoDetailItem) {
    this.subtitle = data ? data.subtitle : '';
    this.data = data ? data.data : new Array<InfoDetailDataModel>();
  }
}

export class InfoDetailDataModel {
  key: string;
  value: string | number;
  indicator?: InfoDetailIndicator;
  isImportant?: boolean;
  helperText?: string;
  constructor(data?: InfoDetailData) {
    this.key = data ? data.key : '';
    this.value = data ? data.value : '';
    this.indicator = data ? data.indicator : InfoDetailIndicator.success;
    this.isImportant = data ? data.isImportant : false;
    this.helperText = data ? data.helperText : '';
  }
}

export class InfoDetailConfigModel {
  width: string;
  columns: string;

  constructor(data?: InfoDetailConfig) {
    this.width = data ? data.width : '';
    this.columns = data ? data.columns : '';
  }
}
