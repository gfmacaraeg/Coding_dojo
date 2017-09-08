require 'rails_helper'

RSpec.describe "dojos/index", type: :view do
  before(:each) do
    assign(:dojos, [
      Dojo.create!(
        :branch => "Branch",
        :street => "Street",
        :city => "City",
        :state => "State"
      ),
      Dojo.create!(
        :branch => "Branch",
        :street => "Street",
        :city => "City",
        :state => "State"
      )
    ])
  end

  it "renders a list of dojos" do
    render
    assert_select "tr>td", :text => "Branch".to_s, :count => 2
    assert_select "tr>td", :text => "Street".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
    assert_select "tr>td", :text => "State".to_s, :count => 2
  end
end
