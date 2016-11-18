class Highlight < ApplicationRecord
  belongs_to :speech
  belongs_to :user


  def check_indicie_order(e)
    e[1] > e[0] ? [e[0],e[1]] : [e[1],e[0]]
  end

  # merge_cur_snippets_new_snippets
  def merge_collection(collection, element)
    collection.concat(element)
  end

  def collection_overlap?(l, e)
    e[0].between?(l.first, l.last) || e[1].between?(l.first, l.last)
  end

  def merge_overlaps(l, e)
    [[l.first, e.first].min, [l.last, e.last].max]
  end

  def merge_overlapping_collection(collection)
    collection.sort_by(&:first).inject([]) do |collection, element|
      if !collection.empty? && collection_overlap?(collection.last, element)
        new_element = merge_overlaps(collection.last, element)
        new_element != collection.last ? collection.push(new_element) : collection
      else
        collection.push(element)
      end
    end
  end





end
