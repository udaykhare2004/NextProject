// app/lib/write-client.ts
import "server-only";  // This is valid in the app directory
import { createClient } from "next-sanity";

// Access environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = '2021-10-21';
const token = process.env.SANITY_WRITE_TOKEN; // This is server-side only


// Create and export your Sanity client
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
});

export default writeClient;