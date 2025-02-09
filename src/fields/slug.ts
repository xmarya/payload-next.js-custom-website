import { Field, formatNames } from 'payload';

export const slug: Field = {
  // slug mechanism:
    type:"text",
    name:"slug",
    label: "Slug",
    admin: {
        position:"sidebar"
    },
    hooks: {
        beforeValidate: [() => {formatNames("title")}],
    }
};
