class Speech < ApplicationRecord
  has_many :highlights

  def format_date
    date = self.speech_date.split("/")
    DateTime.new(date[2].to_i,date[0].to_i,date[1].to_i).strftime("%a, %b %d, %Y")
  end

end
