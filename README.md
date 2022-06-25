# AcmePlugin

This is a Chrome Extension used to open web resources with
existing Solid Apps.

In the `Options` section of the plugin you can configure
which Solid apps you would like to use in a context menu.
E.g. you can configure apps for editing files, file browsing,
setting permisions and much more. If a Solid App can be
triggered by opening a URL, it can be used in this extension.

The defined context menus are available on every page, link
and image.

## Usage

```
npm install
npm run build
```

A new extension is now available in the `public` folder.

Open your `chrome://extensions` and set it into `Developer` mode.

`Load unpacked` the `public` folder.

Check the `Options` menu of the new extension and you are set.

### How to create your own extension

See: https://maurogarcia.dev/maurogarcia.dev/posts/how-to-build-your-next-chrome-extension-with-svelte/