"use strict";
exports.__esModule = true;
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
var config = {
    development: {
        base_url: 'https://www.wowhead.com/',
        noreply_email: 'test@danielkoziara.pl',
        mail: {
            host: 'mail32.mydevil.net',
            port: 465,
            secure: true,
            auth: {
                user: 'test@danielkoziara.pl',
                pass: 'XmYmYJNRDMTqz3Y7KTfk'
            }
        }
    },
    production: {
        base_url: 'https://www.wowhead.com/',
        noreply_email: 'test@danielkoziara.pl',
        mail: {
            host: 'mail32.mydevil.net',
            port: 465,
            secure: true,
            auth: {
                user: 'test@danielkoziara.pl',
                pass: 'XmYmYJNRDMTqz3Y7KTfk'
            }
        }
    }
};
exports["default"] = config[environment];
