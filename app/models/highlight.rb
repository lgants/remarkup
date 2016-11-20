class Highlight < ApplicationRecord
  belongs_to :speech
  belongs_to :user

=begin
  Upon 'priming' the site to record highlights, an id is added to the div containing speech content; the id corresponds with a CSS pseduo class that applies selection coloration corresponding to the user's designated color
  So, the highlight appears instantaneously, but in reality an AJAX request is running in the background to send the new highlight indicies to the server and then sends them back down where the highlights are applied to speech content
  However, since highlights are the primary function of the site I attempted to optimize this code (for server performance if nothing else)

  note that i put all the helper methods within the function, rather than concerns, because I can't see a scenario where they would be used elsewhere; additionally, there is a possibility of name collision
=end

  def transform_snippets(new_snippet)
    # old_snippets = JSON.parse(self.snippets)
    def old_snippets
      JSON.parse(self.snippets)
    end

    def merge_snippets(collection, n)
      collection.push(n)
    end

    def merge_overlapping_snippets(collection)
      #note: I placed helper methods inside method because I don't forsee them being needed for other purposes and thought it was more legible
      def snippets_overlap?(l, n)
        n[0].between?(l.first, l.last) || n[1].between?(l.first, l.last)
      end

      def combine_snippets(l, n)
        [[l.first, n.first].min, [l.last, n.last].max]
      end

      collection.sort_by(&:first).inject([]) do |result, snippet|
        if !result.empty? && snippets_overlap?(result.last, snippet)
          result[0...-1].push(combine_snippets(result.last, snippet))
        else
          result.push(snippet)
        end
      end
    end
    
    merge_overlapping_snippets(merge_snippets(old_snippets, new_snippet))

  end
end
