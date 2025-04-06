const config = {
    paths: ['src/test/features/**/*.feature'],
    require: ['src/test/step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'summary',
      'progress-bar',
      "html: cucumber-report.html"
    ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
  };

module.exports = {
   default: config
 }