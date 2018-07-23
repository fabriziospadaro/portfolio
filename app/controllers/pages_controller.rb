class PagesController < ApplicationController
  def home
    @skills = [
      {"C# 85" => "csharp"},
      {"Unity3D 90" => "unity"},
      {"JS 60" => "js"},
      {"Ruby 75" => "ruby"},
      {"CSS 55" => "css"},
      {"Rails 65" => "ruby"},
      {"HTML 80" => "html"},
      {"Bad_Jokes 114" => "jokes"}
    ]
  end

  def projects

  end



end
