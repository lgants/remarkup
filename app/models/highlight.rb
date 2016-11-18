class Highlight < ApplicationRecord
  belongs_to :speech
  belongs_to :user

  # def merge_overlapping_collection(collection)
  #   def collection_overlap?(l, e)
  #     e[0].between?(l.first, l.last) || e[1].between?(l.first, l.last)
  #   end
  #   def merge_overlaps(l, e)
  #     [[l.first, e.first].min, [l.last, e.last].max]
  #   end
  #
  #   collection.sort_by(&:first).inject([]) do |collection, element|
  #     if !collection.empty? && collection_overlap?(collection.last, element)
  #       new_element = merge_overlaps(collection.last, element)
  #       new_element != collection.last ? collection.push(new_element) : collection
  #     else
  #       collection.push(element)
  #     end
  #   end
  # end

  def add_snippet(snippet)
    snippets = JSON.parse(self.snippets)

    def merge_collection(collection, element)
      collection.concat([element])
    end

    def merge_overlapping_collection(collection)
      def collection_overlap?(l, e)
        e[0].between?(l.first, l.last) || e[1].between?(l.first, l.last)
      end

      def merge_overlaps(l, e)
        [[l.first, e.first].min, [l.last, e.last].max]
      end

      collection.sort_by(&:first).inject([]) do |collection, element|
        if !collection.empty? && collection_overlap?(collection.last, element)
          new_element = merge_overlaps(collection.last, element)
          new_element != collection.last ? collection.push(new_element) : collection
        else
          collection.push(element)
        end
      end
    end

    merged = merge_collection(snippets, snippet)
    new_snippets = merge_overlapping_collection(merged)
    self.update(snippets: new_snippets)

  end





end
