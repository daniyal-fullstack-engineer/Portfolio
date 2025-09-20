import React, { useEffect, useState, useMemo } from "react";

const FormTesting = () => {
  const [formData, setFormData] = useState({});

  const uiElements = useMemo(() => [
    {
      type: "section",
      props: { style: { padding: "1rem", backgroundColor: "#f9f9f9" } },
      children: [
        {
          type: "header",
          props: { style: { marginBottom: "1rem" } },
          children: "Header Content",
        },
        {
          type: "article",
          children: [
            {
              type: "form",
              props: { style: { marginBottom: "1rem" } },
              children: [
                {
                  type: "fieldset",
                  children: [
                    { type: "legend", children: "User Info" },
                    { type: "label", props: { htmlFor: "username" }, children: "Username" },
                    {
                      type: "input",
                      props: {
                        type: "text",
                        id: "username",
                        placeholder: "Enter username",
                      },
                    },
                    { type: "label", props: { htmlFor: "password" }, children: "Password" },
                    {
                      type: "input",
                      props: {
                        type: "password",
                        id: "password",
                        placeholder: "Enter password",
                      },
                    },
                    { type: "label", props: { htmlFor: "gender" }, children: "Gender" },
                    {
                      type: "select",
                      props: { id: "gender" },
                      children: [
                        { type: "option", props: { value: "" }, children: "Select gender" },
                        { type: "option", props: { value: "male" }, children: "Male" },
                        { type: "option", props: { value: "female" }, children: "Female" },
                      ],
                    },
                    {
                      type: "input",
                      props: {
                        type: "checkbox",
                        id: "subscribe",
                      },
                    },
                    {
                      type: "label",
                      props: { htmlFor: "subscribe" },
                      children: "Subscribe",
                    },
                    {
                      type: "input",
                      props: {
                        type: "radio",
                        name: "role",
                        id: "admin",
                        value: "admin",
                      },
                    },
                    {
                      type: "label",
                      props: { htmlFor: "admin" },
                      children: "Admin",
                    },
                    {
                      type: "input",
                      props: {
                        type: "radio",
                        name: "role",
                        id: "user",
                        value: "user",
                      },
                    },
                    {
                      type: "label",
                      props: { htmlFor: "user" },
                      children: "User",
                    },
                    {
                      type: "textarea",
                      props: {
                        id: "comments",
                        placeholder: "Comments",
                      },
                    },
                    {
                      type: "button",
                      props: { type: "submit" },
                      children: "Submit",
                    },
                  ],
                },
              ],
            },
            {
              type: "table",
              props: { border: 1, style: { marginTop: "1rem", width: "100%" } },
              children: [
                {
                  type: "thead",
                  children: [
                    {
                      type: "tr",
                      children: [
                        { type: "th", children: "Name" },
                        { type: "th", children: "Age" },
                        { type: "th", children: "Role" },
                      ],
                    },
                  ],
                },
                {
                  type: "tbody",
                  children: [
                    {
                      type: "tr",
                      children: [
                        { type: "td", children: "Alice" },
                        { type: "td", children: "25" },
                        { type: "td", children: "Admin" },
                      ],
                    },
                    {
                      type: "tr",
                      children: [
                        { type: "td", children: "Bob" },
                        { type: "td", children: "30" },
                        { type: "td", children: "User" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "ul",
              children: [
                { type: "li", children: "Item 1" },
                { type: "li", children: "Item 2" },
                { type: "li", children: "Item 3" },
              ],
            },
            {
              type: "img",
              props: {
                src: "https://via.placeholder.com/150",
                alt: "Placeholder",
              },
            },
            {
              type: "video",
              props: {
                controls: true,
                width: 320,
                height: 240,
              },
              children: [
                {
                  type: "source",
                  props: {
                    src: "https://www.w3schools.com/html/mov_bbb.mp4",
                    type: "video/mp4",
                  },
                },
              ],
            },
            {
              type: "details",
              children: [
                { type: "summary", children: "More Info" },
                { type: "p", children: "This is hidden detail content." },
              ],
            },
            {
              type: "a",
              props: {
                href: "#",
              },
              children: "Visit Link",
            },
          ],
        },
        {
          type: "footer",
          props: { style: { marginTop: "1rem", textAlign: "center" } },
          children: "© 2025 Example Footer",
        },
      ],
    },
  ], []);

  // Auto-generate state based on ids
  useEffect(() => {
    const fields = {};
    const extractFields = (elements) => {
      elements.forEach((el) => {
        if (el.props?.id) {
          if (el.props.type === "checkbox") fields[el.props.id] = false;
          else fields[el.props.id] = "";
        }
        if (el.children && Array.isArray(el.children)) {
          extractFields(el.children);
        }
      });
    };
    extractFields(uiElements);
    setFormData(fields);
  }, [uiElements]);

  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  const renderElement = (element, key) => {
    const { type, props = {}, children } = element;

    if (["input", "select", "textarea"].includes(type)) {
      const id = props.id;
      const name = props.name;

      const newProps = {
        ...props,
        key,
        onChange: handleChange,
      };

      if (props.type === "checkbox") {
        newProps.checked = formData[id] || false;
      } else if (props.type === "radio") {
        newProps.checked = formData[name] === props.value;
      } else if (id) {
        newProps.value = formData[id] || "";
      }

      return React.createElement(
        type,
        newProps,
        type === "select" && Array.isArray(children)
          ? children.map((child, idx) => renderElement(child, `${key}-${idx}`))
          : undefined
      );
    }

    if (type === "form") {
      return React.createElement(
        type,
        { ...props, key, onSubmit: handleSubmit },
        children?.map((child, idx) => renderElement(child, `${key}-${idx}`))
      );
    }

    return React.createElement(
      type,
      { ...props, key },
      Array.isArray(children)
        ? children.map((child, idx) => renderElement(child, `${key}-${idx}`))
        : children
    );
  };

  return (
    <div>
      <h1>Dynamic JSON Form</h1>
      {uiElements.map((el, idx) => renderElement(el, idx))}
    </div>
  );
};

export default FormTesting;
