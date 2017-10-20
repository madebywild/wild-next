import Button from '../elements/button';

export default props => {

  return (
    <div>
      <Button href="/">Home</Button>
      <Button href="/about">About</Button>
      <Button route="product" params={{slug: 'plant'}}>Plant</Button>
      <Button route="product" params={{slug: 'tree'}}>Tree</Button>
      <style jsx>{`
        div {
          display: flex;
          padding: 10px;
          background-color: #ccc;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );

};

