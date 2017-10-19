import styles from '../config/styles.js';

export default props => (
  <div>
    {props.children}
    <style jsx global>{styles}</style>
  </div>
);
