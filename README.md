# vahid-custom-extention README

## Installing and Packaging

First package the extension

```
# install vsce
npm i -g vsce

# packaging
vsce package
```

Now install it:

```
code --install-extension "./vahid-custom-extention-0.0.1.vsix"
```

## Extension Usage

### Commands

- Add @include ltr-doRTL() - _extension.convertStyleLTR-RTL_
- Add @include rtl-doLTR() - _extension.convertStyleRTL-LTR_
