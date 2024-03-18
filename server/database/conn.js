import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from '../config.js';

async function connect() {
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    try {
        mongoose.set('strictQuery', true);
        const db = mongoose.connect(getUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDb Connected");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; 
    }
}

export default connect;
