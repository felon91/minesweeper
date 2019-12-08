class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url, {
        method: 'post',
        body: JSON.stringify(post),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return useRequest(request);
    } catch (e) {
      console.error(e);
    }

  }

  async fetchPosts() {
    try {
      const request = new Request(this.url, {
        method: 'get'
      });
      return useRequest(request);
    }
    catch (e) {
      console.error(e);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(this.url, {
        method: 'get'
      });
      return useRequest(request);
    }
    catch (e) {
      console.error(e);
    }
  }

}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService('/api/stats');