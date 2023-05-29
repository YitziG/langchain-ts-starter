import { PromptTemplate } from "langchain";

const prompt = PromptTemplate.fromTemplate(
  "What is a good name for a company that makes {product}?"
);
const responseB = await prompt.format({ product: "colorful socks" });
console.log({ responseB });