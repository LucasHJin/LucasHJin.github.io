import '../styling/portfolio.css';
import Card from './card';

export default function Portfolio() { 
    return (
        <div>
            <h3>my projects.</h3>
            <div className="portfolio-grid">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}