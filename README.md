# Acme Open In extension

This is a Chrome extension used to open web resources with
existing Solid Apps.

In the `Options` section of the plugin you can configure
which Solid apps you would like to use in a context menu.
E.g. you can configure apps for editing files, file browsing,
setting permisions and much more. If a Solid App can be
triggered by opening a URL, it can be used in this extension.

The defined context menus are available on every page, link
and image.

## Install

```
npm install
npm run build
```

A new extension is now available in the `public` folder.

Open your `chrome://extensions` and set it into `Developer` mode.

`Load unpacked` the `public` folder.

Check the `Options` menu of the new extension and you are set.

## Usage

<img src="https://github.com/phochste/AcmePlugin/blob/main/documentation/context_menu.png?raw=true" width="350" alt="Context Menu"><br>
<i>Context menu for each link and page, showing the Edit, Open and Permissions
links that are available for the current context (a link on a webpage).</i>

<img src="https://github.com/phochste/AcmePlugin/blob/main/documentation/plugin_options.png?raw=true" width="350" alt="Options Menu"><br>
<i>Plugin options menu, adding a new Upload menu item with a URL template.</i>

### Configuration

Add context menu items to your Acme Open In extension. The Title should be a title for a menu item such as _Open..._, _Edit..._ The URL should point to an application you wan to open. Use the `{resource}` template to fill in the current link, image, page URL that is in context.

Some examples:

- _Open..._ `https://otto-aa.github.io/solid-filemanager/?url={resource}`
- _Edit..._ `https://solideditor.patrickhochstenbach.net/?resource={resource}`
- _Permissions..._ `https://waceditor.patrickhochstenbach.net/?resource={resource}`

A _Guard_ is a method to restrict when these context menu items appear. There are two types of guards:

- [document~_URLPattern_] - only show the menu item when the current page matches a URLPattern.
- [target~_URLPattern_] - only show the menu item when the context link matches a URLPattern.

and

- _URLPattern_ - is a wildcard pattern such as 'https://*.google.com/foo*bar'

E.g. Only add a "Test..." context menu when the current page is a GitHub page:

- _Test...[document~https://github.com/*]_ http://foo.bar/?url={resource}

## Development

### How to create your own extension

See: https://maurogarcia.dev/maurogarcia.dev/posts/how-to-build-your-next-chrome-extension-with-svelte/