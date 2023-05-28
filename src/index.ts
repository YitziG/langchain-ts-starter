import { OpenAI } from "langchain"

// To enable streaming, we pass in `streaming: true` to the LLM constructor.
// Additionally, we pass in a handler for the `handleLLMNewToken` event.
const chat = new OpenAI({
  streaming: true
})

chat.callbackManager.handleLLMNewToken = async (token: string) => {
  // We can use this token to update the UI with the latest text.
  process.stdout.write(token);
}

await chat.call("Write me a song about sparkling water.");