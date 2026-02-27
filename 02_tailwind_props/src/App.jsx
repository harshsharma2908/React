import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <>
            <div className="flex gap-8">
                <Card title="One" views="23" />
                <Card title="Two" views="1002" />
                <Card title="Three" views="21398" />
            </div>
        </>
    );
}

export default App;
