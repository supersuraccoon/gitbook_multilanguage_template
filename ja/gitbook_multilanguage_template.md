# GitBook 多言語対応テンプレート
___


## GitBook フォルダ構成
```
+ gitbook_learn
  - cover.jpg               => 本の表紙画像
  - cover_small.jpg         => 本の表紙画像・小
  - book.json               => プラグイン共通配置
  - LANGS.md                => 多言語対応配置
  - README.md               => GitHub README.md
  + en                      => 英語専用フォルダ
    - book.json                 => 英語専用配置
    - README.md
    - SUMMARY.md
  + zh-hans                 => 中国語専用フォルダ
    - book.json                 => 中国語専用配置
    - README.md
    - SUMMARY.md
  + ja                      => 日本語専用フォルダ
    - book.json                 => 日本語専用配置
    - README.md
    - SUMMARY.md
  + node_modules            => GitBook プラグインインストールフォルダ
  + _book                   => 生成した静的なHTMLフォルダ
```

## LANGS.md
```
* [English](en)
* [中文](zh-hans)
* [日本語 (にほんご)](ja)
```

## GitBook-Plugins
全ての言語に対しプラグインを一回しかインストールするためまずは共通の `book.json` で使用された全てのプラグインとその設置を記入する:

```
{ 
    "plugins" : 
    [
        "advanced-emoji",
        "disqus",
        "todo",
        "emphasize",
        "katex",
        "mermaid-compat",
        "chart",
        "search-pro"
    ],
    "pluginsConfig": 
    {
        "sharing": {
            "weibo": true,
            "facebook": true,
            "twitter": true
        },
        "disqus": {
            "shortName": "xxxxxx"
        },
        "search-pro": {
            "cutWordLib": "nodejieba"
        }
    }
}
```

で、`gitbook install` コマンドよりインストールは完了。

そして各言語に対しそれぞれの状況によってプラグインやほかの設置を `book.json` ですること。

列 `zh-hans/book.json`:

```
{
    "author": "SuperSuRaccoon",
    "links": {
        "sidebar": {
            "我的博客": "http://www.supersuraccoon-cocos2d.com"
        }
    },
    "plugins" : 
    [
        "advanced-emoji",
        "disqus",
        "todo",
        "emphasize",
        "katex",
        "mermaid-compat",
        "chart",
        "search-pro",
        "-search"
    ],
    "pluginsConfig": 
    {
        "sharing": {
            "weibo": true,
            "facebook": false,
            "twitter": false
        },
        "disqus": {
            "shortName": "xxxxxx_zh"
        }
    }
}
```

列 `en/book.json`:

```
{
    "author": "SuperSuRaccoon",
    "links": {
        "sidebar": {
            "My Blog": "http://www.supersuraccoon-cocos2d.com"
        }
    },
    "plugins" : 
    [
        "advanced-emoji",
        "disqus",
        "todo",
        "emphasize",
        "katex",
        "mermaid-compat",
        "chart",
        "-search-pro"
    ]
}
```

## 注意事項
`plugins` フィールドは `配列型` のため、共通の `book.json` で書いていた `plugins` 内容を **上書きする** ことがあるので注意してください。

**結論**

共通の `book.json` で全てのプラグインを管理し、各言語でそれぞれの状況によって`plugins` と `pluginsConfig` を調節すること。




