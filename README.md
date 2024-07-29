# tutorials-typescript
## Node.js
Make sure the node.js is up to date:
1. Update nvm `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
2. Check installed node version `nvm list`
3. Check node latest stable version `nvm version-remote --lts`
4. Install latest stable version `nvm install --lts`

## TypeScript
Compile TypeScript into JavaScript:  
`ts sandbox.ts`  
Watch and compile TypeScript into JavaScript:  
`ts sandbox.ts -w`

### Inference
TypeScript tries to infer the type when possible:
```
let character = 'luigi';
character = 20;
```