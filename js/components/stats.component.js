import {Component} from "./../core/component.js";
import {apiService} from './../service/api.service.js';
import {renderStatistics} from "./../templates/stats.template.js";

let statsData = [];

export class StatsComponent extends Component {
  constructor(cls) {
    super(cls);
  }

  async getStatsData() {
    statsData = await apiService.fetchPosts();
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', renderStatistics(statsData));
  }

  async addStatsData(data) {
    const stat = await apiService.createPost(data);
    statsData.push(stat);
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', renderStatistics(statsData));
  }

}