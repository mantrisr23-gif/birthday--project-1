import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { CorporateRoast } from "./components/CorporateRoast";

describe("Corporate Roast Component", () => {
  it("renders the CorporateRoast component without crashing", () => {
    const root = document.createElement("div");
    const rootInstance = createRoot(root);
    
    // Render your actual component instead of 'Hello World'
    rootInstance.render(<CorporateRoast />);

    // Verify the component rendered content
    expect(root.innerHTML).toContain("Ayush");
    
    rootInstance.unmount();
  });
});
