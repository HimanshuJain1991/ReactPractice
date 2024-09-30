import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  // Fetch data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((resp) => {
        setData(resp); // Set the complete data
      });
  }, []);

  // Handle pagination logic
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);


  const handleNext = () => {
    if (itemOffset + itemsPerPage < data.length) {
      setItemOffset(itemOffset + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (itemOffset - itemsPerPage >= 0) {
      setItemOffset(itemOffset - itemsPerPage);
    }
  };

  return (
    <>
      <div className='pagination'>
        <button type='button' onClick={handlePrevious}>
          Previous
        </button>
        <p>{Math.floor(itemOffset / itemsPerPage) + 1} of {pageCount}</p>
        <button type='button' onClick={handleNext}>
          Next
        </button>
      </div>



      <header className="masthead clear">
        <div className="centered">
          <div className="site-branding">
            <h1 className="site-title">Get API Calling</h1>
          </div>
        </div>
      </header>
      <div className="cards-container">
  {currentItems.map((item) => (
    <div className="card" key={item.id}>
      <picture className="">
        <img src={item.image} alt={item.title} />
      </picture>
      <div className="card-content">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h1>Price: ${item.price}</h1>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default App;
