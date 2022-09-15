import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OrderModal from "../Components/OrderModal";

export default function Success() {
    return(
        <div>
            <Header />
            <OrderModal opened={true} paymentMethod={1} />
            <Footer />
        </div>
    )
}