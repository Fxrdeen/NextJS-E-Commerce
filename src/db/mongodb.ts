import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://fardeen:Havind9123s@register-product.rtrbvqq.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
