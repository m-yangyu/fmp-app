import { Command } from 'Commander';

export default class CommandContent {
  private program: Command;

  private buildActions: { name: string; action: Function }[];

  private devActions: { name: string; action: Function }[];

  private commands: { name: string; callback: Function }[];

  constructor(program: Command) {
    this.program = program;
  }

  hasActions(name: string, env: string) {
    return this[`${env}Actions`].some((curAction) => curAction.name === name);
  }

  registerBuildAction(name: string, action: Function) {
    if (this.hasActions(name, 'build')) {
      throw new Error(`${name} 已经存在`);
    }

    this.buildActions.push({
      name,
      action,
    });
  }

  registerDevAction(name: string, action: Function) {
    if (this.hasActions(name, 'dev')) {
      throw new Error(`${name} 已经存在`);
    }

    this.devActions.push({
      name,
      action,
    });
  }

  registerCommand(name: string, callback: Function) {
    if (this.hasActions(name, 'command')) {
      throw new Error(`${name} 已经存在`);
    }

    this.commands.push({
      name,
      callback,
    });
  }

  private parse() {
    
  }
}