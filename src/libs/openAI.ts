import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_APP_TOKEN,
  dangerouslyAllowBrowser: true
});


export default openai