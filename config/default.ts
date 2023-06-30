const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.64dohhe.mongodb.net/?retryWrites=true&w=majority`,
    env: "development",
};