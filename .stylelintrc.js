module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
    plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-scss'],
    rules: {
        'prettier/prettier': true,

        'at-rule-no-unknown': null,
        'no-descending-specificity': null,

        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'local']
            }
        ],

        'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],

        'scss/at-rule-no-unknown': true
    }
}
