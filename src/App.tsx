import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

interface CardData {
  name: string;
  branch: string;
}

function App() {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Make sure the path is correct
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CardData[] = await response.json();
        console.log(data)
        setCardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (<>
    <h1 className='heading'>Git-Set-Go</h1>
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} name={card.name} branch={card.branch} />
      ))}
    </div>
  </>
  );
}

export default App;