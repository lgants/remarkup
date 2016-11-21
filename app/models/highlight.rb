class Highlight < ApplicationRecord
  belongs_to :speech
  belongs_to :user

  def transform_snippets(new_snippet)
    def old_snippets
      JSON.parse(self.snippets)
    end
    def sort_indices(n)
      n[1] > n[0] ? n : [n[1], n[0]]
    end
    def merge_snippets(arr, n)
      arr.push(n)
    end

    def merge_overlapping_snippets(arr)
      def snippets_overlap?(l, n)
        n[0].between?(l[0], l[1]) || n[1].between?(l[0], l[1])
      end
      def combine_snippets(l, n)
        [[l[0], n[0]].min, [l[1], n[1]].max]
      end
      arr.sort_by(&:first).inject([]) do |result, snippet|
        if !result.empty? && snippets_overlap?(result[-1], snippet)
          result[0...-1].push(combine_snippets(result[-1], snippet))
        else
          result.push(snippet)
        end
      end
    end

    merge_overlapping_snippets(merge_snippets(old_snippets, sort_indices(new_snippet)))
  end
end
