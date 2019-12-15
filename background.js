var getting_description = browser.storage.sync.get('description');
getting_description.then((res) => {
    browser.contextMenus.create({
        id: "copy-selection-link-clipboard",
        title: res.description,
        contexts: ["selection"],
    });
});

browser.contextMenus.onClicked.addListener((info, tab) => {

    var getting_template = browser.storage.sync.get('template');
    getting_template.then((res) => {
        buildLink( res.template )
    });

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