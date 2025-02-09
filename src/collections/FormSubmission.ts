import { CollectionConfig } from "payload";

export const FormSubmission: CollectionConfig = {
    slug: "form-submission",
    fields: [
        {
            type: "text",
            name: "from",
            label: "from email",
            admin: {
                readOnly: true
            }
        },
        {
            type: "textarea",
            name: "message",
            label: "Message",
            admin: {
                readOnly: true
            }
        },
        {
            type: "text",
            name: "source",
            label: "Source",
            // couldn't understand this 👇🏻, why it's inside the admin property ?
            // from the docs: The behavior of Collections within the Admin Panel can be fully customized
            admin: {
                position: "sidebar",
                readOnly: true
            }
        }
    ],
};
