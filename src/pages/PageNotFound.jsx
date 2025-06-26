import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="pageNotFound-container">
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel
        velit soluta praesentium deleniti accusamus ipsum iure quae recusandae,
        molestiae veniam optio natus iusto nesciunt repellendus eveniet ea
        alias? Ad ea, velit architecto, minima ipsa exercitationem quis modi
        fuga hic officia, quibusdam eos provident libero aliquam. Fuga ut
        voluptate vitae.
      </p>

      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default PageNotFound;
