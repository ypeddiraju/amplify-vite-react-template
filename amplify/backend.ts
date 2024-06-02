import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { myLambdaSes } from './my-lambda-ses/resource';

defineBackend({
  auth,
  data,
  myLambdaSes,
});
