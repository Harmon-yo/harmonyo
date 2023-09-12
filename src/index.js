import {
    Suspense
} from 'react';
import Loading from './pages/Global/Loading';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "./pages/css/mainStyle.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Loading/>}>
        <App />
    </Suspense>
);
