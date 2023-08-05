# pwa-text-editor

Challenge 19

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This week, I was tasked in creating an application to demonstrate and hone progressive web application abilities. Its goal was to gain a better understanding of what the React JavaScript library is doing behind the scenes. This application focuses on four major themes. One is to configure the webpack.config.js file with the required workbox plugins for service worker and manifest files, as well as to include CSS and babel loader (which allows CSS and JavaScript to compile on devices running older legacy code, such as ES5). Two, integrating asset caching within the src-sw.js file to provide offline capabilities to the application. Three, configure the database such that data from the IndexedDB may be added, changed, and retrieved. Four, we'll add event handlers to our install button so that the app may be installed to each user's own application stack and utilized offline.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Installation

Users may access and utilize the application in a browser by accessing the deployed application at https://my-pwa-text-editor-week-19-9be97db16d1d.herokuapp.com/.
* You can clone/ fork this repository at [Link](https://github.com/slmov215/pwa-text-editor)

## Usage

The program is simple to use; simply go to the live [URL](https://my-pwa-text-editor-week-19-9be97db16d1d.herokuapp.com/) and start taking notes right away! Users will also see an install option in the nav bar, allowing them to download and use the program for offline usage. Saving notes is handled automatically by the IndexedDB; all that is necessary is for the user to close the window, and the notes will be saved whether the program is used online or offline.

![JATE Screenshoot](https://github.com/slmov215/pwa-text-editor/assets/127278005/84e2a29f-8cce-4a47-bff2-86ab8efa0e60)

![JATE Screenshot 2](https://github.com/slmov215/pwa-text-editor/assets/127278005/223082d0-d37e-4427-a4bc-04bf1ab1c5c9)



## License
[MIT License](https://opensource.org/licenses/MIT)

## Questions

[Review my other projects on GitHub.](https://www.github.com/slmov215)

[Email me](mailto:slmov215@gmail.com)
