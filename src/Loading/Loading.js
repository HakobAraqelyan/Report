
const Loading = ({width = 50, height = 50}) => {
    return (
        <div>
            <img
                alt="Loading"
                src="./icon/loading/loading.gif"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    display: 'block',
                    margin: '0 auto'
                }}
                />
        </div>
    );
};

export default Loading