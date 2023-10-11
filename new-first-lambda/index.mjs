export const handler = async (event) => {
  // TODO implement

  const { name } = event;

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello ${name}!`),
  };
  return response;
};
