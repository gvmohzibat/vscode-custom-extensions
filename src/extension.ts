// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "vahid-custom-extention" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.convertStyleLTR-RTL', () => {
      writeScssInclude('ltr-doRTL');
    }),
    vscode.commands.registerCommand('extension.convertStyleRTL-LTR', () => {
      writeScssInclude('rtl-doLTR');
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}

function writeScssInclude(mixinName: 'ltr-doRTL' | 'rtl-doLTR') {
  const activeTextEditor = vscode.window.activeTextEditor;
  if (activeTextEditor) {
    const selection = activeTextEditor.selection;
    const document = activeTextEditor.document;
    if (selection && document) {
      const selectedText = document.getText(selection).trim();
      if (selectedText) {
        const [property, value] = selectedText.split(';')[0].split(':');
        activeTextEditor.edit(editBuilder => {
          editBuilder.replace(selection, `@include ${mixinName}(${property}, ${value});`);
        });
      }
    }
  }
}
