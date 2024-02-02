"use server";
import clientPromise from "./mongodb";
export async function getProd() {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const products = await db.collection("formdatas").find({}).toArray();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}
