require 'factory_girl_rails'
require "rails_helper"

describe Highlight, '.transform_snippets' do

  before do
    @ind_1 = 10
    @ind_2 = 20
    @cur_snippet_0 = []
    @cur_snippet_1 = [[@ind_1, @ind_2]]


    @highlight_0 = Highlight.new(snippets: "#{@cur_snippet_0}")
    @highlight_1 = Highlight.new(snippets: "#{@cur_snippet_1}")

    # @user = User.new(id: 1)
    # @speech = Speech.new(id: rand(10..20))

    # @highlight_zero = Highlight.new(user_id: @user.id, snippets: "[]")
    # @highlight_one = Highlight.new(user_id: @user.id, snippets: "[[#{@index_first},#{@index_last}]]")
    # @snippet_collision_same = "[#{@index_first},#{@index_last}]"
    # @snippet_collision_greater = "[#{@index_first+1},#{@index_last+1}]"
    # @snippet_collision_less = "[#{@index_first-1},#{@index_last-1}]"
    # @snippet_collision_both_outside = "[#{@index_first-1},#{@index_last+1}]"
    # @snippet_collision_both_inside = "[#{@index_first+1},#{@index_last-1}]"
    # @snippet_greater = "[#{@index_last+1},#{@index_last+2}]"
    # @snippet_less = "[#{@index_first-2},#{@index_first-1}]"
    # @snippet_reversed = "[[#{@index_last},#{@index_first}]]"
  end


  context "returns correctly transformed snippets when new snippet indicie range" do

    context "outside current snippet indicie range" do
      it "less than" do
        new_snippet_b = [@ind_1-2, @ind_1-1]

        expect(@highlight_1.transform_snippets(new_snippet_b)).to eq(@cur_snippet_1.unshift(new_snippet_b))
      end

      it "greater than" do
        new_snippet_a = [@ind_2+1, @ind_2+2]

        expect(@highlight_1.transform_snippets(new_snippet_a)).to eq(@cur_snippet_1.push(new_snippet_a))
      end

    end


    it "intersects current snippet indicie range" do
      #both
    end

    it "new snippet indicie range encompasses current snippet indicie range" do
      #both
    end

    it "new snippet indicie range inside current snippet indicie range" do
      #both
    end

    it "new snippet indicie range outside current snippet indicie range" do
      new_snippet_a = [@ind_2+1, @ind_2+2]

      expect(@highlight_1.transform_snippets(new_snippet_a)).to eq(@cur_snippet_1.push(new_snippet_a))
      #less than current

      new_snippet_b = [@ind_1-2, @ind_1-1]

      expect(@highlight_1.transform_snippets(new_snippet_b)).to eq(@cur_snippet_1.push(new_snippet_b))

    end
  end
end
