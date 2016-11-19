require 'factory_girl_rails'
require "rails_helper"

describe Highlight, '.add_snippet' do

  before do
    snippet_first = rand(10..20)
    snippet_last = rand(30..40)
    @user = User.new(id: rand(10..20))
    # @speech = Speech.new(id: rand(10..20))
    @highlight_zero = Highlight.new(user_id: @user.id, snippets: "[]")
    @highlight_one = Highlight.new(user_id: @user.id, snippets: "[[#{snippet_first},#{snippet_last}]]")
    @snippet_collision_same = "[[#{snippet_first},#{snippet_last}]]"
    @snippet_collision_greater = "[[#{snippet_first+1},#{snippet_last+1}]]"
    @snippet_collision_less = "[[#{snippet_first-1},#{snippet_last-1}]]"
    @snippet_collision_both_outside = "[[#{snippet_first-1},#{snippet_last+1}]]"
    @snippet_collision_both_inside = "[[#{snippet_first+1},#{snippet_last-1}]]"
    @snippet_greater = "[[#{snippet_last+1},#{snippet_last+2}]]"
    @snippet_less = "[[#{snippet_first-2},#{snippet_first-1}]]"
  end

  # still valid if snippet[0] > snippet[1]

  context "tests for helper method #old_snippets" do
    it "Highlight to snippets" do
      @empty_snippets.snippets == "[]"
    end
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
