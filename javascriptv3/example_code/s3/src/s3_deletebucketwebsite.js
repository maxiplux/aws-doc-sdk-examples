/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-static-web-host.html.

Purpose:
s3_deletebucketwebsite.js demonstrates how to delete the website configuration} from an Amazon S3 bucket.

Inputs (replace in code):
- BUCKET_NAME

Running the code:
nodes3_deletebucketwebsite.js
 */
// snippet-start:[s3.JavaScript.website.deleteBucketWebsiteV3]

// Import required AWS SDK clients and commands for Node.js.

import { DeleteBucketWebsiteCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js"; // Helper function that creates an Amazon S3 service client module.

// Create the parameters for calling
export const bucketParams = { Bucket: "BUCKET_NAME" };

export const run = async () => {
  try {
    const data = await s3Client.send(new DeleteBucketWebsiteCommand(bucketParams));
    return data; // For unit tests.
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[s3.JavaScript.website.deleteBucketWebsiteV3]
// For unit testing only.
// module.exports ={run, bucketParams};
