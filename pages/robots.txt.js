function Robots() {
}

Robots.getInitialProps = ({res}) => {
  if (process.env.WILD_ENV !== "production") {
    res.write("User-agent: *\nDisallow: /");
    return res.end();
  }
  return res.end();
};

export default Robots;
