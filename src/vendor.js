/* This file contains references to the vendor libraries we're using in the project. This is used
by webpack in the production build only*.A seperate bundle is useful since it is unlikely to
change as often as the application's code. So all the libraries we reference here will be written
to vendor.js so they can be cached until on of them change. So basically, this avoids customers
having to download a huge JS file anytime a line of code changes.
They only have to download vendor.js when a vender library changes which should be less fequesnt.
Any files that arent referenced here will be bundled into main.js for the production build. */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
