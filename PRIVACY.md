# Acme Open In Privacy Policy

This privacy policy describes what kind of data the extension has access to when an user is using the extension, and what data that is stored by the extension.

## Data and information accessible by the extension

One of the main features of the extension is providing a configurable context 
menu of links to extenal applications that a use wishes to open a link, image 
or page in.

The way this is implemeted is by creating a local configuration file in which
the user can provide a list of new context menu items and URL-s that should
be opened when a context menu is selected.

What context menu items to show can be filtered by a _Guard_ which is a wildcard
that expresses which links, images and pages get a context menu.

The source code for the extension is fully open source and available at:

https://github.com/phochste/AcmePlugin

## Data stored by the extension

The extension does not collect or store any personal information about the users of the extension.

The only data that is stored are the settings that is used to configure the extension's functionality. This is configured through the extension's options page.

This includes the following data:

- The list of search engine urls that the user adds to the extension
- The names of context menu items
- The guard wildcard expression to use to filter which links, images, pages get a context menu

## Where the data is stored

The settings are stored using the web browser's standard storage mechanism that is provided by the web browser for extensions to store data.

Excacly where the data is stored will depend on your web browser vendor and version, but generally the data is stored on you local hard drive. Please consult you browser vendor's documentation to learn excacly where the data is stored.

No other storage mechanisms are used.
