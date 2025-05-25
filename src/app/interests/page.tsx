"use client"

import { useEffect, useState } from 'react';
import { FaLastfm } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { ImSpinner10 } from 'react-icons/im';

interface TrackInfo {
  name: string,
  album: string,
  artist: string,
  date?: string,
  image?: string,
  url?: string
}

interface BookInfo {
  name: string,
  author: string,
  year: string,
  cover: string,
  goodreadsUrl: string
}

interface FilmInfo {
  name: string,
  year: string,
  director: string,
  poster: string
}

const FM_KEY = 'ff550540c3ca6d503ae41b204d1ae19a';
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const all_books: BookInfo[] = [
  {
    name: 'The Name of the Rose',
    author: 'Umberto Eco',
    year: '1980',
    cover: `${basePath}/book-covers/the_name_of_the_rose.jpg`,
    goodreadsUrl: 'https://www.goodreads.com/book/show/119073.The_Name_of_the_Rose'
  },
  {
    name: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: '1967',
    cover: `${basePath}/book-covers/solitude.jpg`,
    goodreadsUrl: 'https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude'
  },
  {
    name: 'Vagabond',
    author: 'Takehiko Inoue',
    year: '1999',
    cover: `${basePath}/book-covers/vagabond.jpg`,
    goodreadsUrl: 'https://www.goodreads.com/book/show/251912.Vagabond_Volume_1'
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    year: '1945',
    cover: `${basePath}/book-covers/animal_farm.jpg`,
    goodreadsUrl: 'https://www.goodreads.com/book/show/170448.Animal_Farm'
  }
];

const all_films: FilmInfo[] = [
  {
    name: '12 Angry Men',
    director: 'Sidney Lumet',
    year: '1957',
    poster: `${basePath}/films/12-angry-men.jpg`
  },
  {
    name: 'The King of Comedy',
    director: 'Martin Scorsese',
    year: '1982',
    poster: `${basePath}/films/king-of-comedy.jpeg`
  },
  {
    name: 'Lawrence of Arabia',
    director: 'David Lean',
    year: '1962',
    poster: `${basePath}/films/lawrence-of-arabia.jpg`
  },
  {
    name: 'Red Beard',
    director: 'Akira Kurosawa',
    year: '1965',
    poster: `${basePath}/films/red-beard.png`
  }
];

const SongsSection = () => {
  const [recentTracks, setRecentTracks] = useState<TrackInfo[]>([]);
  const [expanded, setExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchRecentTracks = async () => {
    const lastfmUsername = 'bobboi04';
    const baseurl = 'https://ws.audioscrobbler.com/2.0/';

    try {
      setLoading(true);
      const url = `${baseurl}?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${FM_KEY}&format=json`;
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();

      const tracks = data.recenttracks.track.map((track: any) => ({
        name: track.name,
        album: track.album['#text'],
        artist: track.artist['#text'],
        date: track.date ? track.date['#text'] : '',
        image: track.image[3]['#text'],
        url: track.url
      }));
      setRecentTracks(tracks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentTracks();
  }, []);

  return (
    <div className='border rounded-md p-2 max-h-[70vh] overflow-y-scroll bg-[#080028]/80' style={{ scrollbarWidth: 'none' }}>
      <div className='sticky border-b pb-2'>
        <div className='flex justify-between'>
          <h3 className='text-[#efdfba] font-normal text-2xl p-0'>Music</h3>
          <a className='cursor-pointer' onClick={() => setExpanded(!expanded)}>
            {expanded
              ? <FaChevronDown className='text-[#efdfba] text-lg' />
              : <FaChevronUp className='text-[#efdfba] text-lg' />}
          </a>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[#efdfba]/80 font-extralight text-sm'>Some of my recently played songs</p>
          <div className='flex items-center gap-2'>
            <span className='text-white/75 text-sm'>via</span>
            <a href="https://www.last.fm/api" target="_blank" className='flex items-center'>
              <FaLastfm className='w-5 h-5 text-[#efdfba] hover:text-[#E00000]' />
            </a>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {loading ? (
          <div className="flex justify-center items-center h-32 m-auto">
            <ImSpinner10 className="text-[#efdfba] animate-spin text-4xl" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 pb-1">
            {recentTracks.slice(0, 5).map((track, index) => (
              <div
                key={index}
                className='cursor-pointer group hover:bg-white/10 rounded-sm p-1 transition-colors'
                onClick={() => {
                  if(track?.url) window.open(track.url, '_blank');
                }}
              >
                <div className="aspect-square mb-1 relative">
                  <img src={track.image} alt={track.name} className="w-full h-full object-cover shadow-lg rounded-xs" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white truncate">{track.name}</h3>
                  <p className="text-xs text-white/75 truncate">{track.artist}</p>
                  <p className="text-xs text-white/75 truncate">{track?.date ? formatDate(track?.date) : 'Now playing'}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const BooksSection = ({ books }: { books: BookInfo[] }) => 
  {
    const [expanded, setExpanded] = useState(true);

    return (
      <div className='border rounded-md p-2 max-h-[70vh] overflow-y-scroll bg-[#080028]/80' 
        style={{
          scrollbarWidth: 'none',
        }}
      >
        <div className='sticky border-b pb-2'>
          <div className='flex justify-between'>
            <h3 className='text-[#efdfba] font-normal text-2xl p-0'>
              Books
            </h3>
            <a 
              className='cursor-pointer'
              onClick={() => setExpanded(!expanded)}
            >
              {expanded 
              ? (<FaChevronDown className='text-[#efdfba] text-lg' />) 
              : (<FaChevronUp className='text-[#efdfba] text-lg' />)}
            </a>
          </div>
          <p className='text-[#efdfba]/80 font-extralight text-sm'>My favourite books</p>
        </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pb-1">
            {books.map((book, index) => (
              <div key={index}
                className='cursor-pointer group hover:bg-white/10 rounded-sm p-1 transition-colors'
                onClick={() => {
                  if (book?.goodreadsUrl)
                    window.open(book.goodreadsUrl, '_blank');
                }}
              >
                <div className="aspect-[2/3] mb-1 relative">
                  <img 
                    src={book.cover} 
                    alt={book.name}
                    className="w-full h-full object-cover rounded-e-sm shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white truncate">{book.name}</h3>
                  <p className="text-xs text-white/75 truncate">{book.author}</p>
                  <p className="text-xs text-white/75 truncate">{book.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )};

const FilmsSection = ({ films }: {films: FilmInfo[]}) => 
  {
    const [expanded, setExpanded] = useState(true);

    return (
      <div className='border rounded-md p-2 max-h-[70vh] overflow-y-scroll bg-[#080028]/80' 
        style={{
          scrollbarWidth: 'none',
        }}
      >
        <div className='sticky border-b pb-2'>
          <div className='flex justify-between'>
            <h3 className='text-[#efdfba] font-normal text-2xl p-0'>
              Films
            </h3>
            <a 
              className='cursor-pointer'
              onClick={() => setExpanded(!expanded)}
            >
              {expanded 
              ? (<FaChevronDown className='text-[#efdfba] text-lg' />) 
              : (<FaChevronUp className='text-[#efdfba] text-lg' />)}
            </a>
          </div>
          <p className='text-[#efdfba]/80 font-extralight text-sm'>My favourite films</p>
        </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pb-1">
            {films.map((film, index) => (
              <div 
                key={index}
                className='cursor-pointer group hover:bg-white/10 rounded-sm p-1 transition-colors'
              >
                <div className="aspect-[2/3] mb-1 relative">
                  <img 
                    src={film.poster} 
                    alt={film.name}
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
                <div className="">
                  <h3 className="font-medium text-sm text-white truncate">
                    {film.name}
                  </h3>
                  <p className="text-xs text-white/75 truncate">
                    {film.director}
                  </p>
                  <p className="text-xs text-white/75 truncate">
                    {film.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  
  // lastfm returns date in UTC
  const date = new Date(dateString + ' UTC');
  const now = new Date(new Date().toUTCString());
  const diffMs = date.getTime() - now.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  // if less than 5 minutes
  if (Math.abs(diffMins) < 5) {
    return 'Just now';
  }

  if (Math.abs(diffMins) < 60) {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(diffMins, 'minutes');
  }
  
  // if less than 24 hours
  if (Math.abs(diffHours) < 24) {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(diffHours, 'hours');
  }
  
  // if older than a day
  if (Math.abs(diffDays) >= 1) {
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  }

  // fallback to minutes
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto'}).format(diffMins, 'minutes');
};

export default function Interests() {
  return (
    <main className='min-h-screen relative'>
      <div className='container mx-auto px-4 py-16 mt-20 w-full max-w-3xl space-y-4'>
        {all_books && (
          <div className=''>
            <BooksSection books={all_books} />
          </div>
        )}

        {all_films && (
          <div className=''>
            <FilmsSection films={all_films} />
          </div>
        )}
        
        <div>
          <SongsSection />
        </div>
      </div>
    </main>
  );
}