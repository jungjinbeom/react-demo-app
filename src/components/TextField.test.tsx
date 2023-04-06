import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "./TextField";

const context = describe;

describe("TextField", () => {
  const label = "Name";
  const text = "Tester";
  let called = false;
  const setText = jest.fn();

  beforeEach(() => {
    //setText.mockClear();
    jest.clearAllMocks;
  });

  function renderTextField() {
    render(
      <TextField
        label={label}
        placeholder="Input your name"
        text={text}
        setText={setText}
      />
    );
  }

  function inputText(value: string) {
    fireEvent.change(screen.getByLabelText(label), {
      target: { value },
    });
  }

  it("renders elements", () => {
    //when
    renderTextField();

    //then

    screen.getByLabelText(label);
    screen.getByPlaceholderText(/name/);
    screen.getByDisplayValue(text);
  });

  //---
  //context : 입력했을때

  //---------

  context("when user enters name", () => {
    it("calls `setText` handler", () => {
      //given
      renderTextField();

      //when
      inputText("New Name");

      //then
      expect(setText).toBeCalledWith("New Name");
    });
  });
});
