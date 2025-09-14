import '../styling/portfolio.css';
import Card from './card';

export default function Portfolio() { 
    return (
        <div>
            <div className="portfolio-grid">
                <Card title="Project 1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." imageUrl="/pixel-pets.mp4" tags={["tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2", "tag1", "tag2"]} links={["https://www.github.com", "https://www.devpost.com", "https://www.helloworld.com"]} />
            </div>
        </div>
    );
}