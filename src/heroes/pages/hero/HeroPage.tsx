import { useParams } from "react-router";

export const HeroPage = () => {

    const { idSlug = '' } = useParams();
    console.log("🚀 ~ HeroPage ~ idSlug:", idSlug)
    return (
        <div>HeroPage</div>
    )
}
