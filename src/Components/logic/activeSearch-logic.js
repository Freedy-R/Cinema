import search from "../icons/search.png";
const ActiveSearch = () => {
    return (
        <section className="searchSection">
            <img src={search}></img>
            <input type="text" placeholder="Szukaj"></input>
        </section>
    )
}
export default ActiveSearch