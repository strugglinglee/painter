// https://prettier.io/docs/en/options.html

module.exports = {
    // 一行最多 120 字符
    printWidth: 120,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用制表符，而使用空格符
    useTabs: false,
    // 不需要尾随分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 尽可能的省去引号
    quoteProps: 'as-needed',
    // jsx 中使用双引号, 而不是单引号
    jsxSingleQuote: false,
    // 不需要尾随逗号
    trailingComma: 'none',
    // 对象内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数尽可能的省去括号
    arrowParens: 'avoid',
    // 格式化文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要在文件开头写入 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 不需要缩进 vue 文件中 script 和 style 标签里的代码
    vueIndentScriptAndStyle: false,
    // 换行符使用 lf
    endOfLine: 'lf',
    // 格式化嵌入的内容
    embeddedLanguageFormatting: 'auto'
}
