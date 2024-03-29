const paypal = require('paypal-node-sdk');
require('../config');

const createSubscription = async (req, res, next) => {
    try {
        const billingPlanAttributes = {
            "description": "Month Subscription plan",
            "merchant_preferences": {
                "auto_bill_amount": "yes",
                "cancel_url": "http://www.cancel.com",
                "initial_fail_amount_action": "continue",
                "max_fail_attempts": "1",
                "return_url": "http://www.success.com",
                "setup_fee": {
                    "currency": "USD",
                    "value": "25"
                }
            },
            "name": "Testing1-Regular1",
            "payment_definitions": [
                {
                    "amount": {
                        "currency": "USD",
                        "value": "100"
                    },
                    "charge_models": [
                        {
                            "amount": {
                                "currency": "USD",
                                "value": "10.60"
                            },
                            "type": "SHIPPING"
                        },
                        {
                            "amount": {
                                "currency": "USD",
                                "value": "20"
                            },
                            "type": "TAX"
                        }
                    ],
                    "cycles": "0",
                    "frequency": "MONTH",
                    "frequency_interval": "1",
                    "name": "Regular 1",
                    "type": "REGULAR"
                },
                {
                    "amount": {
                        "currency": "USD",
                        "value": "20"
                    },
                    "charge_models": [
                        {
                            "amount": {
                                "currency": "USD",
                                "value": "10.60"
                            },
                            "type": "SHIPPING"
                        },
                        {
                            "amount": {
                                "currency": "USD",
                                "value": "20"
                            },
                            "type": "TAX"
                        }
                    ],
                    "cycles": "4",
                    "frequency": "MONTH",
                    "frequency_interval": "1",
                    "name": "Trial 1",
                    "type": "TRIAL"
                }
            ],
            "type": "INFINITE"
        };

        paypal.billingPlan.create(billingPlanAttributes, function (error, billingPlan) {
            if (error) {
                console.log(error);
                next(error);
            } else {
                console.log("Create Billing Plan Response");
                console.log(billingPlan);
                res.json(billingPlan);
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = createSubscription;