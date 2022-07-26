export default {
  name: "abouts",
  title: "Abouts",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "string",
    },
    {
      name: "salutation",
      title: "Salutation",
      type: "string",
    },

    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
