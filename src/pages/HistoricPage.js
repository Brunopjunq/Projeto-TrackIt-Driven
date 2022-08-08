import Logo from '../assets/TrackIt.png';
import Bob from '../assets/Bob.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HistoricPage() {
    return (
        <>
        <Header />
        <div className="user-page">
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </div>
        <Footer />
        </>
    )
}