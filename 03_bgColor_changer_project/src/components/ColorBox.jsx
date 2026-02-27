export default function ColorBox({ color, onClick }) {
    return (
        <button
            className="px-4 py-1 rounded-2xl cursor-pointer"
            id={color}
            style={{ backgroundColor: color }}
            onClick={() => onClick(color)}
        >
            {color}
        </button>
    );
}
