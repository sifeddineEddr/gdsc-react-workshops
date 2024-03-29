import { Link } from "react-router-dom";

const FooterColumn = (props) => {
  return (
    <div>
      <p className="font-semibold">{props.category}</p>
      <ul>
        {props.properties.map((e, index) => (
          <li key={index}>
            <Link to={e.path}> {e.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
