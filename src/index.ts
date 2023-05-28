import { ChatOpenAI } from "langchain/chat_models";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  temperature: 0
});

const response = await chat.call([
  new SystemChatMessage(
    "You are a helpful assistant who helps people translate sentences into Spanish."
  ),
  new HumanChatMessage("Translate this sentence: 'I am a student.'")
]);

console.log(response);