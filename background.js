var configs = [
[ "copy markdown link",     "[$LINKTEXT]($URL)" ],
[ "copy MediaWiki link",    "[$URL $LINKTEXT]" ],
[ "copy Textile link",      "\"$LINKTEXT\":$URL" ],
[ "copy JIRA link",         "[$LINKTEXT|$URL]" ],
[ "copy Tiki link",         "[$URL|$LINKTEXT]" ],
[ "copy Plaintext link",     "$LINKTEXT <$URL>" ]
]


configs.forEach(function( config, index ) {
    browser.contextMenus.create({
        // add index from configs to id, index needed for buildLink
        id: "copy-selection-link-clipboard-" + index.toString() ,
        title: config[0],
        contexts: ["selection"],
    });
});


browser.contextMenus.onClicked.addListener((info, tab) => {
    // get index nr from menu id text
    var configsId = parseInt( info.menuItemId.replace('copy-selection-link-clipboard-','') );

    if ( configsId >= 0 && configsId < configs.length ) {
        buildLink( configs[ configsId ][1] );
    };

    function buildLink( template ) {

            browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
            var hyperlink = template.replace("$LINKTEXT", info.selectionText ).replace("$URL", tabs[0].url );

            // clipboard-helper.js defines function copyToClipboard.
            const code = "copyToClipboard(" + JSON.stringify( hyperlink ) +  ");";
    
            browser.tabs.executeScript({
                code: "typeof copyToClipboard === 'function';",
            }).then((results) => {
                // The content script's last expression will be true if the function
                // has been defined. If this is not the case, then we need to run
                // clipboard-helper.js to define function copyToClipboard.
                if (!results || results[0] !== true) {
                    return browser.tabs.executeScript(tab.id, {
                        file: "clipboard-helper.js",
                    });
                }
            }).then(() => {
                return browser.tabs.executeScript(tab.id, {
                    code,
                });
            }).catch((error) => {
                // This could happen if the extension is not allowed to run code in
                // the page, for example if the tab is a privileged page.
                console.error("Failed to copy text: " + error);
            });
        });
    }
});