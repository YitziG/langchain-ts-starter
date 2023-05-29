import { LLMChain } from "langchain";
import { ChatOpenAI } from "langchain/chat_models";
import { 
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate
 } from "langchain/prompts";

 const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant who helps people translate sentences from {input_language} to {output_language}."
    ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
 ]);

const chat = new ChatOpenAI({
  temperature: 0
})

const chain = new LLMChain({
  prompt: translationPrompt,
  llm: chat,
});

const response = await chain.call({
  input_language: "English",
  output_language: "French",
  text: "Hello, how are you?"
});

console.log(response)