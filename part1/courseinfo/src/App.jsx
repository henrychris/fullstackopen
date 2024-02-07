function App() {
    const course = "Half Stack application development";

    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ];

    const exercises = [10, 7, 14];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
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
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    );
}

function Part(props) {
    {
        return (
            <>
                <p>
                    {props.part.name} {props.part.exercises}
                </p>
            </>
        );
    }
}

function Total(props) {
    let sum = 0;
    for (const element of props.parts) {
        sum += element.exercises;
    }

    return (
        <>
            <p>Number of exercises {sum}</p>
        </>
    );
}

export default App;
