import { STS } from "@aws-sdk/client-sts";

const client = new STS();
client.getCallerIdentity().then(console.log);
