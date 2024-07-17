const Part = (props) => {
    return (
        <>
            <p>
                {props.part.name} {props.part.exerciseCount}
            </p>
        </>
    );
};

export default Part;
