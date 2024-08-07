import { useParams } from 'react-router-dom';
import SplitTextDemo from '../demo/SplitTextDemo';
import BlurTextDemo from '../demo/BlurTextDemo';
import BlobCursorDemo from '../demo/BlobCursorDemo';
import { Helmet } from 'react-helmet-async';
import WaveTextDemo from '../demo/WaveTextDemo';
import AnimatedContainerDemo from '../demo/AnimatedContainerDemo';

const CategoryPage = () => {
  const { category, subcategory } = useParams(); // Extract category and subcategory from the URL

  const componentMap = {
    'split-text': SplitTextDemo,
    'blur-text': BlurTextDemo,
    'blob-cursor': BlobCursorDemo,
    'wave-text': WaveTextDemo,
    'animated-container': AnimatedContainerDemo
    // Map other subcategories to their components here
  };

  const decodeLabel = (label) => label
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const SubcategoryComponent = componentMap[subcategory];

  return (
    <div className='category-page'>
      <h1 className='main-category'>{decodeLabel(category)}</h1>
      <h2 className='sub-category'>{decodeLabel(subcategory)}</h2>
      {SubcategoryComponent ? (
        <>
          <Helmet>
            <title>React Bits - {decodeLabel(subcategory)}</title>
          </Helmet>
          <SubcategoryComponent />
        </>
      ) : (
        <p>This component is not available yet.</p>
      )}
    </div>
  );
}

export default CategoryPage;