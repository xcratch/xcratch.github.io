class AIExtension {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'ai_extension',
      name: 'AI Extension',
      color1: '#FF69B4',
      color2: '#FF1493',
      blocks: [
        {
          opcode: 'generateText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Generate text for [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'What is the weather like?'
            }
          }
        },
        {
          opcode: 'generateImage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Generate image from description [DESCRIPTION]',
          arguments: {
            DESCRIPTION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'A sunset over the ocean'
            }
          }
        },
        {
          opcode: 'askQuestion',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ask a question: [QUESTION]',
          arguments: {
            QUESTION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'What is your name?'
            }
          }
        },
        {
          opcode: 'generateResponse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Generate response for [INPUT]',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!'
            }
          }
        }
      ]
    };
  }

  generateText(args) {
    const text = args.TEXT.toLowerCase();
    const responses = {
      'what is the weather like?': 'The weather is sunny with a few clouds.',
      'how are you?': 'I am doing great, thank you!',
      default: 'Sorry, I don\'t understand that question.'
    };
    return responses[text] || responses.default;
  }

  generateImage(args) {
    const description = args.DESCRIPTION;
    // Симулируем генерацию изображения, например, с помощью внешнего API
    console.log(`Generating image based on description: ${description}`);
    return `https://placekitten.com/200/300?text=${encodeURIComponent(description)}`;
  }

  askQuestion(args) {
    const question = args.QUESTION.toLowerCase();
    // Простой симулятор ответов на вопросы
    const responses = {
      'what is your name?': 'I am an AI assistant.',
      'how old are you?': 'I am timeless!',
      default: 'I don\'t know the answer to that.'
    };
    return responses[question] || responses.default;
  }

  generateResponse(args) {
    const input = args.INPUT.toLowerCase();
    const responses = {
      'hello': 'Hello, how can I assist you today?',
      'bye': 'Goodbye! Have a great day!',
      default: 'Sorry, I didn\'t understand that.'
    };
    return responses[input] || responses.default;
  }
}
// Made by Distendo
Scratch.extensions.register(new AIExtension());
