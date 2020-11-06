const envSettings = window as any;
export default class Config {
  static API_URL = envSettings.API_URL;
  static MAPBOX_TOKEN = envSettings.MAPBOX_TOKEN;
}
