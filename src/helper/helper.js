export const apiURL = "http://localhost:34567";
const _fetchApi = (
    url,
    success = (f) => f,
    error = (f) => f,
    empty = (f) => f
  ) => {
 
    let actualURL = `${url}`;
    fetch(actualURL)
      .then((raw) => raw.json())
      .then((response) => {
        if (response) {
          success(response);
        } else {
          console.log("Empty response");
          empty();
        }
      })
      .catch((err) => {
        error(err);
      });
  };
  const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  // const { facilityId, username } = store.getState().auth.user;
  // data.facilityId = facilityId;
  // data.userId = username;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log(response);
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};
  export{
    _fetchApi,
    _postApi
  }