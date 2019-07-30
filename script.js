function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {newDate().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);