const paypal = require('paypal-node-sdk');
require('../config');

const updateSubscription = async (req, res, next) => {
    try {
        const billingPlanId = req.params.id;

        const billing_plan_update_attributes = [
            {
                "op": "replace",
                "path": "/",
                "value": {
                    "state": "ACTIVE"
                }
            }
        ];

        paypal.billingPlan.get(billingPlanId, function (error, billingPlan) {
            if (error) {
                console.log(error);
                next(error);
            } else {
                console.log("Get Billing Plan");
                console.log(JSON.stringify(billingPlan));

                paypal.billingPlan.update(billingPlanId, billing_plan_update_attributes, function (error, response) {
                    if (error) {
                        console.log(error.response);
                        next(error);
                    } else {
                        paypal.billingPlan.get(billingPlanId, function (error, billingPlan) {
                            if (error) {
                                console.log(error.response);
                                next(error);
                            } else {
                                console.log(billingPlan.state);
                                res.json(billingPlan)
                            }
                        });
                    }
                });
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = updateSubscription;