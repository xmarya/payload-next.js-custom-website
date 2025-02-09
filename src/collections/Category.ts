import { CollectionConfig } from "payload";

export const Category: CollectionConfig = {
    slug: "categories",
    fields: [
        {
            type: "text",
            name: "category",
            label: "Category",
            required: true
        }
    ]
}