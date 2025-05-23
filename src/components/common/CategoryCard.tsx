function CategoryCard({ category }: { category: any }) {
    return (
        <div className="category-card">
            <h4 className="category-card__title">{category.name}</h4>
            <img src={category.image} alt={category.name} className="category-card__image" />
        </div>
    )
}

export default CategoryCard