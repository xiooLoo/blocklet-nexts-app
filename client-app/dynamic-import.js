const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, './src/components'); // 修改为你的组件文件夹路径
const outputPath = path.resolve(__dirname, './src/components/index.ts'); // 修改为你想要输出的文件路径

let importStatements = '';
let componentNames = [];

const blocks = ['index.ts', 'index']
const isBlock = (componentName) => {
  return blocks.includes(componentName);
}

fs.readdirSync(dirPath).forEach(file => {
  
  const componentName = path.basename(file, path.extname(file));
  if (isBlock(componentName)) return;
  if (componentName === 'MaterialUI') {
    fs.readdirSync(path.resolve(dirPath + '/MaterialUI')).map(fileMi => {
      const componentNameMi = path.basename(fileMi, path.extname(fileMi));
      if (isBlock(componentNameMi)) return;
      importStatements += `import {${componentNameMi} as _${componentNameMi}} from './MaterialUI';\n`;
      componentNames.push({ componentName: componentNameMi, file: fileMi});
    });
  } else {
    importStatements += `import {${componentName} as _${componentName}} from './${file}';\n`;
    componentNames.push({ componentName, file });
  }
});

importStatements += `\nexport {
  ${ componentNames.map(({ componentName }) => '_' + componentName + ' as ' + componentName).join(',\n  ') }
}
`;

fs.writeFileSync(outputPath, importStatements);
