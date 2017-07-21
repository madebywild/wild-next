
export default props => (
  <div>
    {props.children}
    <style jsx global>{`
      /* minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
      html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
      /* font face declarations */
      @font-face {
        font-family: Roboto;
        src: url('/static/fonts/Roboto-Regular-webfont.eot');
        src: url('/static/fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/Roboto-Regular-webfont.woff') format('woff'),
             url('/static/fonts/Roboto-Regular-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `}</style>
  </div>
);