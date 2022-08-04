import http from "../http-common";
class PlayersDataService  {
  getAll() {
    return http.get("/Players");
  }
  get(id) {
    return http.get(`/Players/${id}`);
  }
  create(data) {
    return http.post("/Players", data);
  }
  update(id, data) {
    return http.put(`/Players/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Players/${id}`);
  }
  deleteAll() {
    return http.delete(`/Players`);
  }
  findByLastName(lastName) {
    return http.get(`/Players?lastName=${lastName}`);
  }
}
export default new PlayersDataService();
