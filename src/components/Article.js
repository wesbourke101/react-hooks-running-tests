import React from "react";

function Article() {
  test("displays the text 'please pass this test'", () => {
    render(<Article />);
  
    // add this line
    screen.debug();
  
    expect(screen.queryByText("please pass this test")).toBeInTheDocument();
  });
}

export default Article;
