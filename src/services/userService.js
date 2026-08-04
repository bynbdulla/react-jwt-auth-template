const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    const data = await res.json();
    if (data.err) {
      console.log(data.err);
      throw new Error(data.err);
    }
    return data
    // if (data.token) {
    //   localStorage.setItem("token", data.token);
    //   return JSON.parse(atob(data.token.split(".")[1])).payload;
    // }
  } catch (err) {
    throw new Error(err);
  }
};
export { index };
