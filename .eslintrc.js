// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
// eslint-disable-next-line no-undef
module.exports = {
    extends: ['taro/vue3'],
    rules: {
        'no-undef': 2, // 任何对未声明的变量的引用都会导致错误
        'no-undef-init': 2, // 消除初始化为undefined的变量声明
        'no-underscore-dangle': 2 // 标识符不能以_开头或结尾
    }
}
