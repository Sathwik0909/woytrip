import dotenv from "dotenv";

dotenv.config();

const allowedOrigins = [
  process.env.CLIENT_PROD_URL, // Production frontend domain
  ...(process.env.NODE_ENV !== "production" ? [process.env.CLIENT_DEV_URL] : []), // Include dev URL only in dev
].filter(Boolean); // Remove any undefined or empty values

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server, curl, or tools with no origin
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Blocked by CORS: ${origin} not allowed`));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 86400, // 24 hours
};

export const corsLogger = {
  logAllowedOrigins: () => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Allowed CORS origins:");
      allowedOrigins.forEach((origin) => console.log(`- ${origin}`));
    }
  },
};
