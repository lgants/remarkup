require 'factory_girl_rails'
require "rails_helper"

describe Highlight, '.transform_snippets' do

  before do
    @a = 1
    @b = 2
    @c = 3
    @d = 4
    @e = 5
    @index_last = 6
    @f = 7
    @g = 8

    @user = User.new(id: 1)
    # @speech = Speech.new(id: rand(10..20))
    @highlight_zero = Highlight.new(user_id: @user.id, snippets: "[]")
    @highlight_one = Highlight.new(user_id: @user.id, snippets: "[[#{@index_first},#{@index_last}]]")
    @snippet_collision_same = "[#{@index_first},#{@index_last}]"
    @snippet_collision_greater = "[#{@index_first+1},#{@index_last+1}]"
    @snippet_collision_less = "[#{@index_first-1},#{@index_last-1}]"
    @snippet_collision_both_outside = "[#{@index_first-1},#{@index_last+1}]"
    @snippet_collision_both_inside = "[#{@index_first+1},#{@index_last-1}]"
    @snippet_greater = "[#{@index_last+1},#{@index_last+2}]"
    @snippet_less = "[#{@index_first-2},#{@index_first-1}]"
    # @snippet_reversed = "[[#{@index_last},#{@index_first}]]"
  end


  context "returns correctly transformed snippets when" do


    it "new snippet indicie range intersects current snippet indicie range" do
      #both
    end

    it "new snippet indicie range encompasses current snippet indicie range" do
      #both
    end

    it "new snippet indicie range inside current snippet indicie range" do
      #both
    end

    it "new snippet indicie range outside current snippet indicie range" do
      #greater than greater
      expect(@highlight_one.transform_snippets(@snippet_less)).to eq([])
      #less than current
    end
  end




  context "tests for helper method #old_snippets" do
    it "returns snippet string from Highlight instance" do
      expect(@highlight_zero.snippets).to eq("[]")
      expect(@highlight_one.snippets).to eq("[[#{@index_first},#{@index_last}]]")
    end

    # it "returns array object value" do
    #   expect(@highlight_zero.add_snippet([1,2]).old_snippets).to eq([])
    #   expect(@highlight_one.add_snippet([1,2]).old_snippets).to eq([[index_first,index_last]])
    # end


  end

  context "tests for helper method #merge_snippets" do
    it "is valid if start indicie greater than end indicie" do
    end
  end

  context "tests for method #merge_overlapping_snippets" do

    context "tests for helper method #snippets_overlap?" do
      it "is valid if start indicie greater than end indicie" do
      end
    end

    context "tests for helper method #combine_snippets" do
      it "is valid if start indicie greater than end indicie" do
      end
    end

    it "persists update to highlight object" do

    end
  end

end


# def add_snippet(new_snippet)
#   old_snippets = JSON.parse(self.snippets)
#
#   def merge_snippets(collection, n)
#   end
#
#   def merge_overlapping_snippets(collection)
#     def snippets_overlap?(l, n)
#     end
#
#     def combine_snippets(l, n)
#     end
#
#     collection.sort_by(&:first).inject([]) do |result, snippet|
#       if !result.empty? && snippets_overlap?(result.last, snippet)
#         result[0...-1].push(combine_snippets(result.last, snippet))
#       else
#         result.push(snippet)
#       end
#     end
#   end
#
#   self.update(snippets: merge_overlapping_snippets(merge_snippets(old_snippets, new_snippet)))
#
# end
