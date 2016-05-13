# GitBook Markdown
___

### Headers
# This is an `<h1>` tag
## This is an `<h2>` tag
### This is an `<h3>` tag


### Emphasis
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
_You **can** combine them_


### Lists
Unordered
* Item 1
* Item 2
* Item 2a
* Item 2b

Ordered
1. Item 1
2. Item 2
3. Item 3
* Item 3a
* Item 3b


### Images
![img](../cover_small.jpg)


### Links
[GitHub](http://github.com)


### Blockquotes
As Kanye West said:
> We're living the future so
> the present is our past.


### Footnote
hello[^hello]


### Tables
| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |


### Inline code
I think you should use an`<addr>` element here instead.


### Code Block && Syntax highlighting
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```


### [gitbook-plugin-todo](https://plugins.gitbook.com/plugin/todo)
- [x] this is a complete item
- [ ] this is an incomplete item


### [gitbook-plugin-advanced-emoji](https://plugins.gitbook.com/plugin/advanced-emoji)
:bowtie:
:smile:
:laughing:
:blush:
:smiley:
:relaxed:
:smirk:
:heart_eyes:
:kissing_heart:
:kissing_closed_eyes:
:flushed:
:older_woman:
:older_man:
:person_with_blond_hair:
:man_with_gua_pi_mao:

> [emoji-cheat-sheet](http://www.emoji-cheat-sheet.com/)


### [gitbook-plugin-mermaid-compat](https://plugins.gitbook.com/plugin/mermaid-compat)
```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```


### [gitbook-plugin-kaTex](https://plugins.gitbook.com/plugin/katex)
Inline math: $$\int_{-\infty}^\infty g(x) dx$$

Block math:
$$
\int_{-\infty}^\infty g(x) dx
$$


### [gitbook-plugin-emphasize](https://plugins.gitbook.com/plugin/emphasize)
This text is {% em %}highlighted !{% endem %}

This text is {% em %}highlighted with **markdown**!{% endem %}

This text is {% em type="green" %}highlighted in green!{% endem %}

This text is {% em type="red" %}highlighted in red!{% endem %}

This text is {% em color="#ff0000" %}highlighted with a custom color!{% endem %}


### [gitbook-plugin-chart](gitbook-plugin-chart)
{% chart %}
{
    chart: {
        // NOT need to specified `renderTo` here
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
}
{% endchart %}


[^hello]: hi
