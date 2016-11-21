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
  end

  context "returns transformed snippets when new snippet index range is" do
    it "initial snippet added" do
      new_snippet = [@ind_1, @ind_2]
      expect(@highlight_0.transform_snippets(new_snippet)).to eq([[@ind_1, @ind_2]])
    end

    it "beyond lower boundary of current snippet index range" do
      new_snippet = [@ind_1-2, @ind_1-1]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq(@cur_snippet_1.unshift(new_snippet))
    end

    it "beyond upper boundary of current snippet index range" do
      new_snippet = [@ind_2+1, @ind_2+2]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq(@cur_snippet_1.push(new_snippet))
    end

    it "intersects lower boundary of current snippet index range" do
      new_snippet = [@ind_1-1, @ind_1+1]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq([[@ind_1-1, @ind_2]])
    end

    it "intersects upper boundary of current snippet index range" do
      new_snippet = [@ind_2-1, @ind_2+1]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq([[@ind_1, @ind_2+1]])
    end

    it "encompasses current snippet index range" do
      new_snippet = [@ind_1-1, @ind_2+1]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq([[@ind_1-1, @ind_2+1]])
    end

    it "encompassed in current snippet index range" do
      new_snippet = [@ind_1+1, @ind_2-1]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq([[@ind_1, @ind_2]])
    end

    it "identical to current snippet index range" do
      new_snippet = [@ind_1, @ind_2]
      expect(@highlight_1.transform_snippets(new_snippet)).to eq([[@ind_1, @ind_2]])
    end
  end
end
