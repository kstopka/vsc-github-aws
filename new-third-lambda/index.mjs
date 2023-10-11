export const handler = async (event) => {
  // TODO implement

  console.log("333");
  console.log("333");
  console.log("44");
  console.log("555");

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda! third test OK 3"),
  };
  return response;
};
