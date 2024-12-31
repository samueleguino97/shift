import { betterAuth } from "better-auth";
import { admin, organization, phoneNumber } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "./db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  plugins: [
    admin(),
    organization(),
    nextCookies(),
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, request) => {
        // Implement sending OTP code via SMS
        console.log("sendOTP", phoneNumber, code, request);
      },
    }),
  ],
});
