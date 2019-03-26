export const getData = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response;
};

export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response;
};

export const deleteData = async url => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response;
};
