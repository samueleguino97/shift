import { createAuthClient } from "better-auth/react";
import {
  adminClient,
  phoneNumberClient,
  organizationClient,
} from "better-auth/client/plugins";

const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
  plugins: [phoneNumberClient(), adminClient(), organizationClient()],
});
export default authClient;
