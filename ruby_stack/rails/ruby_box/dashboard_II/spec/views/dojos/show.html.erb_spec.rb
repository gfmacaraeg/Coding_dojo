require 'rails_helper'

RSpec.describe "dojos/show", type: :view do
  before(:each) do
    @dojo = assign(:dojo, Dojo.create!(
      :branch => "Branch",
      :street => "Street",
      :city => "City",
      :state => "State"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Branch/)
    expect(rendered).to match(/Street/)
    expect(rendered).to match(/City/)
    expect(rendered).to match(/State/)
  end
end
