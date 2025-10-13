import "../styling/more.css";
import Photo from "../components/photo";

export default async function More() {
  const images = [
    { src: "/more/1.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/2.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/3.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/4.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/5.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/6.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/7.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/8.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/9.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/10.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/11.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/12.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/13.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/14.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/15.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/16.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/17.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/18.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/19.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/20.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/21.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/22.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/23.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/24.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/25.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/26.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/27.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/28.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/29.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/30.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/31.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/32.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/33.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more/34.jpg", alt: "Image of Lucas Jin and/or his hobbies." },  
  ];

  return (
    <div className="more-page">
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <Photo src={img.src} alt={img.alt} width={1000} height={1000} />
          </div>
        ))}
      </div>
    </div>
  );
}
