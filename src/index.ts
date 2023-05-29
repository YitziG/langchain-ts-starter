import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from "langchain/prompts";

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate("You are a helpful assistant that translates {input_language} to {output_language}."),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

const response = await chatPrompt.formatPromptValue({
  input_language: "English",
  output_language: "French",
  text: "Hello, how are you?",
});
const messages = response.toChatMessages();

console.log({messages});