# GitBook Multilanguage Template
___


## GitBook Folder Structure
```
+ gitbook_learn
  - cover.jpg               => book cover
  - cover_small.jpg         => book cover small
  - book.json               => book info config for common use
  - LANGS.md                => multiple languages definition
  - README.md               => README.md for Github
  + en                      => folder for books content in English
    - book.json                 => book info config for this language only
    - README.md
    - SUMMARY.md
  + zh-hans                 => folder for books content in Chinese
    - book.json                 => book info config for this language only
    - README.md
    - SUMMARY.md
  + ja                      => folder for books content in Japanese
    - book.json                 => book info config for this language only
    - README.md
    - SUMMARY.md
  + node_modules            => all gitbook plugins are here
  + _book                   => generated books
```

## LANGS.md
```
* [English](en)
* [中文](zh-hans)
* [日本語 (にほんご)](ja)
```

## GitBook-Plugins
All the languages can share the same plugins which means that we only need to install the plugin once.

So we need a `book.json` for all plugins :
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

Then we can run `gitbook install` to install all the plugins we need.

For each different languages, we can overwirte the `book.json`.

eg `zh-hans/book.json`:

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

eg `en/book.json`:

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

## NOTE
For the `plugins` field, we need to list all the plugins since its a `array filed` and the plugins list in the `common book.json` will be **overwritten**.

For the `pluginsConfig` field, we only need to add or change the config that is different from in the `common book.json` since its a `dict field` .

It seems like `gitbook build` will copy all the plugins needed to each language folder (under gitbook/plugins) so now plugin `advanced-emoji` for example will have 4 copies -- 3 for languages `zh` `en` `ja` and one for the `root` folder.

**Conclusion**

We add all the plugins in the `root/book.json` and install them only once.

For each language, we list all the `plugins` we need (or remove using `-`) and overwrite `pluginsConfig` if any.




