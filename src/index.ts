import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { PromptTemplate } from "langchain";

dotenv.config();

const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const formattedPrompt = await prompt.format({
  product: "shoes",
});

const res = await model.call(formattedPrompt);
console.log(res);
