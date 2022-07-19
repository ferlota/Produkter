
import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';


import Content from "./views/Content.jsx";  


function App() {
  return (
    <MantineProvider>
      <TypographyStylesProvider>
        <Content />
    </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;
