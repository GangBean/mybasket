const RecipeCard = ({ id, recipeName, recipeUrl, imageUrl }) => {
    return (
        <li class="recipeCard" id={id}>
            <div class="recipeId" hidden={true}>{id}</div>
            <img class="recipeImg" src={imageUrl} />
            <a class="recipeName" href={recipeUrl}>{recipeName}</a>
        </li>
    );
};

export default RecipeCard;
