# ---------- Creating Users ----------
User.destroy_all

User.create!(
  name: "Lukas",
  email: "movalley5@gmail.com",
  password: "password",
  location: "Fort Collins, CO"
)

20.times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    location: "Denver, CO"
  )
end

p "--------------------"
p "Created #{User.count} users"
p "--------------------"
