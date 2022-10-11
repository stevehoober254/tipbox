const paypal = require('paypal-node-sdk');

const client = {
    'mode': 'sandbox',
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
};

paypal.configure(client);

module.export = paypal;