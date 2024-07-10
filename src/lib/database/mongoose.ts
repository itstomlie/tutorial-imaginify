import mongoose, { Mongoose } from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!mongodbUrl) {
    throw new Error("No mongodb url found");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(mongodbUrl, {
      dbName: "tutorial-imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
