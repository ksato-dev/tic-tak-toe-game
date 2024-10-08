import viteLogo from "/vite.svg";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, CircularProgress, Grid2, ToggleButton, ToggleButtonGroup } from "@mui/material";

enum CellType {
  Null = 0,
  Circle = 1,
  Cross = 2,
}

enum UserType {
  Circle = 0,
  Cross = 1,
}

function App() {
  const initUserType: UserType = UserType.Cross;
  const [userTypeState, setUserTypeState] = useState<UserType>(initUserType);

  const [count, setCount] = useState(0);

  const initGridState = [
    [CellType.Null, CellType.Null, CellType.Null],
    [CellType.Null, CellType.Null, CellType.Null],
    [CellType.Null, CellType.Null, CellType.Null],
  ];
  const [gridState, setGridState] = useState<CellType[][]>(initGridState);

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setToggleAlignmentState(newAlignment);
  };

  const userState2CellState = (userType: UserType): CellType => {
    let newCellType: CellType = CellType.Null;
    if (userType === UserType.Circle) {
      newCellType = CellType.Circle;
    } else if (userType === UserType.Cross) {
      newCellType = CellType.Cross;
    }
    return newCellType;
  };

  const handleCellClick = (i: number, j: number) => {
    let newCellType: CellType = userState2CellState(userTypeState);
    let newGridState = [...gridState];
    newGridState[i][j] = newCellType;

    setGridState(newGridState);
  };

  const getCellString = (cellState: CellType): string => {
    let cellString: string = "";
    if (cellState === CellType.Circle) {
      cellString = "〇";
    } else if (cellState === CellType.Cross) {
      cellString = "✖";
    }
    return cellString;
  };

  const [toggleAlignmentState, setToggleAlignmentState] = useState<string>(
    getCellString(userState2CellState(initUserType)),
  );

  const resetGridState = () => {
    // let newGridState = [...gridState];
    let newGridState = gridState.map(row => row.map(() => CellType.Null));
    setGridState(newGridState);
  }

  return (
    <>
      <div>
        <Button onClick={resetGridState} variant="outlined" sx={{ marginBottom: "10px" }}>Reset</Button>
      </div>
      <ToggleButtonGroup
        sx={{ marginBottom: "10px" }}
        // color="primary"
        color="secondary"
        value={toggleAlignmentState}
        exclusive
        onChange={handleToggleChange}
        aria-label="Platform"
      >
        <ToggleButton
          onClick={() => {
            setUserTypeState(UserType.Cross);
          }}
          value="✖"
        >
          ✖
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setUserTypeState(UserType.Circle);
          }}
          value="◯"
        >
          ◯
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid2>
        <Button
          onClick={() => handleCellClick(0, 0)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[0][0])}
        </Button>
        <Button
          onClick={() => handleCellClick(0, 1)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[0][1])}
        </Button>
        <Button
          onClick={() => handleCellClick(0, 2)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[0][2])}
        </Button>
      </Grid2>
      <Grid2>
        <Button
          onClick={() => handleCellClick(1, 0)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[1][0])}
        </Button>
        <Button
          onClick={() => handleCellClick(1, 1)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[1][1])}
        </Button>
        <Button
          onClick={() => handleCellClick(1, 2)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[1][2])}
        </Button>
      </Grid2>
      <Grid2>
        <Button
          onClick={() => handleCellClick(2, 0)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[2][0])}
        </Button>
        <Button
          onClick={() => handleCellClick(2, 1)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[2][1])}
        </Button>
        <Button
          onClick={() => handleCellClick(2, 2)}
          variant="outlined"
          sx={{ width: "50px", height: "50px", minWidth: "unset" }}
        >
          {getCellString(gridState[2][2])}
        </Button>
      </Grid2>
    </>
  );
}

export default App;
