"use client"

import Background from './components/Background';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

interface TrackInfo {
  name: string,
  album: string,
  artist: string,
  date?: string,
  image?: string,
  url?: string
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  
  // lastfm returns date in UTC
  const date = new Date(dateString + ' UTC');
  const now = new Date(new Date().toUTCString());
  const diffMs = date.getTime() - now.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  console.log(now, date, diffMins)

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

export default function Home() {
  const [recentTracks, setRecentTracks] = useState <TrackInfo[]>([]);
  
  const fetchRecentTracks = async () => {
    const lastfmUsername = 'bobboi04';
    const baseurl = 'http://ws.audioscrobbler.com/2.0/';

    try {
      const url = `${baseurl}?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${process.env.NEXT_PUBLIC_API_FM_KEY}&format=json`;
      const response = await fetch(url, {
        method: 'GET'
      });

      const data = await response.json();
      // console.log(data.recenttracks);
      const tracks = data.recenttracks.track.map(
        (track: any, index: number) => {
          const newTrack: TrackInfo = {
            name: track.name,
            album: track.album['#text'],
            artist: track.artist['#text'],
            date: track.date ? track.date['#text'] : '',
            image: track.image[3]['#text'],
            url: track.url
          }

          return newTrack;
        })
      console.log(tracks);
      setRecentTracks(tracks);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRecentTracks();
  }, []);

  return (
    <main className='p-1 min-h-screen relative'>
      <NavBar />
      <div className='relative h-[calc(100vh-100px)] m-1 rounded-md'>
        <Background/>
        <div className='flex justify-center'>
          <div className='border rounded-md p-2 max-h-[70vh] overflow-y-scroll bg-black/20 mt-20' 
            style={{
              scrollbarWidth: 'none',
              width: '70vw'
            }}
          >
            <div className='mb-2 sticky border-b pb-2'>
              <h3 className='text-[#efdfba] font-normal text-2xl p-0'>
                Music
              </h3>
              <p className='text-[#efdfba] text-opacity-50 font-light'>Some of my recently played songs</p>
            </div>
            <div className="grid grid-cols-4 gap-6 pb-1">
              {recentTracks.slice(0, 12).map((track, index) => (
                <div 
                  key={index}
                  className='cursor-pointer'
                  onClick={() => {
                    if(track?.url)
                      window.open(track.url, '_blank');
                  }}
                >
                  <div className="aspect-square mb-1 relative">
                    <img 
                      src={track.image} 
                      alt={track.name}
                      className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div className="">
                    <h3 className="font-medium text-sm text-white truncate">
                      {track.name}
                    </h3>
                    <p className="text-xs text-white/75 truncate">
                      {track.artist}
                    </p>
                    <p className="text-xs text-white/75 truncate">
                      {track?.date ? formatDate(track?.date) : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}