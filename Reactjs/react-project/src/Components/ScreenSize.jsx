import useWindowResize from "./useWindowResize";



function ScreenSize() {
    const {width, height} = useWindowResize();
    return (
        <div>
            <h1>Screen Size</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
}
export default ScreenSize;