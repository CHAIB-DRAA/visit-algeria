import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image';

const initialPins = [
    { id: 1, src: 'https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg', alt: 'Pin 1' },
    { id: 2, src: 'https://i.pinimg.com/236x/fa/85/77/fa857720e454dd729417920b187493e2.jpg', alt: 'Pin 2' },
    { id: 3, src: 'https://i.pinimg.com/236x/52/a3/d1/52a3d167e25b31783c49d629294a3c35.jpg', alt: 'Pin 3' },
    { id: 4, src: 'https://i.pinimg.com/564x/6a/f6/71/6af67110eb902f81523fae20e7220179.jpg', alt: 'Pin 4' },
    { id: 5, src: 'https://i.pinimg.com/564x/33/06/19/330619f00ec91194d49140f4630340fe.jpg', alt: 'Pin 5' },
];

export default function PinterestPage() {
    const [pins, setPins] = useState(initialPins);
    const [hasMore, setHasMore] = useState(true);

    // Fonction pour charger plus de "pins"
    const fetchMorePins = () => {
        if (pins.length >= 20) {
            setHasMore(false);
            return;
        }
        const morePins = [
            { id: pins.length + 1, src: 'https://i.pinimg.com/236x/fa/85/77/fa857720e454dd729417920b187493e2.jpg', alt: `Pin ${pins.length + 1}` },
            { id: pins.length + 2, src: 'https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg', alt: `Pin ${pins.length + 2}` },
            { id: pins.length + 3, src: 'https://i.pinimg.com/236x/52/a3/d1/52a3d167e25b31783c49d629294a3c35.jpg', alt: `Pin ${pins.length + 3}` },
        ];
        setPins(prevPins => [...prevPins, ...morePins]);
    };

    return (
        <div className="pinterest-container">
            <InfiniteScroll
                dataLength={pins.length}
                next={fetchMorePins}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                className="pinterest-grid"
            >
                {pins.map((pin) => (
                    <div className="pinterest-item" key={pin.id}>
                        <Image
                            src={pin.src}
                            alt={pin.alt}
                            width={236}  // Largeur de l'image
                            height={350} // Hauteur de l'image
                            objectFit="cover"
                            loading="lazy"
                            className="pinterest-image"
                        />
                    </div>
                ))}
            </InfiniteScroll>

            <style jsx>{`
        .pinterest-container {
            padding: 20px;
            display: flex;
            flex-direction: row;
        }

        .pinterest-grid {
            
          
          gap: 16px;
        }

        .pinterest-item {
          width: 100%;
          max-width: 236px; /* Largeur maximale de l'élément */
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .pinterest-item:hover {
          transform: scale(1.05); /* Zoom au survol */
        }

        .pinterest-image {
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
}
