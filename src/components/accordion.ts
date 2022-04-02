export interface Accordion {
  title: string;
  child: Element;
}

export const getAccordion = (id: string, data: Array<Accordion>) => {
  const getAccordionHeader = (accordion: Accordion, index: number) => {
    const Button = document.createElement("button");
    Button.classList.add("btn", "btn-secondary", "w-100", "h-100");
    Button.type = "button";
    Button.setAttribute("data-bs-toggle", "collapse");
    Button.setAttribute("data-bs-target", `#collapse${index}`);
    Button.setAttribute("aria-expanded", "false");
    Button.setAttribute("aria-controls", `collapse${index}`);
    Button.innerText = accordion.title;
    return Button;
  };

  const getAccordionBody = (accordion: Accordion, index: number) => {
    const AccordionBody = document.createElement("div");
    AccordionBody.classList.add("accordion-collapse", "collapse");
    AccordionBody.id = `collapse${index}`;
    AccordionBody.setAttribute("aria-labelledby", `heading${index}`);
    AccordionBody.setAttribute("data-bs-parent", `#${id}`);

    const Body = document.createElement("div");
    Body.classList.add("accordion-body", "bg-dark");
    Body.appendChild(accordion.child);

    AccordionBody.appendChild(Body);

    return AccordionBody;
  };

  const getAccordionItem = (accordion: Accordion, index: number) => {
    const AccordionItem = document.createElement("div");

    AccordionItem.appendChild(getAccordionHeader(accordion, index));
    AccordionItem.appendChild(getAccordionBody(accordion, index));
    return AccordionItem;
  };

  const Accordion = document.createElement("div");
  Accordion.classList.add("accordion");
  Accordion.id = id;
  data.forEach((accordion, index) =>
    Accordion.appendChild(getAccordionItem(accordion, index))
  );
  return Accordion;
};
