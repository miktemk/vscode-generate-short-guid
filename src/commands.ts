import * as vscode from 'vscode';
import * as util from 'util';
import { Guid } from './guid';

export class GuidCommands {

  /**
   * Inserts short GUID at the cursor position or replaces active selection.
   */
  static insertCommand() {
    let textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
      vscode.window.showInformationMessage('Open a file first to manipulate text selections');
      return;
    }

    const g = new Guid();
    let guidShortStr = g.toString().substr(0, 8);

    textEditor.edit(edit => {
      for (const selection of textEditor.selections) {
        if (selection.isEmpty) {
          edit.insert(selection.start, guidShortStr);
        } else {
          edit.replace(selection, guidShortStr);
        }
      }
    });
  }
}