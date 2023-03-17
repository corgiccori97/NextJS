import NavBar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main>{ children }</main>
        </>
    )
}