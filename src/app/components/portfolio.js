import '../styling/portfolio.css';
import Card from './card';
import data from '../data/portfolio.json';

export default function Portfolio() { 
    const firstProject = data[0]; // TEMP -> ONLY FIRST PROJ TO CHECK

    return (
        <div className="portfolio-container">
            {firstProject && (
                <Card
                    key={0}
                    title={firstProject.title}
                    description={firstProject.description}
                    image={firstProject.image}
                    tags={firstProject.tags}
                    links={Object.values(firstProject.links)}
                />
            )}
        </div>
    );
}