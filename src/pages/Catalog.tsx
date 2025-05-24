import CategoryCard from '../components/common/CategoryCard';
import { categories } from '../data/products';
import { useEffect } from 'react';
function Catalog() {
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='catalog'>
      <div className='container catalog__container' >
        <h3>Kategoriyalar</h3>
        <div className='catalog__categories'>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog