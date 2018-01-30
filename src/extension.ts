'use strict';
import * as vscode from 'vscode';
import { GuidCommands } from './commands';

export function activate(context: vscode.ExtensionContext) {
  var disposable = vscode.commands.registerCommand('miktemk.generateShortGuid', GuidCommands.insertCommand);
  context.subscriptions.push(disposable);
}

export function deactivate() {
}