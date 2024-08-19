module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // ou 'plugin:vue/recommended' para regras mais abrangentes
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'semi': ['error', 'never'], // Usado para que seja dispensado o uso de ponto e vírgula no final de cada linha
    'no-console': 'error', // Não é aceito console.log() no cógido, para debugar use -> /* eslint-disable */
    'vue/attributes-order': 'error', // Define uma ordem padão vue, para os attributos, classes, binds, v-ifs, eventos ...
    'vue/order-in-components': 'error', // Define uma ordem para props, computed, methods...
    'vue/attribute-hyphenation': ['error',  'never'], // Regra para que os atributos sejam escritos sem hífen, padrão --> :myAttribute
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // Regra que define que todos os names: dentro do componente sejam escritos em PascalCase
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 2 // máximo de atributos por linha é dois, para adicionar mais atributos, tem que pular linha
      },
    }],
    'vue/mustache-interpolation-spacing': 'error', // mínimo 1 espaço na interpolação {{ myname }}
    'vue/prop-name-casing': ['error', 'camelCase'], // As props são escritas apenas em camelCase
    'vue/this-in-template': 'error', // Não aceita o this no template
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': false, // O componente só é aceito no template se for registrado como PascalCase
    }],
    'vue/component-options-name-casing': ['error', 'PascalCase'], // O componente só é aceito no script se for registrado como PascalCase
    'vue/new-line-between-multi-line-property': 'error', // Serve para que seja obrigatorio pular no mínimo uma linha para escrever o próximo método, computed ....
    'vue/no-empty-component-block': 'error', // Não deixa escrever um template, script ou style vazios.
    'vue/padding-line-between-blocks': 'error', // Serve para que seja obrigatorio pular uma linha entre o template, script e style
    'vue/no-multi-spaces': 'error',
    'no-trailing-spaces': 'error' // Evitar espaços em branco descenessarios
  }
}
