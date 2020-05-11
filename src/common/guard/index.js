import { navigate } from "hookrouter";

export default function RouteGuard() {
    if (!(localStorage && localStorage.getItem('userData'))) {
        navigate('/');
    }
}