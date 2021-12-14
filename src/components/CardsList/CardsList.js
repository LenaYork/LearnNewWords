import "./CardsList.css";
import { CardData } from "./CardData/CardData";

export function CardsList() {
    return(
        <div className="cardslist-container">
            <p>Тут будут списки карточек</p>
            <CardData />
            <CardData />
            <CardData />
            <CardData />
        </div>
    )
}