# Copy selected text as link in lightweight markup languages


[Browser addon](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons) to copy selected text as linktext with current URL as link in [lightweight markup languages](https://en.wikipedia.org/wiki/Lightweight_markup_language):

* markdown ```[established](http://www.example.org/)```
* MediaWiki ```[http://www.example.org/ established]```
* Textile ```"established":http://www.example.org/```
* JIRA ```[established|http://www.example.org/]```
* Tiki ```[http://www.example.org/|established0```
* Plaintext ```established <http://www.example.org/>```



Available for firefox [addons.mozilla.org copytextandurl/](https://addons.mozilla.org/en-US/firefox/addon/copytextandurl/)


Copied from [webextensions-examples context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types)

## Todo

* [Shortcut](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
* config for other lightweight markup languages
* icon

## Other and similar addons

Other and similar addons, copying a selected text and the current URL as markdown link.

[Copy Selection as Markdown](https://addons.mozilla.org/de/android/addon/copy-selection-as-markdown/)

```
[Example Domain](http://www.example.org/)

established
```

Addons with another focus, _copying the current URL with its pagetitle_ or _copys links in a page as markdown links_.

* [Copy as Markdown](https://addons.mozilla.org/de/android/addon/copy-as-markdown/)
* [Copy Link/Tab Name and URL ](https://addons.mozilla.org/en-US/firefox/addon/copy-linktab-name-and-url/)
