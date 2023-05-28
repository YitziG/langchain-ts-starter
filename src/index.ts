import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import {initializeAgentExecutor} from "langchain/agents";
import {Calculator, SerpAPI} from "langchain/tools";

dotenv.config();

const model = new OpenAI({ temperature: 0.9 });
const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: "Austin,Texas,United States",
    hl: "en",
    gl: "us",
  }),
  new Calculator(),
];

const executor = await initializeAgentExecutor(tools, model, 
   "zero-shot-react-description");
console.log("Loaded agent.")
const input = "What is today's date?";

console.log(`Executing with input "${input}"...`);

const result = await executor.call({ input: input });

console.log(`Got output ${result.output}`);