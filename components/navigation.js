import Button from '../elements/button';
import styles from './navigation.scss';

export default props => {

  return (
    <div>
      <Button href="/">Home</Button>
      <Button href="/about">About</Button>
      <Button route="product" params={{slug: 'plant'}}>Plant</Button>
      <Button route="product" params={{slug: 'tree'}}>Tree</Button>
      <style jsx>{styles}</style>
    </div>
  )

}
