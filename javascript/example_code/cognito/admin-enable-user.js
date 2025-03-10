/* Sample code to admin enable user from Cognito SDK as an administrator.*/

// snippet-start:[cognito.JavaScript.admin-enable-user-v2]
const aws = require('aws-sdk');
/*Initializing CognitoIdentityServiceProvider from AWS SDK JS*/
const cognito = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
});

const USERPOOLID = "your Cognito User Pool ID";

exports.handler = async (event, context) => {
    const EMAIL = event.email;
    const cognitoParams = {
        UserPoolId: USERPOOLID,
        Username: EMAIL
    };

    let response = await cognito.adminEnableUser(cognitoParams).promise();
    console.log(JSON.stringify(response, null, 2));
}
// snippet-end:[cognito.JavaScript.admin-enable-user-v2]