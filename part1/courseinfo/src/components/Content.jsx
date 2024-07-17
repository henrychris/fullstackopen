import Part from "./Part";

const Content = (props) => {
    return (
        <>
            <p>
                <Part part={props.parts[0]} />
                <Part part={props.parts[1]} />
                <Part part={props.parts[2]} />
            </p>
        </>
    );
};

export default Content;
