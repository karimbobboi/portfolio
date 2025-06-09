import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { ImSpinner3 } from "react-icons/im";
import { SiWikimediacommons } from "react-icons/si";
import { FiRefreshCw } from 'react-icons/fi';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function formatImageTitle(title: string){
    let new_title = title.replace("File:", "");
    if(new_title.includes(".")){
        new_title = new_title.replace(".jpg", "").replace(".png", "").replace(".jpeg", "");
    }
    return new_title;
}

const wikicommons_categories = ['Featured_pictures_on_Wikimedia_Commons', 'Valued_images']

const fetch_images_from_wikicategory = async (category: string) => {
    const image_limit = 500;
    const url = 'https://commons.wikimedia.org/w/api.php' 
        + '?action=query' 
        + '&list=categorymembers' 
        + `&cmtitle=Category:${encodeURIComponent(category)}` 
        + '&cmtype=file' 
        + `&cmlimit=${image_limit}` 
        + '&format=json' 
        + '&origin=*';  // Required for CORS

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data.query.categorymembers;
    }
    catch (err) {
        console.error(`Failed to fetch wiki images from ${category}:`, err);
    }

    return null;
}

const fetch_image_from_wikicommons = async (image_commons_name: string) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query'
        + `&titles=${image_commons_name}`
        + '&prop=imageinfo'
        + '&iiprop=url'
        + '&format=json'
        + '&origin=*';  // Required for CORS

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        const pages = data.query.pages
        const first: any = Object.values(pages)[0];
        if(first.imageinfo && first.imageinfo.length > 0){
            return first;
        }
    }
    catch (err) {
        console.error(`Failed to fetch wiki images from ${image_commons_name}:`, err);
    }
    
    return null;
}

export default function WikiCommons(){
    const [wikimage, setWikimage] = useState<string | null>(null);
    const [imageTitle, setImageTitle] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        refreshImage()
        return () => {
            // Cleanup images
            setWikimage(null);
            setImageTitle(null);
        };
    }, [])

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
        setError(true);
    };

    const refreshImage = async () => {
        setLoading(true);
        setError(false);
        setWikimage(null);
        
        try {
            const category_index = getRandomInt(wikicommons_categories.length);
            const images: any = await fetch_images_from_wikicategory(wikicommons_categories[category_index]);
            const random_int = getRandomInt(images.length);
            const firstImage = await fetch_image_from_wikicommons(images[random_int].title);
            if(firstImage){
                setWikimage(firstImage.imageinfo[0].url);
                setImageUrl(firstImage.imageinfo[0].descriptionurl);
                setImageTitle(firstImage.title as string | null);
                // setLoading(false);
            }
        } catch (err) {
            setError(true);
        }
    };

    if(error) return (
        <div className='bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-md p-4'>
            <p className="text-white/70 text-sm">Failed to load image</p>
        </div>
    );

    return (
        <div className='bg-black/100 rounded-md p-1 border border-gray-700'>
            <div className="group relative min-h-[20rem]">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ImSpinner3 className="text-xl text-white animate-spin" />
                    </div>
                )}
                {wikimage && (
                    <>
                        <a 
                            href={imageUrl}
                            target="_blank"
                            className="block"
                        >
                            <Image 
                                src={wikimage}
                                alt={imageTitle || 'Wikimedia image'}
                                title={imageTitle || 'Wikimedia image'}
                                className={`
                                    max-h-[20rem] object-cover rounded-md w-full aspect-square
                                    ${loading ? 'opacity-0' : 'opacity-100'}
                                    transition-opacity duration-300 cursor-pointer
                                    hover:opacity-90
                                `}
                                width={200}
                                height={200}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />
                        </a>

                        {!loading && (
                            <>
                                <div className="absolute top-1 left-2 right-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-normal text-xs px-2 py-1 rounded-sm mix-blend-difference">
                                            WIKIMEDIA
                                        </span>
                                        <button 
                                            onClick={refreshImage}
                                            className="p-1.5 rounded-full text-white/70 hover:bg-black/70
                                                     transition-all duration-200 cursor-pointer
                                                     opacity-0 group-hover:opacity-100"
                                            title="Load new image"
                                        >
                                            <FiRefreshCw 
                                                className="w-3.5 h-3.5"
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className="slide-down">
                                    <p className="text-white font-light text-xs mt-1 mx-1">
                                        {formatImageTitle(imageTitle as string)}
                                    </p>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>     
        </div>
    );
}

