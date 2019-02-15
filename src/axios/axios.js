import axios from "axios";

export default class api {
  static async getUser(username) {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
