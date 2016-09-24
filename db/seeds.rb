# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



highlight = Highlight.create(1,2,[[1,10],[15,20]]);


user = User.create(
  first_name: "Logan",
  last_name: "Gants",
  email: "lgants@gmail.com",
  # phone: ,
  # organization: ,
  password: "password",
  password_confirmation: "password",
  biography: "This is my awesome bio.",
  # default_color: ,
  public_figure: false,
  entity: false,
  moderator: true,
  admin: true,
)

rand(1..5).times do
  month = rand(1..12)
  day = rand(1..29)
  year = rand(2015..2016)

  Speech.create(
    title: Faker::Lorem.sentence(rand(1..5)),
    content: Faker::Lorem.paragraph(rand(5..20)),
    speech_date: "#{month}/#{day}/#{year}",
    venue: Faker::University.name,
    city: Faker::Address.city,
    state: Faker::Address.state,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    # public_figure_id: ,
    creator_id: user.id,
    approved: true,
    # tags: ,
  )
end


25.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.free_email,
    # phone: ,
    # organization: ,
    password: "password",
    password_confirmation: "password",
    biography: Faker::Lorem.sentence(rand(5..20)),
    # default_color: ,
    public_figure: false,
    entity: false,
    moderator: false,
    admin: false,
  )

  rand(1..5).times do
    month = rand(1..12)
    day = rand(1..29)
    year = rand(2015..2016)

    Speech.create(
      title: Faker::Lorem.sentence(rand(1..5)),
      content: Faker::Lorem.paragraph(rand(5..20)),
      speech_date: "#{month}/#{day}/#{year}",
      venue: Faker::University.name,
      city: Faker::Address.city,
      state: Faker::Address.state,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      # public_figure_id: ,
      creator_id: user.id,
      approved: true,
      # tags: ,
    )
  end
end
