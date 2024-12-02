import TemplateWidget from "@/components/TemplateWidget";

export default function QuotesWidget() {
    const quotes = {
        "fr": [
            {quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi"},
            {quote: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo"},
            {quote: "La vie est un long champ à cultiver. Voyager, c'est y semer la diversité de la Terre.", author: "Alexandra David-Néel"},
            {quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein"},
            {quote: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo"},
            {quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi"},
            {quote: "La vie est un long champ à cultiver. Voyager, c'est y semer la diversité de la Terre.", author: "Alexandra David-Néel"},
            {quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein"},
            {quote: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo"},
            {quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi"},
            {quote: "La vie est un long champ à cultiver. Voyager, c'est y semer la diversité de la Terre.", author: "Alexandra David-Néel"},
            {quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein"},
            {quote: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo"},
            {quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi"},
            {quote: "La vie est un long champ à cultiver. Voyager, c'est y semer la diversité de la Terre.", author: "Alexandra David-Néel"},
            {quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein"},
        ],
    }

    return (
        <TemplateWidget emoji={"📜"} title={"Citations"}>
            <div className={"text-lg font-light"}>
                {quotes.fr[Math.floor(Math.random() * quotes.fr.length)].quote}
            </div>
        </TemplateWidget>
    )
}