FactoryGirl.define do

  factory :highlight do
    factory :zero_snippets do
      snippets "[]"
    end

    factory :one_snippet do
      snippets "[[#{rand(0..10)},#{rand(20..30)}]]"
    end

    factory :two_snippets do
      snippets "[[#{rand(0..10)},#{rand(20..30)}],[#{rand(40..50)},#{rand(60..70)}]]"
    end

  end

end
