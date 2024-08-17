import './LinksItem.css'

function LinksItem(props) {
    return(
        <button>
            <span>{props.LinksName}</span>
        </button>
    );
}

export default LinksItem;