import { CollectionConfig, formatNames } from "payload";

export const Study: CollectionConfig = {
    slug: "study",
    fields: [
        {
            type: "text",
            name: "title", // this is going to be used in formatSlug() hook.
            label: "Title",
            required: true
        },
        {
            type: "text",
            name: "client",
            label: "Client",
            required: true
        },
        {
            type: "text",
            name: "location",
            label: "Location",
            required: true
        },
        {
            type: "text",
            name: "service-provider",
            label: "Service Provider",
            required: true
        },

        // slug mechanism:
        {
            type:"text",
            name:"slug",
            label: "Slug",
            admin: {
                position:"sidebar"
            },
            hooks: {
                beforeValidate: [() => {formatNames("title")}],
            }

        }
    ],
}