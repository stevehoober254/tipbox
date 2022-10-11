const paypal = require('paypal-node-sdk');
require('../config');

const getSubscription = async(req,res, next) => {
    try {
        const billingPlanId = req.params.id;

        paypal.billingPlan.get(billingPlanId, function (error, billingPlan) {
            if (error) {
                console.log(error);
                next(error);
            } else {
                console.log("Get Billing Plan");
                res.json(billingPlan);
            }
        });
        
    } catch (error) {
        next(error);
    }
}

module.exports =  getSubscription;