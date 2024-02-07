function App() {
    const course = "Half Stack application development";

    const parts = [
        "Fundamentals of React",
        "Using props to pass data",
        "State of a component",
    ];

    const exercises = [10, 7, 14];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} exercises={exercises} />
            <Total total={exercises[0] + exercises[1] + exercises[2]} />
        </div>
    );
}

function Header(props) {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
}

function Content(props) {
    return (
        <>
            <Part part={props.parts[0]} exercise={props.exercises[0]} />
            <Part part={props.parts[1]} exercise={props.exercises[1]} />
            <Part part={props.parts[2]} exercise={props.exercises[2]} />
        </>
    );
}

function Part(props) {
    {
        return (
            <>
                <p>
                    {props.part} {props.exercise}
                </p>
            </>
        );
    }
}

function Total(props) {
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    );
}

export default App;
