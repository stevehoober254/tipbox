const paypal = require('paypal-node-sdk');
require('../config');


const listSubscription = async(req,res, next) => {
    try {
        const list_billing_plan = {
            'status': 'ACTIVE',
            'page_size': 5,
            'page': 1,
            'total_required': 'yes'
        };
        
        paypal.billingPlan.list(list_billing_plan, function (error, billingPlan) {
            if (error) {
                next(error);
            } else {
                console.log("List Billing Plans Response");
                console.log(JSON.stringify(billingPlan));
                res.json(billingPlan);
            }
        });
        
    } catch (error) {
        next(error);
    }
}

module.exports =  listSubscription;