import "./button.css";

const Button = (props) => {
    return <button className="button"><a href="#" className="link">{props.children}</a></button>
}

export default Button;