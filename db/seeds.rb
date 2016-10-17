# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# create admin
myself = User.create(
  first_name: "Logan",
  last_name: "Gants",
  email: "lgants@gmail.com",
  # phone: ,
  organization: "Flatiron School",
  password: "password",
  password_confirmation: "password",
  biography: "This is my awesome bio.",
  public_figure: false,
  entity: false,
  moderator: true,
  admin: true,
)


# create users
25.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.free_email,
    phone: Faker::PhoneNumber.phone_number,
    organization: Faker::Company.name,
    password: "password",
    password_confirmation: "password",
    biography: Faker::Lorem.sentence(rand(5..20)),
    # default_color: ,
    public_figure: false,
    entity: false,
    moderator: false,
    admin: false,
  )

  # create user speeches
  2.times do
    Speech.create(
      title: Faker::Lorem.sentence(rand(1..5)),
      content: Faker::Lorem.paragraph(rand(5..20)),
      speech_date: "#{rand(1..12)}/#{rand(1..29)}/#{rand(2015..2016)}",
      venue: Faker::University.name,
      city: Faker::Address.city,
      state: Faker::Address.state,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      # public_figure_id: ,
      creator_id: user.id,
      pending: false,
      # tags: ,
    )

    # create user highlights
    10.times do
      Highlight.create(
        user_id: user.id,
        speech_id: rand(2..50),
        snippets: "[[#{rand(1..20)},#{rand(30..90)}]]"
      )
    end
  end
end


temp_id = 1
50.times do
  Highlight.create(
    user_id: temp_id,
    speech_id: 1,
    snippets: "[[#{rand(1..20)},#{rand(30..50)}]]"
  )
  temp_id += 1
end
