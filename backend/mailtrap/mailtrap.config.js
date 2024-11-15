import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_HOST,
  token: process.env.MAILTRAP_TOKEN,
  testInboxId: process.env.MAILTRAP_TESTINBOXID,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Troy",
};

