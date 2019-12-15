# Copy selected text as link in lightweight markup languages


[Browser addon](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons) to copy selected text as linktext with current URL as link in [lightweight markup languages](https://en.wikipedia.org/wiki/Lightweight_markup_language):
Configure your own flavoured language.

Examples Template:


|               | Template             | Result                                        |
| ------------- |:--------------------:| ---------------------------------------------:|
| markdown      | `[$LINKTEXT]($URL)`  | ```[established](http://www.example.org/)```  |
| markdown      | `[$LINKTEXT]($URL "$TITLE")`  | ```[established](http://example.org/ "Example Domain")```  |
| MediaWiki     | `[$URL $LINKTEXT]`   | ```[http://www.example.org/ established]```   |
| Textile       | `"$LINKTEXT":$URL`   | ```"established":http://www.example.org/```   |
| JIRA          | `[$LINKTEXT|$URL]`   | ```[established|http://www.example.org/]```   |
| Tiki          | `[$URL|$LINKTEXT]`   | ```[http://www.example.org/|established0```   |
| Plaintext     | `$LINKTEXT $URL`     | ```established <http://www.example.org/>```   |
| <Plaintext>   | `$LINKTEXT <$URL>`   | ```established <http://www.example.org/>```   |
| Your own      | `$LINKTEXT <$URL> - is send to you by klml`   | ```established <http://www.example.org/>  - is send to you by klml```   |


Available in [v1.1](https://github.com/klml/copytextandurl/tree/v1.1) (only markdown) for firefox [addons.mozilla.org copytextandurl/](https://addons.mozilla.org/en-US/firefox/addon/copytextandurl/)


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
