export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda! third test OK!"),
  };
  return response;
};
