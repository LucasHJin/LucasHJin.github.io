import "../styling/more.css";
import Photo from "../components/photo";

export default async function More() {
  const images = [
    { src: "/more-images/1.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/2.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/3.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/4.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/5.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/6.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/7.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/8.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/9.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/10.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/11.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/12.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/13.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/14.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/15.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/16.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/17.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/18.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/19.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/20.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/21.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/22.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/23.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/24.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/25.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/26.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/27.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/28.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/29.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/30.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/31.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/32.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/33.jpg", alt: "Image of Lucas Jin and/or his hobbies." },
    { src: "/more-images/34.jpg", alt: "Image of Lucas Jin and/or his hobbies." },  
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
