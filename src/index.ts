import { AgentExecutor, ChatAgent } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models";
import { SerpAPI } from "langchain/tools";

const tools = [
  new SerpAPI(process.env.SERP_API_KEY,{
    location: "Austin, Texas, United States",
    hl: "en",
    gl: "us",
  })
];

const agent = ChatAgent.fromLLMAndTools(new ChatOpenAI(), tools);

const executor = AgentExecutor.fromAgentAndTools({agent, tools});

console.log("Running executor...");

const response = await executor.run(
  "How many people live in the US as of 2023?"
);

console.log(response);