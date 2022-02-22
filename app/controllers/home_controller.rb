class HomeController < ApplicationController
  def index
    @quick_search_terms = [
      'Starting soon',
      'Today',
      'Tomorrow',
      'This week',
      'Online',
      'In person',
      'Trending near you',
      ]
  end
end
