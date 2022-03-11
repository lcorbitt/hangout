# ---------- Creating Users ----------
User.destroy_all

u = User.create!(
  name: "Lukas",
  email: "movalley5@gmail.com",
  password: "password",
  location: "Fort Collins, CO"
)

u.add_role :admin

20.times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    location: "Denver, CO"
  )
end

# ---------- Creating Topics ----------
Topic.destroy_all

topics = [
  {
    name: "Arts & Culture",
    description: "Find out what's happening in various Arts & Culture Hangout groups and start meeting up with the ones near you.",
    slug: "arts-and-culture"
  },
  {
    name: "Book Clubs",
    description: "Hang out with kindred book lovers in a local Hangout Book Club! Fiction or non-fiction, paperback or hardcover, you'll read a new book every month. Come to laugh, share stories, and make new friends!",
    slug: "book-clubs"
  },
  {
    name: "Career & Business",
    description: "Hang out with other people interested in business and/or furthering their careers!",
    slug: "career-and-business"
  },
  {
    name: "Cars & Motorcycles",
    description: "Hang out with other local Car and Motorcycle enthusiasts. Discuss your gear and plan rides together!",
    slug: "cars-and-motorcycles"
  },
  {
    name: "Community & Environment",
    description: "Hang out with others in your local area interested in coming together to act in common interest for the places you hold dear. These groups are centered on a specific place or locality and bring people together to create a base of concerned citizens, to mobilize community members to act, and to develop leadership from and relationships among the people involved. Whether you're part of a neighborhood association, a local planning council, a community watch group, a historic preservation society, or another group focused on preserving, improving, developing, and enhancing a specific area, join in!",
    slug: "community-and-environment"
  },
  {
    name: "Dancing",
    description: "Hang out with other locals who love dancing! All styles and levels welcomed.",
    slug: "dancing"
  },
  {
    name: "Education & Learning",
    description: "Hang out with others in your local area who are interested in Education. Gather to discuss various educational topics and opportunities.",
    slug: "education-and-learning"
  },
  {
    name: "Fashion & Beauty",
    description: "Find out what's happening in various Fashion and Beauty Hangout groups and start meeting up with the ones near you.",
    slug: "fashion-and-beauty"
  },
  {
    name: "Fitness",
    description: "Meet other local Fitness Buffs to trade workout tips and stay motivated! Perhaps even find a workout/gym partner!",
    slug: "fitness"
  },
  {
    name: "Games",
    description: "Hangout with other locals interested in games: gather to have fun and play together!",
    slug: "games"
  },
  {
    name: "Health & Wellbeing",
    description: "Hang out with other local people interested in living healthy, just like you!",
    slug: "health-and-wellbeing"
  },
  {
    name: "Hobbies & Crafts",
    description: "Hang out with others and share the hobbies and crafts that you love!",
    slug: "hobbies-and-crafts"
  },
  {
    name: "LGBTQ",
    description: "Find out what's happening in various LGBTQ Hangout groups and start meeting up with the ones near you.",
    slug: "lgbtq"
  },
  {
    name: "Language & Ethnic Identity",
    description: "Hang out with others in your local area who share an enjoyment for a specific Language or Ethnic Identity. Experience cultural activities and make new friends!",
    slug: "language-and-ethnic-identity"
  },
  {
    name: "Lifestyle",
    description: "Find out what's happening in various Lifestyle Hangout groups and start meeting up with the ones near you.",
    slug: "lifestyle"
  },
  {
    name: "Movements & Politics",
    description: "Find out what's happening in various Movements and Politics Hangout groups and start meeting up with the ones near you.",
    slug: "movements-and-politics"
  },
  {
    name: "Movies & Film",
    description: "Hang out with other local Movie Fans! Get together once a month to plan movie outings and discuss the hot movies of the month.",
    slug: "movies-and-film"
  },
  {
    name: "Music",
    description: "Hang out with other local music enthusiasts! Gather for socializing, meet new people and, of course, listen to music!",
    slug: "music"
  },
  {
    name: "New Age & Spirituality",
    description: "Hang out with other locals to discuss your spiritual path. Share your most profound and transformational personal experiences and talk about ways to incorporate spirituality into your life. Open to people of all faiths and cultures!",
    slug: "new-age-and-spirituality"
  },
  {
    name: "Outdoors & Adventure",
    description: "Hang out with other locals who love adventure, whether in nature, in the city, or wherever else!",
    slug: "outdoors-and-adventure"
  },
  {
    name: "Paranormal",
    description: "Hang out with others in your local area interested in various Paranormal phenomenas. Share your insights and make new friends!",
    slug: "paranormal"
  },
  {
    name: "Parents & Family",
    description: "Hang out with parents in your local area that want to get out and live life while raising children.",
    slug: "parents-and-family"
  },
  {
    name: "Pets & Animals",
    description: "Find out what's happening in various Pets and Animals Hangout groups and start meeting up with the ones near you.",
    slug: "pets-and-animals"
  },
  {
    name: "Photography",
    description: "Meet fellow shutterbugs near you! Come to a Photography Hangout to talk about the latest gear, swap tips and techniques, share your images and stories -- and have fun doing it!",
    slug: "photography"
  },
  {
    name: "Religion & Beliefs",
    description: "Hang out with other people and share your beliefs",
    slug: "religion-and-beliefs"
  },
  {
    name: "Sci-Fi & Fantasy",
    description: "Hang out with fellow Sci-fi/Fantasy Fans near you! Come to a local Sci-fi/Fantasy Hangout to have fun talking science fiction and fantasy in literature, media, gaming and art. Go to local conventions, signings, readings, movies, museum shows, science lectures and more!",
    slug: "scifi-and-fantasy"
  },
  {
    name: "Singles",
    description: "Hang out with other singles near you! Come to a Singles Hangout and flirt with fellow minglers for fun, friendship...and maybe more!",
    slug: "singles"
  },
  {
    name: "Socializing",
    description: "Hang out with other social people just like you! Let's socialize!",
    slug: "socializing"
  },
  {
    name: "Sports & Recreation",
    description: "Hang out with others in your local area who are Sports Fans of various types of sports. Discuss teams and watch the game! Start a team and play your favorite sport!",
    slug: "sports-and-recreation"
  },
  {
    name: "Support",
    description: "Find out what's happening in various Support Hangout groups and start meeting up with the ones near you.",
    slug: "support"
  },
  {
    name: "Tech",
    description: "Hang out with other people interested in the internet and technology!",
    slug: "tech"
  },
  {
    name: "Writing",
    description: "Hang out with other local writers: gather to network, exchange ideas, and socialize with others who are interested in writing!",
    slug: "writing"
  }
]

for t in topics do
  Topic.create!(
    name: t[:name],
    description: t[:description],
    slug: t[:slug]
  )
end

p "--------------------"
p "Created #{User.count} users"
p "Created #{Topic.count} topics"
p "--------------------"
