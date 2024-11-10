import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

// Check if env for mongodb exist
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
// Mongo client Options
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Development Mode
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect().catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      throw err;
    });
  }
  clientPromise = globalWithMongo._mongoClientPromise;
}
// Production Mode
else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  });
}

export const connectMongoose = async () => {
  await clientPromise; // Wait for MongoClient to connect
  if (mongoose.connection.readyState === 0) {
    // If Mongoose is not connected, create a new Mongoose connection
    await mongoose.connect(uri);
  }
};

export default clientPromise;
