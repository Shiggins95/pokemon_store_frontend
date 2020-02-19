export const get = async url => {
  const response = await fetch(`${process.env.REACT_APP_API}${url}`);
  return response.ok ? await response.json() : { error: true, response: await response };
};
