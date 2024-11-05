import './App.css';
import ResponsiveCards from "./components/cards/ResponsiveCards";
import ResponsiveCardImg from "./components/cards/ResponsiveCardImg";
import Footer from "./components/footers/Footer";
import Footer1 from "./components/footers/Footer1";
import ImageGrid from "./components/image_gallery/ImageGrid";

function App() {
    return (
        <div className="App">
            <ResponsiveCards/>
            <ResponsiveCardImg/>
            {/*<Footer/>*/}
            <ImageGrid/>
            <Footer1/>

        </div>
    );
}

export default App;
