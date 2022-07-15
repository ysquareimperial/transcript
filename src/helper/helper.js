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
  export{
    _fetchApi,
   
  }