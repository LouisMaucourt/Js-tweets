const tweets = [
  {
    id: 1,
    content: 'Lorem ipsum',
    author: 'Ada',
    likes: 10
  },
  {
    id: 2,
    content: 'Dolor sit amet',
    author: 'Steve',
    likes: 8
  },
  {
    id: 3,
    content: 'Consectetur adipiscing elit',
    author: 'Grace',
    likes: 12
  },
  {
    id: 4,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: 'Alan',
    likes: 2
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    author: 'Ada',
    likes: 20
  }
]

const tweetsList = document.getElementById('tweets-list')
const content = document.createElement('p')
const likes = document.createElement('p')
const author = document.createElement('p')
const tweet = document.createElement('li')

//console.log(tweetsList,content, likes, author)



tweets.forEach(tweetData => {
  const tweet = document.createElement('li');
  tweet.classList.add('tweet');

  const content = document.createElement('p');
  content.classList.add('content');
  content.textContent = tweetData.content;

  const likes = document.createElement('p');
  likes.classList.add('likes');
  likes.textContent = tweetData.likes;

  const author = document.createElement('p');
  author.classList.add('author');
  author.textContent = tweetData.author;

  tweet.appendChild(content);
  tweet.appendChild(likes);
  tweet.appendChild(author);

  tweetsList.appendChild(tweet);
});
