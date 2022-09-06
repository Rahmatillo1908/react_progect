import MaxsulotItem from "./MaxsulotItem";

function MaxsulotList(props) {
    const { mahsulot = [], addToBasket } = props;
    if (!mahsulot.length) {
        return <h1>Mahsulot topilmadi</h1>;
    }
    return (
        <div className="container goods">
            {mahsulot.map((item) => (
                <MaxsulotItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}
export default MaxsulotList;