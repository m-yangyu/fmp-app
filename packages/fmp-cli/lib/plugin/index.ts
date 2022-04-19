import { IPlugin, IPluginType } from './type';

export * from './type';

export const wxCommandPlugin: IPlugin = {
  type: IPluginType.Command,
  register: (program, dev, build) => {
      dev.option('-p, --port', 'port', 80)
  }
}