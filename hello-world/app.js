// app.js
exports.lambdaHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};
