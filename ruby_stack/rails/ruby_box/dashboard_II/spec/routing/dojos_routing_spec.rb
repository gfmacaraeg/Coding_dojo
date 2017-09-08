require "rails_helper"

RSpec.describe DojosController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/dojos").to route_to("dojos#index")
    end

    it "routes to #new" do
      expect(:get => "/dojos/new").to route_to("dojos#new")
    end

    it "routes to #show" do
      expect(:get => "/dojos/1").to route_to("dojos#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/dojos/1/edit").to route_to("dojos#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/dojos").to route_to("dojos#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/dojos/1").to route_to("dojos#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/dojos/1").to route_to("dojos#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/dojos/1").to route_to("dojos#destroy", :id => "1")
    end

  end
end
