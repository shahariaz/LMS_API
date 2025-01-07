import { Redis } from "ioredis";
import { config } from "./config";
const redisClient = new Redis(config.REDIS_URI);
export default redisClient;
