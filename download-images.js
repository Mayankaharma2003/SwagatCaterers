import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const images = {
  hero: [
    {
      name: 'wedding-catering.jpg',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed'
    },
    {
      name: 'corporate-event.jpg',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865'
    },
    {
      name: 'birthday-celebration.jpg',
      url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84'
    }
  ],
  services: [
    {
      name: 'wedding-hero.jpg',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed'
    },
    {
      name: 'corporate-hero.jpg',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865'
    },
    {
      name: 'birthday-hero.jpg',
      url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84'
    },
    {
      name: 'special-hero.jpg',
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d'
    }
  ],
  gallery: [
    {
      name: 'wedding-1.jpg',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed'
    },
    {
      name: 'wedding-2.jpg',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
    },
    {
      name: 'corporate-1.jpg',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865'
    },
    {
      name: 'corporate-2.jpg',
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205'
    },
    {
      name: 'birthday-1.jpg',
      url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84'
    },
    {
      name: 'live-1.jpg',
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
    },
    {
      name: 'live-2.jpg',
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033'
    }
  ],
  about: [
    {
      name: 'about-main.jpg',
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    },
    {
      name: 'about-story.jpg',
      url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f'
    }
  ]
};

async function downloadAllImages() {
  for (const [category, categoryImages] of Object.entries(images)) {
    const dir = path.join('public', 'images', category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const image of categoryImages) {
      const filepath = path.join(dir, image.name);
      try {
        await downloadImage(image.url, filepath);
        console.log(`Downloaded ${image.name}`);
      } catch (err) {
        console.error(`Error downloading ${image.name}:`, err);
      }
    }
  }
}

downloadAllImages(); 