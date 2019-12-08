import {Component} from "./../core/component.js";
import {apiService} from './../service/api.service.js';
import {renderStatistics} from "./../templates/stats.template.js";

export class StatsComponent extends Component {
  constructor(cls) {
    super(cls);
  }

  async getStatsData() {
    const statsData = await apiService.fetchPosts();
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', renderStatistics(statsData));
  }

  async addStatsData(data) {
    await apiService.createPost(data);
  }

}