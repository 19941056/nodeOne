
const mongoose = require('mongoose');
const Music = require('../app/api/models/music');




const music = [
  {
    name: ' Demon Days',
    artist: 'Gorillaz',
    year: 2005,
    cover: '',
  },
  {
    name: ' Mamouna',
    artist: 'Brian Ferri',
    year: 1994,
    cover: '',
  },
  {
    name: ' Older',
    artist: 'George Michael',
    year: 1998,
    cover: '',
  },
  {
    name: " Ladie's Night",
    artist: 'Kool and the Gang',
    year: 1979,
    cover: '',
  },
  {
    name: ' Hybrid Theory',
    artist: 'Linkin Park',
    year: 2000,
    cover: '',
  },
  {
    name: ' Toxicity',
    artist: 'System of a down',
    year: 2001,
    cover: '',
  },
  {
    name: ' Iowa',
    artist: 'Slipknot',
    year: 2001,
    cover: '',
  },
  {
    name: ' Audioslave',
    artist: 'Audioslave',
    year: 2002,
    cover: '',
  },
  {
    name: ' Mechanical animal',
    artist: ' Marilyn Manson',
    year: 1998,
    cover: '',
  }
  
];
const musicDocuments = music.map(music => new Music(music));
mongoose
  .connect('mongodb+srv://root:ROOT1234@cluster0.vouk7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMusic = await Music.find();
    if (allMusic.length) {
      await Music.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Music.insertMany(musicDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
