var mermaidRegex = /^```mermaid((.*[\r\n]+)+?)?```$/im;
var pluginName = 'mermaid-compat';
var mermainReleasedAssets = '/plugins/gitbook-plugin-mermaid-compat/mermaid/';

function processMermaidBlockList(page) {

  var match;

  while ((match = mermaidRegex.exec(page.content))) {
    var rawBlock = match[0];
    var mermaidContent = match[1];
    page.content = page.content.replace(rawBlock, '<div class="mermaid">' +
      mermaidContent + '</div>');
  }

  return page;
}

function addScript(filePath) {
  return '<script src="' + filePath + '"></script>'
}

function addCss(filePath) {
  return '<link rel="stylesheet" href="' + filePath + '"></link>'
}

module.exports = {
  website: {
    assets: './dist',
    css: [
      'mermaid/mermaid.css'
    ],
    js: [
      'book/plugin.js'
    ],
    html: {
      'head:end': function (options) {

        var assetList = [
          addScript(options.staticBase + mermainReleasedAssets + 'mermaid.min.js')
        ];

        var theme = (this.options.pluginsConfig[pluginName] || {}).theme;

        if (theme) {
          assetList.push(addCss(options.staticBase + mermainReleasedAssets + 'mermaid.' + theme + '.css'));
        }

        return assetList.join('');
      }
    }
  },
  hooks: {
    'page:before': processMermaidBlockList
  }
};
