import { PromptTemplate } from "langchain";
import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from "langchain/prompts";

export const run = async () => {
  const prompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "You are a helpful assistant that translates {input_language} to {output_language}."),
    HumanMessagePromptTemplate.fromTemplate("{text}"),
  ]);

  const response = await prompt.formatPromptValue({
    input_language: "English",
    output_language: "French",
    text: "Hello, how are you?",
  });

  const responseString = response.toString();
  console.log(responseString);
}

run();