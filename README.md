# S3 Instructions
### Download MSI installer:
https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html#install-msi-on-windows
### Python:
https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html#awscli-install-windows-pip
### Add to PATH:
https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html#awscli-install-windows-path
## MINGW32 Alias
```
vim ~/.bashrc
alias aws="winpty /C/Program Files/Amazon/AWSCLI/aws.exe"
alias py="winpty python.exe"
```
## Configure AWS
```
aws configure
```
# Deployment instructions
```
rm -rf dist; mkdir dist; cp index.html dist/; cp data.js dist/; cp main.js dist/; cp -R shapes dist/; cp -R lib dist/
```
# Windows deployment in CMD

Slides are deployed to //newmediapilot.com/victorgad.camera

```
aws s3 rm s3://www.victorgad.camera --recursive
aws s3 cp --recursive C:\Users\SPECTRE\Desktop\newmediapilot\augmented-reality\dist s3://www.victorgad.camera
aws cloudfront create-invalidation --distribution-id EG7IM1OSH5KOE --paths "/*"
```
