export enum IPluginType {
  Command = 'Command',
  Builder = 'Builder',
}

export interface IPlugin {
  type: IPluginType;
  register: (command, devProgram, buildProgram) => void;
}