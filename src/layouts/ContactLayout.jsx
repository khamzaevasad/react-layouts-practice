import { NavLink, Outlet } from 'react-router-dom';

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        architecto consequuntur, consequatur asperiores illum dolores, qui
        recusandae fuga atque temporibus, ex voluptatum in accusantium
        necessitatibus neque. Beatae cum enim ducimus, veritatis dolore veniam
        nam possimus dignissimos recusandae repellendus consectetur dicta in
        architecto non rem quo nulla corporis at hic expedita.
      </p>

      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
