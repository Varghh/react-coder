import Item from './item';

const ItemList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  }
};

export default ItemList;