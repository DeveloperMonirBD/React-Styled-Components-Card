# 🎨 React Styled Components Card

A simple and modern React UI component built using **Styled Components**. This project demonstrates how to create reusable, dynamic, and styled UI components in React.

---

## 🚀 Features

- ⚛️ Built with React
- 💅 Styled using `styled-components`
- 🎯 Reusable UI components
- 🎨 Dynamic props for styling (e.g. color)
- 📱 Responsive layout
- 🔗 External links support

---

## 📸 Preview

A card component that includes:

- Tag label (EXCLUSIVE)
- Title using styled component
- Description text
- Action buttons (Watch Now & GitHub Repo)
- Image section

---

## 🧩 Component Structure

Card ├── CardContainer ├── ContentContainer │ ├── Tag │ ├── H1 (Styled Title) │ ├── P (Description) │ └── ButtonsContainer │ ├── Button │ └── Button └── IMG

```jsx

---

## 🧪 Example Code

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag>EXCLUSIVE</Tag>

                <H1 color="#fff">
                    <StyledTitle
                        text="React Styled Components"
                        color="#fff"
                    />
                </H1>

                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.
                </P>

                <ButtonsContainer>
                    <Button
                        link="https://lwsbd.link/rsc"
                        text="Watch now"
                    />
                    <Button
                        link="https://lwsbd.link/react"
                        text="Github repo"
                    />
                </ButtonsContainer>
            </ContentContainer>

            <IMG src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}

```

📦 Installation

1. Clone the repository:

```Bash
git clone https://github.com/DeveloperMonirBD/react-styled-components-card.git

```

2. Navigate to the project folder:

```Bash
cd react-styled-components-card

```

3. Install dependencies:

```Bash
npm install

```

4. Start the development server:

```Bash
npm run dev

```

## 🛠️ Dependencies

- React
- styled-components

### Install styled-components if not installed:

```Bash
npm install styled-components

```

## 💡 Why Styled Components?

- Scoped CSS (no class conflicts)
- Dynamic styling using props
- Cleaner component-based architecture
- No need for external CSS files

## 📌 Customization

### You can easily customize:

- Colors using props
- Text content
- Button links
- Image source

### Example:

```Javascript
<H1 color="red" />

```

## 🤝 Contributing

Feel free to fork this project and improve it. Pull requests are welcome!

### ⭐ If you like this project, give it a star!

