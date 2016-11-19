class Highlight < ApplicationRecord
  belongs_to :speech
  belongs_to :user

  def add_snippet(new_snippet)
    old_snippets = JSON.parse(self.snippets)

    def merge_snippets(collection, element)
      collection.concat([element])
    end

    def merge_overlapping_collection(collection)
      def snippets_overlap?(l, e)
        e[0].between?(l.first, l.last) || e[1].between?(l.first, l.last)
      end

      def combine_snippets(l, e)
        [[l.first, e.first].min, [l.last, e.last].max]
      end

      collection.sort_by(&:first).inject([]) do |collection, element|
        if !collection.empty? && snippets_overlap?(collection.last, element)
          collection[0...-1].push(combine_snippets(collection.last, element))
        else
          collection.push(element)
        end
      end
    end

    new_snippets = merge_overlapping_collection(merge_snippets(old_snippets, new_snippet))
    self.update(snippets: new_snippets)

  end
end
