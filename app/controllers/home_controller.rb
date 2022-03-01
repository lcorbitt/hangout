class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

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
