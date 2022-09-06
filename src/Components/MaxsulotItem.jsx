function MaxsulotItem(props) {
    const { id, name, description, full_background, price, addToBasket } = props;
    return (
        <div className="col s12 m6">
            <div id={id} className="goods">
                <div className="card">
                    <span className="card-title">{name}</span>
                    <div className="card-image">
                        <img className="main" src={full_background} />

                    </div>
                    <div className="card-content">
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn btn-success"
                            onClick={() => addToBasket({ id, name, price })}
                        >
                            BUY
                        </button>
                        <span className="ml-5">{price} $</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MaxsulotItem;