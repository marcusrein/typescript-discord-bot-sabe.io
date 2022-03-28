import { Client, ClientOptions } from "discord.js";
// import { token } from "src/secret_token";
import ready from "./listeners/ready";

const token = "OTU3OTU1OTkzNDM2ODQ0MDc0.YkGUCg.DHwmeDeKvyT6laeRLUfq7Dxx_d4";

console.log("Bot is starting...");

const client = new Client({
	intents: [],
});

ready(client);

client.login(token);
console.log(client);
