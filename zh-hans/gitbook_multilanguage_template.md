# GitBook 多语言模板
___


## GitBook 目录结构
```
+ gitbook_learn
  - cover.jpg               => 封面图片
  - cover_small.jpg         => 封面图片(小)
  - book.json               => 通用配置文件
  - LANGS.md                => 多语言配置文件
  - README.md               => GitHub 用 README.md
  + en                      => 书籍的英文版专用目录
    - book.json                 => 英文版专用配置文件
    - README.md
    - SUMMARY.md
  + zh-hans                 => 书籍的简体中文版专用目录
    - book.json                 => 简体中文版专用配置文件
    - README.md
    - SUMMARY.md
  + ja                      => 书籍的日文版专用目录
    - book.json                 => 日文版专用配置文件
    - README.md
    - SUMMARY.md
  + node_modules            => 所有 gitbook plugins 插件目录
  + _book                   => 自动生成的静态书籍目录
```

## LANGS.md
```
* [English](en)
* [中文](zh-hans)
* [日本語 (にほんご)](ja)
```

## GitBook-Plugins
由于绝大部分情况下各种不同语言会使用同一插件，所以将所有常见统一存放在根目录。

根目录下的 `book.json`:
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

这里主要记录了不同语言使用到的所有插件和配置，这里只需要通过 `gitbook install` 安装即可。

对于不同语言的书籍, 在各自的 `book.json` 中进行差异化的重写。

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

## 注意
`plugins` 字段是数组，因此各语言版本中的 `plugins` 字段内容会 **覆盖** 根目录中的内容。

`pluginsConfig` 字段是字典，因此各语言版本只需要在有需要改动的情况下做配置的修改，否则可以什么都不写，默认使用根目录中的 `pluginsConfig` 配置内容。

`gitbook build` 生成的静态书籍 `_book` 中，对于所有不同的语言，都会各自持有一份插件的拷贝。
也就是说对于 `advanced-emoji`插件，根目录有一份拷贝，3种语言各自有一份拷贝，一共是4分拷贝。这里其实是有优化空间的。

**结论**

在根目录的 `book.json` 填写所有的插件信息，统一安装管理。

在各个语言版本中，重写各自的信息，做到不同语言版本的差异化。




