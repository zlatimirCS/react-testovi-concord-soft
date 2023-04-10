// domain/.netlify/functions/hello

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: 'Hello World',
  };
}
