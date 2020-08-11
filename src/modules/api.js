const request = async (url, options = {}) => {
  const response = await fetch(url, options);

  return await response.json();
};

export class Api {
  static async getProjects() {
    const { data } = await request('./json/get-projects.json');
    return data;
  }

  static async getTasks(id) {
    const { data } = await request(`./json/get-projects-tasks_${id}.json`);
    return data;
  }
}
