15.times do
  Look.create(
    author: Faker::Artist.name, 
    post: Faker::DumbAndDumber.quote

  )
end