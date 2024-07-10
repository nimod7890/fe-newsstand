const BASE_URL = "http://localhost:3001";

/** https://demirels-organization.gitbook.io/javascript-tutorial/fetch-wrapper */
class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = { "Content-Type": "application/json" };
  }

  async get(url) {
    const response = await fetch(`${this.baseUrl}${url}`, { headers: this.headers });
    return response.json();
  }
}

const fetchWrapper = new FetchWrapper(BASE_URL);

export default fetchWrapper;
